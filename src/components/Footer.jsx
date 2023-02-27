import React from 'react'
import './FooterStyles.css'

export const Footer = () => {
  return (
    <div className='footer'>
        <div className='top'>
            <div>
                <h1>Travely</h1>
                <p>Choose Your Favorite Destination</p>
            </div>
            <div>
                <a href='/'>
                    <i className='fa-brands fa-facebook-square'></i>
                </a>
                <a href='/'>
                    <i className='fa-brands fa-behance-square'></i>
                </a>
                <a href='/'>
                    <i className='fa-brands fa-twitter-square'></i>
                </a>
            </div>
        </div>


        <div className='bottom'>
            <div>
                <h4>Project</h4>
                <a href='/'>Changelog</a>
                <a href='/'>Status</a>
                <a href='/'>License</a>
                <a href='/'>All Versions</a>
            </div>
            <div>
                <h4>Community</h4>
                <a href='/'>GitHub</a>
                <a href='/'>Issues</a>
                <a href='/'>Project</a>
                <a href='/'>twitter</a>
            </div>
            <div>
                <h4>Help</h4>
                <a href='/'>Support</a>
                <a href='/'>Troubleshooting</a>
                <a href='/'>Contact Us</a>
            </div>
            <div>
                <h4>Others</h4>
                <a href='/'>Terms Of Service</a>
                <a href='/'>Privacy Policy</a>
                <a href='/'>License</a>
            </div>
        </div>
    </div>
  )
}
