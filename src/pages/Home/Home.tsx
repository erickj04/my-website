import React, { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import './Home.css';
// @ts-ignore
import Particles from "react-tsparticles";
import { loadFull } from 'tsparticles';
import { Engine } from 'tsparticles-engine';
import Loading from '../../components/Loading/Loading';

const Home: React.FC<{}> = () => {
    const particlesInit = async (main : Engine) => {
        await loadFull(main);
      };
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        setTimeout(() => {
            setLoading(false);
        }, 1100);
    }, []);

    return (
        <div>
            {loading 
            ? 
            <Loading bgcolor='white' color='black'/>
            :
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
                    speed: 3.5,
                    straight: false
                    },
                    number: {
                    density: {
                        enable: true,
                        area: 800
                    },
                    value: 20
                    },
                    opacity: {
                    value: 0.3
                    },
                    shape: {
                    type: "circle"
                    },
                    size: {
                    value: { min: 3, max: 8 }
                    }
                },
                detectRetina: true
                
                }}
            />
            <div className='home-header'>
                <div className="name">Hi, I'm Erick Jovan Muljadi</div>
                {/* <img 
                    alt="loading..." 
                    src={"https://media.tenor.com/Dr5sZCODJ50AAAAi/mochi-mochi-hello-grey-cat-mochi-mochi.gif"}
                    className='waving-cat'
                /> */}
                <TypeAnimation className='intro' cursor={false} 
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
        </div>
        }
        </div>
    )
}

export default Home;