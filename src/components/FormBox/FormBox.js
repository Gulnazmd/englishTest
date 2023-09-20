import React from 'react';
import './FormBox.css';

const FormBox = (props) => (
    <div className="Model" style={{ zIndex: '10' }}>
        <div>{props.image}</div>
            <article className="ModelInfo">
                <h4>{props.title}</h4>
                <div>{props.text}</div>
                <label>{props.children}</label>
            </article>
        </div>
)

export default FormBox;