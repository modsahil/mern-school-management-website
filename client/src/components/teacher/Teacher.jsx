import React from 'react'
import './teacher.css'
// import data from './TeacherData'

const staff = [
    {
        id: 1,
            image: './staff/Dr S K Sharma_2.jpg',
            name: 'Dr. S.K. Sharma',
            designation: 'Principal',
            qualification: 'M.Com. B.Ed Ph.D STET'
    },
    {
        id: 2,
            image: './staff/NIRMAL BEHURA.png',
            name: 'Mr. Nirmal Behura',
            designation: 'Sr. PGT (S.H)',
            qualification: 'M.Com. DCA, B.Ed'
    },
    {
        id: 3,
        image: './staff/R K Aggarwal.jpg',
        name: 'Mr. Ravikant Agrawal',
        designation: 'Sr. TGT',
        qualification: 'MCA'
    },
    {
        id: 4,
            image: './staff/S N RAI_1.jpeg',
            name: 'Mr. Satyendra Narayan Rai (PET)',
            designation: 'Sr. PRT',
            qualification: 'B.Com (Hons), M. P. Ed.'
    }
]




const Teacher = () => {
    return (
        <section className="teachers">
            <div className="teachers__heading">
            <h2> Our <span> Teachers </span></h2>
            </div>
           
            <div className="container container__teacher">
                { 
                    staff.map(({ id, image, name, designation, qualification}) => {
                        return (
                            <article key={id} className="each__teacher">
                            <div className="teacher-image">
                                <img src={image} alt={name} />
                            </div>
        
                            <div className="teacher-info">
                                <h2>{name}</h2>
                                <h4>{designation}</h4>
                                <p>{qualification}</p>
                            </div>
                        </article>
                       
                        )
                    })
                }
                
            </div>
            <div className="teacher__btn">
                <a href="#" className='btn'> View More</a>
            </div>
            
        </section>
    )
    }


export default Teacher