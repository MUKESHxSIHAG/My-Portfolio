
import  { useState } from 'react'
import { Container } from 'react-bootstrap'
import { Link } from "react-router-dom"
import { RxCross1 } from 'react-icons/rx';
import { RxHamburgerMenu } from 'react-icons/rx'
import { GitHub, Linkedin, Twitter } from './Icons';
import Logo from '../assets/Images/Logo.jpg'

const PortfolioNav = () => {
    const [first, setfirst] = useState(true)


    function shownav() {
        setfirst(false)
        document.body.classList.add("overflow-hidden")
    }
    function hidenav() {
        setfirst(true)
        document.body.classList.remove("overflow-hidden")
    }
    return (
        <section className='bg-white'>
            <Container>
                <div className='d-flex justify-content-between py-1 align-items-center' >
                    <div>
                      <img className='cursor-pointer' height={40}  src={Logo} alt="Logo" />
                    </div>

                    <div className='position-relative z-3 d-lg-none text-black fs01' onClick={first ? shownav : hidenav}>  {first ? <RxHamburgerMenu /> : <RxCross1 />}  </div>
                    <ul className={first ? 'd-flex justify-content-center align-items-center gap-5 nav_bar pt-2 ps-0' : "d-flex ps-0 gap-5 nav_bar pt-2 show"} >
                        <li className='pt-2'><Link to="/" className='fc-secondary fw-600 ff-openSans fs-20 hvr' >HOME</Link></li>
                        <li className='pt-2'><Link className='fc-secondary fw-600 ff-openSans fs-20 hvr'>ABOUT</Link></li>
                        <li className='pt-2'><Link to="./ " className='fc-secondary fw-600 ff-openSans fs-20 hvr'>TECH STACK</Link></li>
                        <li className='pt-2'><Link to='/projects' className='fc-secondary fw-600 ff-openSans fs-20 hvr'>PROJECTS</Link></li>
                        <li className='pt-2'><Link className='fc-secondary fw-600 ff-openSans fs-20 hvr'>CONTACT</Link></li>
                       <form className='d-flex justify-content-center align-items-center gap-3'>
                       <li className='pt-2'><a className='svg1' href="https://github.com/MUKESHxSIHAG"><GitHub/></a></li>
                        <li className='pt-2'><a className='svg1' href="https://www.linkedin.com/in/mukesh-kumar-72ab2b283/"><Linkedin/></a></li>
                        <li className='pt-2'><a className='svg1' href=""><Twitter/></a></li>
                       </form>
                    </ul>

                </div>


            </Container>
        </section>
    )
}

export default PortfolioNav
