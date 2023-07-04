import React, { useState } from "react";
import { Carousel } from '@mantine/carousel';
import './Projects.css';
import PCA from '../../statics/images/PCA.png';
import Limited_Move from '../../statics/images/Limited-Move.png'
import Cybercision from '../../statics/images/Cybercision.png'
import { motion } from 'framer-motion';
import { createStyles, getStylesRef } from '@mantine/core';
import { Modal } from '@mui/material';

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

    return (
        <div className="awd">
            <motion.div 
                className="slider-container"
                whileHover={{
                    scale: 1.05,
                }}
                onClick={handleOpen}
            >
                <div className="slider-title">{props.title}</div>
                <img alt={props.image} src={props.image} width={300} />
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
                                <div>
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
            >
                <motion.div 
                    className="slider-modal"
                    initial={{ scale: 0.001 }}
                    animate={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                >
                    <div className="slider-title">{props.title}</div>
                    <img alt={props.image} src={props.image} width={400} />
                    <div className="slider-description">
                        <div className="slider-left">
                            {props.longDesc}
                        </div>
                        <div className="slider-right">
                            <div className="slider-topic">Language: </div>
                            <div>{props.language}</div>
                            {
                                props.tools &&
                                <div>
                                    <div className="slider-topic">Tools: </div>
                                    <div>{props.tools}</div>
                                </div>
                            }
                            {
                                props.framework &&
                                <div>
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

      const { classes } = useStyles();
      return (
        <div className="Projects">
          <div className="projects-header">My Projects</div>
            <Carousel
                className="carousel"
                withIndicators
                slideSize="33.333333%"
                slideGap="md"
                loop
                align="center"
                breakpoints={[
                  { maxWidth: 'md', slideSize: '33.333333%' },
                  { maxWidth: 'sm', slideSize: '100%', slideGap: 0 },
                ]}
                classNames={classes}
            >
                <Carousel.Slide>
                    <Slide 
                        title={"Cybercision"}
                        shortDesc={"A puzzle/minigame game with visual novel elements and story. The player will use their logical and finesse skills to perform cybernetic surgery on a grab bag of wacky patients and customers to experience the daily life of Firth in the rain drenched cyberpunk setting of Monsoon City."}
                        longDesc={"A puzzle/minigame game with visual novel elements and story. The player will use their logical and finesse skills to perform cybernetic surgery on a grab bag of wacky patients and customers to experience the daily life of Firth in the rain drenched cyberpunk setting of Monsoon City."}
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
                        shortDesc="its a game"
                        longDesc="its a really good game"
                    />
                </Carousel.Slide>
                <Carousel.Slide>
                    <Slide 
                        title={"Rollingstep Linkage"}
                        shortDesc="its a game"
                        longDesc="its a really good game"
                    />
                </Carousel.Slide>
                <Carousel.Slide>
                    <Slide 
                        title={"Water Index Prediction"}
                        shortDesc="Created a prediction model for the Pacific Conference on Artificial Intelligence Case Competition which predicts the water index of a region using geographical coordinates and satellite images."
                        longDesc="We built a prediction model using geographical and social data, including latitude, longitude, area code, wealth, and number of houses per cluster. By incorporating satellite images as a training tool and using Random Forests, Extra Trees, and CatBoost techniques, our model accurately forecasts water quality in a specific region. Our efforts align with a UN Sustainable Development Goal on clean water access, and we achieved the highest coefficient of determination score (0.76087) in the BizInnovate competition."
                        language={"Python"}
                        tools={"Kaggle"}
                        links={[
                            {
                                name: "Github",
                                link: "https://github.com/erickj04/LimitedMove"
                            }
                        ]}
                        image={PCA}
                    />
                </Carousel.Slide>
            </Carousel>
        </div>
    )
}

export default Projects;