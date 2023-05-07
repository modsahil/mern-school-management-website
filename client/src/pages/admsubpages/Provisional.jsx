import React from 'react'
import '../../styles/provisional.css'
import Layout from '../../components/layout/Layout'

const Provisional = () => {
    return (
        <Layout>
            <div className="provisional">

                <div className="provisional-head">
                    <h2 className='heading-school'>D.A.V. PUBLIC SCHOOL, SAWANG, CCL, BOKARO(JH)</h2>
                    <h6>PROVISIONAL ADMISSION NOTICE FOR CLASS XI 2023 2024</h6>


                    <p className="u-head">The online application is invited for the Provisional Admission in Class XI for the academic session 2021 -2022. The stream or subject combinations offers are as follows:</p>

                    <a href="" className="r-form-btn">Register Now</a>
                </div>

                <div className="cards">
                    <div className="card1">
                        <h6 className='c-head'>Science (PCM)</h6>

                        <ul className="c-body">
                            <li>English</li>
                            <li>Physics</li>
                            <li>Chemistry</li>
                            <li>Mathematics</li>
                            <li>Physical & Health Education</li>
                            <li className='opt-bold '>6th Paper Optional (Choose any one)</li>
                            <li>Computer Science</li>
                            <li>Hindi</li>
                            <li>Sanskrit</li>
                        </ul>
                    </div>

                    <div className="card2">
                        <h6 className='c-head'>Science (PCB)</h6>


                        <ul className="c-body">
                            <li>English</li>
                            <li>Physics</li>
                            <li>Chemistry</li>
                            <li>Biology</li>
                            <li>Physical & Health Education</li>
                            <li className='opt-bold '>6th Paper Optional (Choose any one)</li>
                            <li>Computer Science</li>
                            <li>Mathematics</li>
                            <li>Hindi</li>
                            <li>Sanskrit</li>
                        </ul>
                    </div>
                    <div className="card3">
                        <h6 className='c-head'>Commerce</h6>


                        <ul className="c-body">
                            <li>English</li>
                            <li>Accountancy</li>
                            <li>Economics</li>
                            <li>Business Studies</li>
                            <li>Physical & Health Education</li>
                            <li className='opt-bold '>6th Paper Optional (Choose any one)</li>
                            <li>Computer Science</li>
                            <li>Hindi</li>
                            <li>Mathematics</li>
                            <li>Sanskrit</li>
                        </ul>
                    </div>
                </div>
                <div className="point-container">
                    <p className='card-bottom'>The process for the regular admission and final allotment of the stream or subject combination of students will be finalized once the result of AISSE 2021 is declared by C.B.S.E., New Delhi.</p>

                    <div className="noted">
                        <h6>Points To Be Noted</h6>

                        <div className="noted-points">
                            <ol className='points'>
                                <li>The ADMISSION is completely PROVISIONAL is liable to be cancelled in case a student fails/gets compartment in AISSE 2021 or fails to qualify the admission criteria.</li>
                                <li>The regular admission and allotment of subjects in Class XI will be held after the declaration of the result of AISSE 2021 and as per the admission policy of the school.</li>
                                <li>The Parents/guardians will have to complete all the formalities regarding the regular admission and eligibility after the grant of the opted stream or subject combinations.</li>
                                <li>The decision of the school related to the stream or subject selection will be final and no request related to any change beyond the admission policy will be entertained.</li>
                                <li> Some relaxation may be given in the admission policy to the students of D.A.V. Public School, Sawang, CCL, Bokaro on the basis of their past track record in the school.</li>
                                <li>The School Management reserves the right to add, alter, amend, or cancel any of the rules, procedures prevailing at any time which will be binding on the students/parents/guardians.</li>
                                <li>The mode of registration for the provisional admission in Class XI will be online. The parents/guardians/students are requested to visit the link to apply. The list of the selected students for the provisional admission will be available on the school’s website (www.davsawang.in) as per the details given below:

                                    1st List: 07.05.2021                                    2nd List: 15.05.2021

                                    3rd List: 26.05.2021                                    4th List: 15.06.2021</li>

                            </ol>
                        </div>
                    </div>
                </div>
            </div>

        </Layout >
    )
}

export default Provisional