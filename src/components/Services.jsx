import React from 'react';

function Services() {
    return (
        <div className="service">
            <div className="service-title">
                <h1>Services</h1>
                <p>Welcome to our services page</p>
                <p>
                    where we exhibit the range of expertise and solutions we offer to cater to your needs. Our commitment is to provide
                    high-quality services that assist you in accomplishing your objectives and distinguishing yourself in today's competitive
                    environment.
                </p>
            </div>
            <div className="grid-img">
                <div className="figure-1">
                    <img src="/ui developer.jpg" alt="UI Designer" />
                    <div>
                        <h1>UI Designer</h1>
                        <p>I'm a frontend developer with experience in building responsive and optimized sites.</p>
                    </div>
                </div>
                <div className="figure-1">
                    <img src="/frontend developer.png" alt="Front-End Developer" />
                    <div>
                        <h1>Front-End Developer</h1>
                        <p>I'm a frontend developer with experience in building responsive and optimized sites.</p>
                    </div>
                </div>
                <div className="figure-1">
                    <img src="/backend.png" alt="Back-End Developer" />
                    <div>
                        <h1>Back-End Developer</h1>
                        <p>I have knowledge in developing fast and optimized backend systems and APIs.</p>
                    </div>
                </div>
            </div>
            <img className='background-image-left' src="/color-sharp.png" alt="" />
        </div>
    );
}

export default Services;
