import React from 'react'
import './principal.css'
import PRINCIPAL from '../../Assests/Principalu.jpg'


const Principal = () => {
    return (
        <section className='principal'>
            
            <div className="container container__principal">
                <div className="principal__head">
                    {/* <h4>DAV</h4> */}
                    <h2>Principal Message</h2>
                </div>

                <div className="principal__content">
                    <div className="principal-left-content">
                        <article className="content">
                            <img src={PRINCIPAL} alt="" />
                            <h4>Dr. SK Sharma</h4>
                            <h6>Principal</h6>
                        </article>
                    </div>

                    <div className="principal-right-content">
                        <p>Our school is a branch of that sprawling D.A.V. tree which is rooted in ancient Indian Tradition but which reaches out to the sky. Being a part of such an illustrious organization we have a tremendous responsibility. We are conscious of the fact that we have to fulfill the sacred mission of visionaries like Swami Dayanand, who lit the torch of education when our country was reeling in the darkness of illiteracy, superstition and decadence and this gives us confidence to move ahead despite hurdles and stumbling blocks. We have built our school step by step and brick by brick. Sometimes we falter but we never lose sight of our aim-to create an edifice of education which would be pride & prestige of D.A.V. organization. This aim gives us courage to move ahead with more zeal and determination. It is our endeavour to acquaint our children with vedic culture and teach them to be morally upright but at the same time give them modern outlook so that they remain abreast with the fast-changing world. We strive to provide them with facilities and infrastructure at par with the best. We continuously upgrade our labs and library. We give our students opportunities to realize their talents and potential through inter House and Inter School Competitions. We are fortunate that we have a highly qualified staff who constantly sharpen their knowledge and intellect by attending seminars and workshops. We want to give our best to our students. Nurturing curiosity, ambition, self-confidence, responsibility and integrity shall always be our motto.

                            Lastly, We, Academicians realize that Education is not filling a pail but the lighting of fire that must lead on from darkness of ignorance to the light of knowledge and therefore, we have to give our best year after year.

                            - may darkness be dispelled and light prevail.

                            - may the destruction forces of ignorance be overcome and eternal bliss prevail.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}



export default Principal