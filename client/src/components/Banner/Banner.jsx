import React from 'react'
import "./Banner.css";
import b2 from "../../assets/modi2.png"

const Banner = () => {
    return (
        <div className='main'>
            <div className="main-description">
                <h2 className='heading'>
                    National Portal for Subsidy Government Schemes.
                </h2>
                <p className='context'>One-stop digital portal linking Government Schemes. Check your eligibility, apply online and get didital approved.</p>
            </div>
            <div className="main-image">
                <img className='image_banner' src={b2} alt="image"/>
            </div>
        </div>
    )
}
export default Banner