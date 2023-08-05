import React from 'react';
import CONTACT_LINKS from '../../statics/Links';
import { motion } from 'framer-motion';
import './Contacts.css';

const Contacts: React.FC<{}> = () => {
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
    return(
        <div className='contacts'>
            <div className='contacts-title'>CONTACTS</div>   
            <div className='contact-links'> 
                {contacts}
            </div> 
        </div>
    )
}
export default Contacts;