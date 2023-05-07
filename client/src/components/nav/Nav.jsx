import React, { useState } from "react";
import { NavLink, Link } from 'react-router-dom';
import { CgMenu } from 'react-icons/cg';
import { IoMdArrowDropdown } from 'react-icons/io';
import IMG1 from "../../Assests/LOGO.png";
import './nav.css';



const Nav = () => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    }

    return (<>
        <nav id="nav">
            <div className="container__navbar" >

                <Link to={'/'}><img src={IMG1} alt="" /></Link>
                <ul className="nav__menu">
                    <li><NavLink to={'/'}>Home</NavLink></li>
                    <li><NavLink to={'/payfee'}>Pay Fees</NavLink></li>
                    <li>Admission <IoMdArrowDropdown className="drop-down-icon" />
                        <ul className="drop-down">
                            <li><NavLink to={'/provisional'}>Online Provisional Admission For Class XI</NavLink></li>
                            <li><NavLink to={'/'}>Transfer Certificate</NavLink></li>
                            <li><NavLink to={'/'}>Admission Procedure</NavLink></li>
                            <li><NavLink to={'/'}>Admission and withdrawal</NavLink></li>
                            <li><NavLink to={'/'}>Admission Form</NavLink></li>
                        </ul>
                    </li>
                    <li>Help <IoMdArrowDropdown className="drop-down-icon" />
                        <ul className="drop-down">
                            <li><NavLink to={'/'}>P.T.M</NavLink></li>
                            <li><NavLink to={'/'}>Contact Us</NavLink></li>
                            <li><NavLink to={'/'}>Feedback</NavLink></li>
                        </ul>
                    </li>
                    <li>Academic <IoMdArrowDropdown className="drop-down-icon" />
                        <ul className="drop-down">
                            <li><NavLink to={'/'}>Promotional Rules</NavLink></li>
                            <li><NavLink to={'/'}>Instruction to Students</NavLink></li>
                            <li><NavLink to={'/'}>Guidelines For Parents</NavLink></li>
                            <li><NavLink to={'/'}>School Uniform</NavLink></li>
                        </ul>
                    </li>
                    <li>Gallery <IoMdArrowDropdown className="drop-down-icon" />
                        <ul className="drop-down">
                            <li><NavLink to={'/'}>DAV Students</NavLink></li>
                            <li><NavLink to={'/'}>DAV Occassions</NavLink></li>
                        </ul>
                    </li>
                    <li>Faculty <IoMdArrowDropdown className="drop-down-icon" />
                        <ul className="drop-down">
                            <li><NavLink to={'/'}>Teaching Staff</NavLink></li>
                            <li><NavLink to={'/'}>Non-Teaching Staff</NavLink></li>
                        </ul>
                    </li>
                    <li><NavLink to={'/result'}>Result</NavLink></li>
                    <li><NavLink to={'/achievement'}>Achievements</NavLink></li>
                    <li><NavLink to={'/facilities'}>Facilities</NavLink></li>
                </ul>

                <div className="menu-button" onClick={toggleDrawer}>
                    <CgMenu />
                </div>


            </div>
        </nav>
        <div className={`drawer ${isDrawerOpen ? 'open' : ''}`}>
            <ul className="drawer-menu">
                <li>
                    <NavLink to="/" onClick={toggleDrawer}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/" onClick={toggleDrawer}>
                        Pay Fees
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/" onClick={toggleDrawer}>
                        Admission
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/" onClick={toggleDrawer}>
                        Help
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/" onClick={toggleDrawer}>
                        Academic
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/" onClick={toggleDrawer}>
                        Gallery
                    </NavLink>
                </li>
                 <li>
                    <NavLink to="/" onClick={toggleDrawer}>
                        Faculty
                    </NavLink>
                </li>
                    <li>
                        <NavLink to="/" onClick={toggleDrawer}>
                            Result
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/" onClick={toggleDrawer}>
                            Achievement
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/" onClick={toggleDrawer}>
                            Facilities
                        </NavLink>
                    </li>
            </ul>
        </div>
    </>
    )
}

export default Nav