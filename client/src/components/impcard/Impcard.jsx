import React from "react";
import './impcard.css'
import {FaRupeeSign} from 'react-icons/fa'
import {GiTeacher} from 'react-icons/gi'
import {FaSchool} from 'react-icons/fa'
import {BsBookmarkFill} from 'react-icons/bs'
import {BsTrophyFill} from 'react-icons/bs'
import {RiGalleryUploadFill} from 'react-icons/ri'


const Impcard = () => {
    return(
       <section className="impCard">
        <div className="container container__impcard">
            <div className="imp_head">
                <h4>DAV</h4>
                <h2>Service</h2>
            </div>

            <div className="imp__cards">
                <article className="imp__card">
                <FaRupeeSign  className="uil"/>
                    <h3>Pay Fee Online</h3>
                 <p>Pay your children fee from anywhere and anytime</p>
                    <a href="#" className="btn-card">Visit</a>
                </article>

                <article className="imp__card">
                    <GiTeacher className="uil"/>
                    <h3>Teaching Staff</h3>
                    <p>Find all of our teachers and works details here</p>
                    <a href="#" className="btn-card">Visit</a>
                </article>

                <article className="imp__card">
                    <FaSchool className="uil" />
                    <h3>Our Circulars</h3>
                    <p>Know DAV circle where we are booming</p>
                    <a href="#" className="btn-card">Visit</a>
                </article>

                <article className="imp__card">
                    <BsBookmarkFill className="uil" />
                    <h3>Admission</h3>
                    <p>Find Admission Details and form from here</p>
                    <a href="#" className="btn-card">Visit</a>
                </article>
                
                <article className="imp__card">
                    <BsTrophyFill className="uil"/>
                    <h3>Toppers</h3>
                    <p>Pay your children fee from anywhere and anytime</p>
                    <a href="#" className="btn-card">Visit</a>
                </article>

                <article className="imp__card">
                    <RiGalleryUploadFill className="uil"/>
                    <h3>Gallery</h3>
                    <p>Pay your children fee from anywhere and anytime</p>
                    <a href="#" className="btn-card">Visit</a>
                </article>

            </div>
        </div>
       </section>
    )
}




export default Impcard