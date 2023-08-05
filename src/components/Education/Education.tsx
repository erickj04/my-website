import React, { useState } from 'react';
import {
    ListItemButton,
    Collapse,
    Typography,
    Box,
    List,
    CircularProgressProps,
    CircularProgress,
 } from '@mui/material';
import { 
    ExpandMore
} from '@mui/icons-material';
import { motion } from 'framer-motion';
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
const Education: React.FC<{}> = () => {
    const [isFirstOpen, setIsFirstOpen] = useState(false);
    const [isSecondOpen, setIsSecondOpen] = useState(false);

    const handleClickFirst = () => {
        setIsFirstOpen(!isFirstOpen);
    }
    const handleClickSecond = () => {
        setIsSecondOpen(!isSecondOpen);
    }

    return (
        <div className='container'>
            <div className='title'>EDUCATION</div>
            <List className='box-list'>
                <ListItemButton onClick={handleClickFirst} className='idk'>
                    <div className='list-title'>
                        The University of British Columbia
                        <motion.div animate={{
                            rotate: isFirstOpen ? 180 : 0
                        }}>
                            <ExpandMore />
                        </motion.div>
                    </div>
                    <Collapse in={isFirstOpen} timeout="auto" unmountOnExit className='box-list'>
                    <List className='box-list'>
                        <List>
                            <LanguageItem name={"CPSC 210: Software Construction"}></LanguageItem>
                            <LanguageItem name={"CPSC 121: Models of Computation"}></LanguageItem>
                            <LanguageItem name={"CPSC 110: Computation, Programs, and Programming"}></LanguageItem>
                            <LanguageItem name={"DSCI 110: Introduction to Data Science"}></LanguageItem>
                        </List>
                        <LanguageItem name={"OVERALL GPA"} mastery={89.1} />
                        <LanguageItem name={"Full Scholarship from Beasiswa Indonesia Maju"}></LanguageItem>
                    </List>
                    </Collapse>
                </ListItemButton>
                <ListItemButton onClick={handleClickSecond} className='idk'>
                    <div className='list-title'>
                        Brilliant Class of Penabur Gading Serpong
                        <motion.div animate={{
                            rotate: isSecondOpen ? 180 : 0
                        }}>
                            <ExpandMore />
                        </motion.div>
                    </div>
                    <Collapse in={isSecondOpen} timeout="auto" unmountOnExit className='box-list'>
                    <List className='box-list'>
                        <List>
                            <LanguageItem name={"Got a full‑year scholarship (worth ≈ CAD 6,000)"}></LanguageItem>
                        </List>
                        <LanguageItem name={"OVERALL GPA"} mastery={91.57} />
                    </List>
                    </Collapse>
                </ListItemButton>
            </List>
        </div>
    )
}

export default Education;