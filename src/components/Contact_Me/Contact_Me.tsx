import React, { useState } from "react";
import GmailIcon from '../../statics/images/Gmail-Icon.svg';
import { TextInput } from "@mantine/core";
import './Contact_Me.css';

const Contact_Me: React.FC<{}> = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    return (
        <div className="container">
            <div className='title'>Contact Me :)</div>
            <div className="input-email">
                <img alt={"Gmail Icon"} src={GmailIcon} width={30} />
                <TextInput 
                    placeholder={"Enter Your Email"} 
                    value={email} 
                    onChange={(event: any) => setEmail(event.currentTarget.value)}
                    className="email-field"
                />
            </div>
            <TextInput 
                    placeholder={"Enter Your Message"} 
                    value={message} 
                    onChange={(event: any) => setMessage(event.currentTarget.value)}
                    className="message-field"
                />
        </div>
    )
}

export default Contact_Me;