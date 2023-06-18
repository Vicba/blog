import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'

import {db, timestamp} from "../firebase/config"
import { collection, addDoc, getDocs, query, where} from "firebase/firestore"; 

import { sendMail } from '../utils/sendEmail';

export default function BlogSubscription() {
    const [message, setMessage] = useState(null)

    const emailRef = useRef(null)

    const onSubmit = async (e) => {
      e.preventDefault();
    
      const email = emailRef.current.value;
    
      try {
        const q = query(collection(db, "emails"), where("email", "==", email));

        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
          await addDoc(collection(db, "emails"), {
            email: email,
            createdAt: timestamp.now(),
          });
          setMessage("Email subscribed successfully!");
          sendMail({email})
        } else {
          setMessage("Email already subscribed.");
        }
      } catch (error) {
        console.error('Error adding document:', error);
        setMessage('An error occurred while subscribing.');
      }
    
      emailRef.current.value = '';
    };

  return (
    <div className="blog-subscription">
        <h3>Get notified for new posts!</h3>
        <form onSubmit={onSubmit}>
            <input ref={emailRef}  type="email" placeholder="your@favourite.email" required/>
            <button type="submit">Subscribe</button>
        </form>
        {message ? <p style={{ color: message.includes("successfully") ? "green" : "red" }}>{message}</p> : null}
    </div>
  )
}
