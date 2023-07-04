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
                <h1>Hi, I'm Erick</h1>
                <img 
                    alt="loading..." 
                    src={"https://media.tenor.com/Dr5sZCODJ50AAAAi/mochi-mochi-hello-grey-cat-mochi-mochi.gif"} 
                />
                <TypeAnimation className='name' cursor={false} 
                    sequence={[
                        "Check out my website!"
                    ]} 
                    speed={60}/>
                <TypeAnimation className='slogan' sequence={[
                    "Hello! I am a compsci student",
                    1000,
                    "Hello! I am a sushi lover",
                    1000,
                    "Hello! I like playing chess",
                    1000,
                    "Hello! I like playing badminton",
                    1000,
                ]}
                speed={60}
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