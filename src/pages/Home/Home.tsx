import React from 'react';
import { Avatar} from '@mui/material';
import profile from "../../statics/images/Profile-Picture.jpg";
import { TypeAnimation } from 'react-type-animation';
import CONTACT_LINKS from '../../statics/Links';
import { motion } from 'framer-motion';
import './Home.css';


const Home: React.FC<{}> = () => {

    const contacts = CONTACT_LINKS.map(({ICON, REF}) => {
        return (
            <React.Fragment>
                <motion.a href={REF}>
                    <motion.img
                        whileHover={{
                            scale: 1.1,
                            y: -10,
                            transition: {
                                repeatDelay: 0.3,
                                repeat: Infinity,
                                repeatType: "reverse",
                                type: "spring",
                            }
                        }}
                        alt={ICON} 
                        src={ICON} 
                        style={{ width: 50, height: 50 }}
                    />
                </motion.a>
            </React.Fragment>
        )
    })

    return (
        <div className='Home'>
            <div className='home-header'>
                <Avatar 
                    alt="my-picture" 
                    src={profile} 
                    sx={{ width: 200, height: 200 }}
                />
                <TypeAnimation className='name' cursor={false} 
                    sequence={[
                        "Erick Jovan Muljadi"
                    ]} 
                    speed={60}/>
                <TypeAnimation className='slogan' sequence={[
                    "one",
                    1000,
                    "two",
                    1000,
                    "three",
                    1000,
                    "four",
                    1000,
                    "five",
                    1000
                ]}
                repeat={Infinity}/>
            </div>
            <div className='contacts'>
                <div className='contacts-title'>CONTACTS</div>   
                <div className='contact-links'> 
                    {contacts}
                </div> 
            </div>
        </div>
    )
}

export default Home;