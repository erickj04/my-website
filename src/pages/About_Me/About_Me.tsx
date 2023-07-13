import React from 'react';
import Profile from '../../statics/images/my-picture.jpeg';
import { Avatar, Button } from '@mui/material';
import './About_Me.css';
import Education from '../../components/Education/Education';
import Skills from '../../components/Skills/Skills';

const avatarStyle = {
    width:"12.5vw",
    height:"12.5vw"
  };

const About_Me: React.FC<{}> = () => {
    return (
        <div className='About_me'>
            <div className='about_me-header'>
                <Avatar 
                    alt="my-picture"  
                    src={Profile}  
                    sx={avatarStyle}
                    className='profile'
                />
                <div className='description-container'>
                    <div className='about_me-desc'>
                        A second-year Computer Science student at UBC Vancouver with strong interests in Software Engineering and Game Development. Suffice to say I like learning new things and making cool projects.
                    </div>
                    <div className='about_me-desc'>Have any ideas?</div>
                </div>
            </div>
            <Button href='https://drive.google.com/file/d/1nAfbiCC6thK5aT79lB5E9W8VJ0DUFt61/view?usp=sharing'><div className='resume-button'>Click here for my Resume</div></Button>
            <div className='content'>
                <Skills />
                <Education />
            </div>
        </div>
    )
}

export default About_Me;