import React, { useState } from 'react'
import { sendMessage, isTyping } from "react-chat-engine"

const MesasgeForm = (props) => {
    const [value, setValue] = useState("");
    const { chatId, creds } = props;

    const handleSubmit = (e) => {
        e.preventDefault();

        const text = value.trim();

        if (text.length > 0) sendMessage(creds, chatId, { text })
    }


    const handleChange = (e) => {
        setValue(e.target.value);

        isTyping(props, chatId)
    }

    return (
        <form className='message-form' onSubmit={handleSubmit}>
            <input className='message-input' placeholder='Send A Message...' onChange={handleChange} value={value} onSubmit={handleSubmit} />
        </form>
    )
}

export default MesasgeForm