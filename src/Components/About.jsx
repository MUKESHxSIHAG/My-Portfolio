import { Container } from "react-bootstrap"
import { Building } from "./Icons"


const About = () => {
  return (
    <>
 <Container>
 <div className="pt-5 mt-5">
        <h2 className="ff-poppins fc-primary fw-600 fs-36">About Me</h2>
        <p className="max-708 pt-3 fc-black fs-20 fw-500 ff-montserrat">The Generator App is an online tool that helps you to export ready-made templates ready to work as your future website. It helps you to combine slides, panels and other components and export it as a set of static files: HTML/CSS/JS.</p>
    </div>
    <div className="pt-4 max-708">
        <h2 className="ff-poppins fc-primary fw-600 fs-36">Education</h2>
        <div className="d-flex justify-content-between align-items-center">
            <p className=" fs-20 fw-500 ff-montserrat fc-black mb-0">Secondary Schooling Education</p>
            <p className="time text-center fs-16 ff-poppins fw-700 mb-0">Full time</p>
        </div>
        <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex justify-content-center align-items-center">
                <Building/>
<p className=" fc-light fs-16 ff-poppins fw-400 mb-0">Balaji Public School, Bhattu Mandi </p>
            </div>
            <div>
                <p className=" fs-16 fw-400 fc-light ff-poppins mb-0">April,2019 - March,2020</p>
            </div>
        </div>


        <div className="d-flex justify-content-between align-items-center mt-3">
            <p className=" fs-20 fw-500 ff-montserrat fc-black mb-0">Senior Secondary Schooling Education</p>
            <p className="time text-center fs-16 ff-poppins fw-700 mb-0">Full time</p>
        </div>
        <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex justify-content-center align-items-center">
                <Building/>
<p className=" fc-light fs-16 ff-poppins fw-400 mb-0">Balaji Public School, Bhattu Mandi </p>
            </div>
            <div>
                <p className=" fs-16 fw-400 fc-light ff-poppins mb-0">April,2021 - March,2022</p>
            </div>
        </div>

        <div className="d-flex justify-content-between align-items-center mt-3">
            <p className=" fs-20 fw-500 ff-montserrat fc-black mb-0">Bachelor in Computer Applications</p>
            <p className="time text-center fs-16 ff-poppins fw-700 mb-0">Full time</p>
        </div>
        <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex justify-content-center align-items-center">
                <Building/>
<p className=" fc-light fs-16 ff-poppins fw-400 mb-0">Manohar Memorial College, Fatehabad </p>
            </div>
            <div>
                <p className=" fs-16 fw-400 fc-light ff-poppins mb-0">Now Persuing</p>
            </div>
        </div>
    </div>
 </Container>
    </>
  )
}

export default About