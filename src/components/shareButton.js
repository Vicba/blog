import React from 'react'

import ShareIcon from '../images/share-icon.png'

function ShareButton({location}) {

    const Share = async () => {
        const data = {
            title: 'Victor Barra blog',
            url: location.href,
        }

        try{
            await navigator.share(data)
        } catch(err) {
            console.log(err.message)
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