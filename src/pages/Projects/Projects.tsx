import React, { useEffect, useState } from "react";
import { Carousel } from '@mantine/carousel';
import './Projects.css';
import PCA from '../../statics/images/PCA.png';
import Limited_Move from '../../statics/images/Limited-Move.png';
import Cybercision from '../../statics/images/Cybercision.png';
import File_Sharing from '../../statics/images/File-sharing.png';
import Rollingstep from '../../statics/images/Rollingstep.png'
import { motion } from 'framer-motion';
import { createStyles, getStylesRef } from '@mantine/core';
import { Modal } from '@mui/material';
import Loading from '../../components/Loading/Loading';

interface Link {
    link: string,
    name: string
}

interface SlideInterface {
    title: string,
    shortDesc: string,
    longDesc: string,
    language?: string,
    tools?: string,
    framework?: string,
    links?: Array<Link>,
    image?: string
}

const useStyles = createStyles(() => ({
    controls: {
      ref: getStylesRef('controls'),
      transition: 'opacity 150ms ease',
      opacity: 0,
    },
  
    root: {
      '&:hover': {
        [`& .${getStylesRef('controls')}`]: {
          opacity: 1,
        },
      },
    },
}));

const Slide: React.FC<SlideInterface> = 
    ({...props}) => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    const closedSlide = {
        width:"18vw",
    }

    return (
        <div className="awd">
            <motion.div 
                className="slider-container"
                whileHover={{
                    scale: 1.05,
                }}
                onClick={handleOpen}
            >
                <div className="slider-title-min">{props.title}</div>
                <img alt={props.image} src={props.image} style={closedSlide} className="slide-image"/>
                <div className="slider-description-min">
                    <div className="slider-left-min">
                        {props.shortDesc}
                    </div>
                    <div className="slider-right-min">
                        <div className="slider-topic">Language:</div>
                        <div>{props.language}</div>
                        <div className="slider-topic">Tools:</div>
                        <div>{props.tools}</div>
                        {
                            props.framework &&
                            <div className="slider-right-min">
                                <div className="slider-topic">Frameworks: </div>
                                <div>{props.framework}</div>
                            </div>
                        }
                    </div>
                </div>

            </motion.div>
            <Modal 
            open={open}
            onClose={handleClose}
            aria-labelledby="slider-title"
            aria-describedby="slider-description"
            className="modal-container"
            >
                <motion.div 
                    className="slider-modal"
                    initial={{ scale: 0.001 }}
                    animate={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                >
                    <div className="slider-title">{props.title}</div>
                    <img alt={props.image} src={props.image} width={400} className="slide-image"/>
                    <div className="slider-description">
                        <div className="slider-left">
                            {props.longDesc}
                        </div>
                        <div className="slider-right">
                            <div className="slider-topic">Language: </div>
                            <div>{props.language}</div>
                            {
                                props.tools &&
                                <div className="slider-right">
                                    <div className="slider-topic">Tools: </div>
                                    <div>{props.tools}</div>
                                </div>
                            }
                            {
                                props.framework &&
                                <div className="slider-right">
                                    <div className="slider-topic">Frameworks: </div>
                                    <div>{props.framework}</div>
                                </div>
                            }
                            <div className="slider-topic">Links: </div>
                            <div className="slider-links">
                                {props.links?.map(({link, name},) => {
                                    return (
                                        <a href={link}>{name}</a>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </motion.div>
        </Modal>
        </div>
    )
}

const Projects: React.FC<{}> = () => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        setTimeout(() => {
            setLoading(false);
        }, 1100);
    }, []);

    const { classes } = useStyles();
    return (
        <div>
            {loading 
            ? 
                <Loading bgcolor="white" color="black"/>
            :
            (
            <div className="Projects">
                <div className="projects-header">My Projects</div>
                <div className="mid">
              <div className="carousel-border" />
              <motion.div
                  transition={{duration: 1}}
                  initial={{opacity: 0}}
                  animate={{opacity: 1}}>
              <Carousel
                  className="carousel"
                  withIndicators
                  slideSize="31.5%"
                  slideGap="md"
                  loop
                  align="center"
                  breakpoints={[
                    { maxWidth: 'md', slideSize: '31.5%' },
                    { maxWidth: 'sm', slideSize: '100%', slideGap: 0 },
                  ]}
                  classNames={classes}
              >
                  <Carousel.Slide>
                      <Slide 
                          title={"Cybercision"}
                          shortDesc={"A puzzle/minigame game with visual novel elements and story. The game won audience choice award and best audio."}
                          longDesc={"A puzzle/minigame game with visual novel elements and story. The player will use their logical and finesse skills to perform cybernetic surgery on a grab bag of wacky patients and customers to experience the daily life of Firth in the rain drenched cyberpunk setting of Monsoon City. The game won audience choice award and best audio."}
                          language={"C#"}
                          tools={"Git | Unity"}
                          links={[
                              {
                                  name: "Github",
                                  link: "https://github.com/engineereng/cybercision"
                              },
                              {
                                  name: "Itch.io",
                                  link: "https://engineereng.itch.io/cybercision"
                              }
                          ]}
                          image={Cybercision}
                      />
                  </Carousel.Slide>
                  <Carousel.Slide>
                      <Slide 
                          title={"Limited Move"}
                          shortDesc="A personal 2D puzzle game where you can create your own level in creative mode or solve puzzles in campaign mode using mainly React.js."
                          longDesc="A personal 2D puzzle game where you can create your own level in creative mode or solve puzzles in campaign mode using mainly React.js. The player will use their logical thinking to strategize a way to finish the puzzle."
                          language={"HTML | CSS | Javascript"}
                          tools={"Git"}
                          framework={"React | Styled-components"}
                          links={[
                              {
                                  name: "Github",
                                  link: "https://github.com/erickj04/LimitedMove"
                              }
                          ]}
                          image={Limited_Move}
                      />
                  </Carousel.Slide>
                  <Carousel.Slide>
                      <Slide 
                          title={"File Sharing"}
                          shortDesc="A simple file-sharing app using Firebase to store and deploy the app. It uses deno for the backend to delete files that has been stored for longer than a week"
                          longDesc="A simple file-sharing app using Firebase to store and deploy the app. It uses deno for the backend to delete files that has been stored for longer than a week"
                          language={"Typescript"}
                          tools={"Firebase"}
                          framework={"Deno"}
                          links={[
                              {
                                  name: "App",
                                  link: "https://file-sharing-d8a60.firebaseapp.com/"
                              },
                              {
                                  name: "Github",
                                  link: "https://github.com/ThePrevailingOne/file-sharing"
                              }
                          ]}
                          image={File_Sharing}
                      />
                  </Carousel.Slide>
                  <Carousel.Slide>
                      <Slide 
                          title={"Rollingstep Linkage"}
                          shortDesc="Research to introduce a new foot structure for legged robots that has a large surface area that resembles the rolling motion of a wheel, which is
                          uncommon for legged robots. I designed, simulated, and optimized the model by coding it using C++ and Particle Swarm Optimization method."
                          longDesc="This research aims to find the optimal geometric shape in a walking robot
                          mechanism design using legs that are made to resemble the rolling motion of a
                          wheel in part of its steps to obtain the best constant speed and stepping pattern. In the end, we made a simple 4 bar linkage using 3D printing, which resembles rolling motion has been designed, manufactured, and tested. The design is proven to be capable of walking smoothly across flat, level terrain. However, the current model is not capable of walking on
                          dirt because the dynamo is not sufficiently powerful to overcome the friction from the ground."
                          language={"C++"}
                          tools={"Dev C++"}
                          links={[
                              {
                                  name: "Pitch Video",
                                  link: "https://www.youtube.com/watch?v=FxcZaMDNjMw&ab_channel=festivalsainsbudaya"
                              },
                              {
                                  name: "Research Paper",
                                  link: "https://drive.google.com/file/d/1I-DvZQ7KZbNlQUhOxusSEn2PhdHeZGOm/view"
                              }
                          ]}
                          image={Rollingstep}
                      />
                  </Carousel.Slide>
                  <Carousel.Slide>
                      <Slide 
                          title={"Water Index Prediction"}
                          shortDesc="Created a prediction model for the Pacific Conference on Artificial Intelligence Case Competition which predicts the water index of a region using geographical coordinates and satellite images."
                          longDesc="Built a prediction model using geographical and social data, including latitude, longitude, area code, wealth, and number of houses per cluster. By incorporating satellite images as a training tool and using Random Forests, Extra Trees, and CatBoost techniques, our model accurately forecasts water quality in a specific region. Our efforts align with a UN Sustainable Development Goal on clean water access, and we achieved the highest coefficient of determination score (0.76087) in the BizInnovate competition."
                          language={"Python"}
                          tools={"Kaggle"}
                          links={[
                              {
                                  name: "Notebook",
                                  link: "https://drive.google.com/file/d/1UcKsmgOFub0nbRjBWrxuCKv4AqNT3Vek/view"
                              },
                              {
                                  name: "Pitch Video",
                                  link: "https://drive.google.com/file/d/14CuHfHpGxgeuej1SNfNZcBRdgkpX12Iv/view"
                              }, {
                                  name: "Presentation",
                                  link: "https://docs.google.com/presentation/d/1rouQCeZ3oYJ_b3TsdvYcrWVb6fuO4gEK/edit?usp=sharing&ouid=111436335955625337743&rtpof=true&sd=true"
                              }
                          ]}
                          image={PCA}
                      />
                  </Carousel.Slide>
              </Carousel>
              </motion.div>
              <div className="carousel-border" />
            </div>
            </div>
            )}
        </div>
    )
}

export default Projects;