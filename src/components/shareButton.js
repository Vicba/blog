import React from 'react'

import ShareIcon from '../images/share-icon.png'

function ShareButton({location}) {
    
    console.log(location.href)
    // button with share api for the page where this button is
    const Share = async () => {
        const data = {
            title: 'Victor Barra blog',
            url: location.href,
        }

        try{
            await navigator.share(data)
        } catch(err) {
            alert(err.message)
        }

    }

  return (
    <div className='share-button-container'>
        <button className='shareButton' onClick={() => Share()}>
            <img src={ShareIcon} alt="share icon" className='shareIcon'/>
            Share
        </button>
    </div>
  )
}

export default ShareButton