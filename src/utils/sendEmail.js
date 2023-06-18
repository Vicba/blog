import React from 'react';
import axios from 'axios';

export const sendMail = async ({email}) => {

    try{
        await axios.post("https://blog-backend-dvnh.onrender.com/api/v1/welcomeMail", {email})
        
    }catch(error){
        console.log(error)
    }
}