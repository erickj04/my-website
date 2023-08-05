import React, { useState } from 'react';
import {
    ListItemButton,
    Collapse,
    Typography,
    Box,
    List,
    CircularProgressProps,
    CircularProgress
 } from '@mui/material';
import { 
    ExpandMore
} from '@mui/icons-material';
import { motion } from 'framer-motion'; 
import './Skills.css';


function CircularProgressWithLabel(
    props: CircularProgressProps & { value: number },
  ) {
    return (
      <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress color="success" variant="determinate" {...props} />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography
            variant="caption"
            component="div"
            color="black"
          >{`${Math.round(props.value)}%`}</Typography>
        </Box>
      </Box>
    );
}

const itemVariants = {
    invisible: {
        opacity: 0
    },
    visible: {
        transition: {
            duration: 1,
        },
        opacity: 1
    }
}

const LanguageItem: React.FC<{name: string, mastery?: number}> = ({name, mastery}) => {
    return (
        <motion.div className='language-item'
            variants={itemVariants}
            initial="invisible"
            animate="visible"
            >
            <div className='item-title'>{name}</div>
            { 
                mastery &&
                <CircularProgressWithLabel value={mastery} />
            }
        </motion.div>
    )
}

const Skills: React.FC<{}> = () => {
    const [isFirstOpen, setIsFirstOpen] = useState(false);
    const [isSecondOpen, setIsSecondOpen] = useState(false);
    const [isThirdOpen, setIsThirdOpen] = useState(false);

    const handleClickFirst = () => {
        setIsFirstOpen(!isFirstOpen);
    }
    const handleClickSecond = () => {
        setIsSecondOpen(!isSecondOpen);
    }
    const handleClickThird = () => {
        setIsThirdOpen(!isThirdOpen);
    }

    return (
        <div className='container'>
            <div className='title'>SKILLS</div>
            <List className='box-list'>
                <ListItemButton onClick={handleClickFirst} className='idk'>
                    <div className='list-title'>
                        Programming Languages
                        <motion.div animate={{
                            rotate: isFirstOpen ? 180 : 0
                        }}>
                            <ExpandMore />
                        </motion.div>
                    </div>
                    <Collapse in={isFirstOpen} timeout="auto" unmountOnExit className='box-list'>
                        <List className='box-list'>
                           <LanguageItem name={"C++"} mastery={90} />
                           <LanguageItem name={"Typescript"} mastery={95} />
                           <LanguageItem name={"Javascript"} mastery={95} />
                           <LanguageItem name={"C#"} mastery={85} />
                           <LanguageItem name={"HTML & CSS"} mastery={88} />
                           <LanguageItem name={"Java"} mastery={75} />
                           <LanguageItem name={"Python"} mastery={65} />
                        </List>
                    </Collapse>
                </ListItemButton>
                <ListItemButton onClick={handleClickSecond} className='idk'>
                    <div className='list-title'>
                        Library and Frameworks
                        <motion.div animate={{
                            rotate: isSecondOpen ? 180 : 0
                        }}>
                            <ExpandMore />
                        </motion.div>
                    </div>
                    <Collapse in={isSecondOpen} timeout="auto" unmountOnExit className='box-list'>
                        <List className='box-list'>
                            <LanguageItem name={"React"} />
                            <LanguageItem name={"Node JS"} />
                            <LanguageItem name={"Redux"} />
                        </List>
                    </Collapse>
                </ListItemButton>
                <ListItemButton onClick={handleClickThird} className='idk'>
                    <div className='list-title'>
                        Tools and Engines
                        <motion.div animate={{
                            rotate: isSecondOpen ? 180 : 0
                        }}>
                            <ExpandMore />
                        </motion.div>
                    </div>
                    <Collapse in={isThirdOpen} timeout="auto" unmountOnExit className='box-list'>
                        <List className='box-list'>
                            <LanguageItem name={"Git"} />
                            <LanguageItem name={"Heroku"} />
                            <LanguageItem name={"Unity"} />
                            <LanguageItem name={"IntelliJ"} />
                            <LanguageItem name={"Firebase"} />
                            <LanguageItem name={"MongoDB"} />
                        </List>
                    </Collapse>
                </ListItemButton>
            </List>
        </div>
    )
}

export default Skills;