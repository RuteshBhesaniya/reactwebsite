import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

const Home = (props) => {
    const history = useHistory();

    const handleGetStartedClick = () => {
        // Redirect to the service page
        history.push('/service');
    };
    return (
        <>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-md-6 d-flex flex-column gap-3">
                        <h1>Grow your business with <span style={{ color: "lightskyblue" }}>SughoshTechnolab</span></h1>
                        <p>We are team of talanted developer making-websites</p>
                        <div className="get_started_btn">
                            <button className='btn btn-outline-primary' onClick={handleGetStartedClick}>Get Started</button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img className='home_img' src={props.img} alt="img-1" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
