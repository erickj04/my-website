import React, { useState } from 'react';
import './Education.css';
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

const Education: React.FC<{}> = () => {
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
                        
                    </Collapse>
                </ListItemButton>
            </List>
        </div>
    )
}

export default Education;