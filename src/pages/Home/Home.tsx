import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import CONTACT_LINKS from '../../statics/Links';
import { motion } from 'framer-motion';
import './Home.css';
// @ts-ignore
import Particles from "react-tsparticles";
import { loadFull } from 'tsparticles';
import { Engine } from 'tsparticles-engine';


const Home: React.FC<{}> = () => {
    const particlesInit = async (main : Engine) => {
        await loadFull(main);
      };
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
            <Particles id="tsparticles"
                init={particlesInit}
                options={{
                    fullScreen: {
                        enable: true,
                        zIndex: -999
                    },
                fpsLimit: 120,
                interactivity: {
                    events: {
                    onClick: {
                        enable: true,
                        mode: "push"
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse"
                    },
                    resize: true
                    },
                    modes: {
                    push: {
                        quantity: 2
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    }
                    }
                },
                particles: {
                    color: {
                    value: "#000000"
                    },
                    links: {
                    color: "#000000",
                    distance: 150,
                    enable: true,
                    opacity: 0.3,
                    width: 1
                    },
                    collisions: {
                    enable: true
                    },
                    move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce"
                    },
                    random: false,
                    speed: 2,
                    straight: false
                    },
                    number: {
                    density: {
                        enable: true,
                        area: 800
                    },
                    value: 40
                    },
                    opacity: {
                    value: 0.3
                    },
                    shape: {
                    type: "circle"
                    },
                    size: {
                    value: { min: 1, max: 5 }
                    }
                },
                detectRetina: true
                
                }}
            />
            <div className='home-header'>
                <div className="intro">Hi, I'm Erick Jovan Muljadi</div>
                <img 
                    alt="loading..." 
                    src={"https://media.tenor.com/Dr5sZCODJ50AAAAi/mochi-mochi-hello-grey-cat-mochi-mochi.gif"}
                    className='waving-cat'
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
                    "Hello! I like playing Starcraft II",
                    1000,
                    "Hello! I like eating Indomie",
                    1000
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