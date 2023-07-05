import React from 'react';
import Profile from '../../statics/images/my-picture.jpeg';
import { Avatar, Button } from '@mui/material';
import './About_Me.css';
import Education from '../../components/Education/Education';
import Skills from '../../components/Skills/Skills';
import Contact_Me from '../../components/Contact_Me/Contact_Me';

const About_Me: React.FC<{}> = () => {
    return (
        <div className='About_me'>
            <div className='about_me-header'>
                <Avatar 
                    alt="my-picture"  
                    src={Profile}  
                    sx={{ width: 200, height: 200 }}
                />
                <div className='description-container'>
                    <div>
                        A second-year Computer Science student at UBC Vancouver with strong interests in Software Engineering and Game Development. Suffice to say I like learning new things and making cool projects.
                    </div>
                    <div>Have any ideas?</div>
                </div>
            </div>
            <Button href='https://drive.google.com/file/d/1nAfbiCC6thK5aT79lB5E9W8VJ0DUFt61/view?usp=sharing'><h1>Click here for my Resume</h1></Button>
            <div className='content'>
                <Skills />
                <Education />
            </div>
        </div>
    )
}

export default About_Me;