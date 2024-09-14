import React from 'react'
import "./Process.css"
import verify from "../../assets/verify.svg"
import online from "../../assets/online.svg"
import approve from "../../assets/approval.svg"
import application from "../../assets/application.svg"

const Process = () => {
    return (
        <div className='p-body'>
            <div className="p-heading">
                <h1>The process</h1>
            </div>
            <div className="p-des container">
                <div className="des_card">
                    <img className='elements' src={verify} alt="" />
                    <h5>Check eligibility</h5>
                    <p>Answer few questions and get matched with suitable scheme(s).</p>
                </div>
                <div className="des_card">
                    <img className='elements' src={online} alt="" />
                    <h5>Apply Online</h5>
                    <p>Provide basic detail & documents and the advanced technologies would capture/ auto-fill required detail through smart analytics.</p>
                </div>
                <div className="des_card">
                    <img className='elements' src={approve} alt="" />
                    <h5>Get Digital Approval</h5>
                    <p>View offer from 200+ Lenders and get Digital approval from selected bank.</p>
                </div>
                <div className="des_card">
                    <img className='elements' src={application} alt="" />
                    <h5>Track your application</h5>
                    <p>Check the real time status of your application at your convenience.</p>
                </div>
            </div>

        </div>
    )
}

export default Process