import React, { useState } from 'react';

export default function Form() {
    const [text, setText] = useState('');
    const [visible, setVisible] = useState(false);
    const changeText = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };
    const toggle = () => {
        setVisible(!visible); //не visible
    };
    let content = null;
    if (visible) {
        content = <p>{text}</p>;
    }

    return (
        <div>
            <br />
            <input type="text" value={text} onChange={changeText} placeholder="Input text" />
            <button onClick={toggle}> {visible ? 'Скрыть текст' : 'Показать текст'}</button>
            <h3>{content}</h3>
        </div>
    );
};
