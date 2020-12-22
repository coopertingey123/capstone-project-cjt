import React from 'react';
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { fabFaInstagram } from "@fortawesome/free-solid-svg-icons"

export default function footer(props) {
    return (
        <div className='footer-wrapper'>
            <div className="phone-number">
                Call us at: (480)-111-1111
            </div>
            <div className="email">
                Send us an email at : trashtime@yahoo.com
            </div>
            <div className="instagram">
                <a href="www.instagram.com/trashtime">Check us out on Instagram! <FontAwesomeIcon icon={fabFaInstagram} /></a>

            </div>
        </div>
    )
}