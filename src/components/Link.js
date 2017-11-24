import React from 'react';

const Link = (props) => (
    <div className='option'>
        {console.log(props)}
        <p className='option__text'><a href={props.link.url}>{props.link.title}</a></p>
        <button 
            className='button button--link'
            onClick={(e) => {
                props.handleDeleteLink(props.title);
            }}
        >
            Remove
        </button>
        
    </div>
);

export default Link;