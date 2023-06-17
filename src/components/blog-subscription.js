import React from 'react'
import { useRef } from 'react'

export default function BlogSubscription() {
    const emailRef = useRef(null)

    const onSubmit = (e) => {
        e.preventDefault()

        const email = emailRef.current.value
        console.log(email)

        emailRef.current.value = ''
    }

  return (
    <div className="blog-subscription">
        <h3>Get notified for new posts!</h3>
        <form onSubmit={onSubmit}>
            <input ref={emailRef}  type="email" placeholder="your@favourite.email" required/>
            <button type="submit">Subscribe</button>
        </form>
    </div>
  )
}
