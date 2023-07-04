import React from 'react';
import Profile from '../../statics/images/my-picture.jpeg';
import { Avatar } from '@mui/material';
import './About_Me.css';
import Education from '../../components/Education/Education';
import Skills from '../../components/Skills/Skills';

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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
            </div>
            <div className='content'>
                <Skills />
                <Education />
            </div>
        </div>
    )
}

export default About_Me;