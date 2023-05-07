import React from 'react'
import './foot.css'
import { GrLocation } from 'react-icons/gr'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import LOGO from '../../Assests/LOGO.png'


const Foot = () => {
    return (
        <section className="footer">
            <div className="container container__footer">
                <div className="overlay"></div>
                <div className="footer-contact">
                    <div className="logo-content">
                        <img src={LOGO} alt="" />
                        <h2>DAV<span>SAWANG</span></h2>
                        <p> <GrLocation /> 203, Envato Labs, Behind Alis Steet, Melbourne, Australia.</p>

                        <div className="main__contact">
                        <p><span><BsFillTelephoneFill /></span> 7645905536</p>
                        <p><span><AiOutlineMail /></span>dav.sawang@gmail.com</p>

                    </div>
                    </div>

                    

                    <div className="footer-links">
                        <a href="#">Home</a>
                        <a href="#">About</a>
                        <a href="#">Admission</a>
                        <a href="#">Result</a>
                        <a href="#">Facilities</a>


                    </div>

                    <div className="footer-map">
                        <img src="" alt="" />
                    </div>


                </div>
                <div className="lower-footer">
                    <div class="footer__copyright">
                        <small>Copyright &copy; DAV Public School Sawang. All Rights Reserved</small>
                    </div>

                    <div className="developer">
                         <a href="#">Developed by Sahil Kumar</a>
                    </div>
                </div>
            </div>
        </section>
    )

}




export default Foot