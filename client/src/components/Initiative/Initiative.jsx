import React from 'react'
import "./Initiative.css"
import applicants from "../../assets/applicants.svg"
import lender from "../../assets/lenders and financial.svg"
import document from "../../assets/document.svg"
import nodal from "../../assets/nodal agencies.svg"
import facilator from "../../assets/facilators.svg"
import image from "../../assets/image.png"

const Initiative = () => {
    return (
        <div className="content">
            <div className='In_body'>
                <div className="In_content ">
                    <h2 className='text-5xl py-5'>About the Initiative</h2>
                    <p className='text-xl text-wrap text-justify'>JanSamarth Portal, an initiative by Government of India, is a unique digital
portal linking fourteen Credit Linked Government schemes on a single
platform, for ease of access to all the beneficiaries and related stakeholders. <br /><br />

The core objective of JanSamarth Portal is to promote inclusive growth and
development of various sectors by guiding and providing them to the right
type of Government benefits through simple and easy digital processes. The
portal ensures end-to-end coverage of all the processes and activities of all
the linked schemes. <br /><br />

The Portal uses cutting-edge technologies and smart analytics to provide
intuitive guidance to beneficiaries for checking subsidy eligibility and auto
recommendation system offers best suitable schemes as per Beneficiary's
requirements and credentials. Advanced technologies automate entire
lending processes based on digital verifications making the entire process
simple, speedy and hassle-free.</p>
                </div>
                <div className="In_table ">
                    <p className='paragraph text-xl overflow-hidden text-wrap'>Connects various stakeholders of the financial ecosystem on a single platform
                    to promote inclusive development and ease of doing business.</p><hr />
                    <p className='paragraph'><img className='svg' src={applicants} alt="" /> <h3 className='h3' >Applicants ( Benificiary)</h3></p><hr />
                    <p className='paragraph'><img className='svg' src={lender} alt="" /><h3 className='h3' >Lenders and financial Institutions</h3> </p><hr />
                    <p className='paragraph'><img className='svg' src={document} alt="" /> <h3 className='h3' >Central / State Government Ministries</h3> </p><hr />
                    <p className='paragraph'><img className='svg' src={nodal} alt="" /> <h3 className='h3' >Nodal Agencies</h3> </p><hr />
                    <p className='paragraph'><img className='svg' src={facilator} alt="" /> <h3 className='h3' >Facilitators</h3>  </p><hr />

                </div>
            </div>
            <div className="d_body">
                <div className="d_image">
                    <img className='d_img' src={image} alt="" />
                </div>
                <div className="d_discription">
                    <div className="d-heading">
                        <h1>Digital Integeration</h1>
                    </div>
                    <div className="d_para">
                        <p className='text-justify text-xl'>JanSamarth Portal, a one of its kind, is having multiple integrations within the
platform with UIDAI, CBDT, NSDL, LGD, NeSL etc. These integrations provide a
backbone of digital access to authenticate data, reducing hassles of Member Lending
Institutes (MLIs) as well as beneficiaries. The automated rule engine of JanSamarth
Portal enables beneficiaries to choose from multiple options offered by various MLIs
onboarded on the Portal.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Initiative