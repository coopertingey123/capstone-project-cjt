import React from 'react'

export default function registration(props) {
    return (
        <div>
            <div className='registration-wrapper'>
                <button>Sign Up as a Customer</button>
                <button>Sign Up as a Business Owner</button>
            </div>
            <div className="form-wrapper">
                <form action="">
                    <input type="text" placeholder="First name"/>
                    <input type="text" placeholder="Last name"/>
                    <input type="text" placeholder="Email"/>
                    <input type="text" placeholder="Password"/>
                    <input type="text" placeholder="Confirm Password"/>
                    <input type="text" placeholder="Address"/>
                    <input type="text" placeholder="Phone number"/>
                    <input type="text" placeholder="Payment method"/> 
                    <textarea name="requests" id="" cols="30" rows="10" placeholder="Special Requests"></textarea>
                </form>
            </div>
        </div>
    )
}