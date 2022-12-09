import './About.css'

import { Link } from "react-router-dom";

function About() {
    return (
        <div className="about">
            <div className="about-title">About Us</div>
            <span className="about-cont">
                Mr. Dennis Chinh, the founder of Voyages Saigon, has two
                Vietnamese and French bloodlines. He settled in the United
                States in the 1970s, graduated from Oriental Culture and worked
                at Unesco. Because of those facilities, Dennis has an endless
                love and passion for culture, especially Oriental culture. He
                has had in-depth cultural studies with the lands he has visited.
                Partnering with Dennis is Tony Nguyen, a Vietnamese native
                tourist with 30 years of experience throughout Indochina.
            </span>
            <Link to="/Company/AboutUs" className='about-more'>See more ...</Link>
        </div>
    );
}

export default About;
