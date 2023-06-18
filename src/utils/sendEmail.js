import React from 'react';
import axios from 'axios';

export const sendMail = async ({email}) => {

    try{
        await axios.post("http://localhost:3000/api/v1/welcomeMail", {email})
        
    }catch(error){
        console.log(error)
    }
}