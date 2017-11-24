import React from 'react';
import Link from './Link';

const Links = (props) => (
    <div>
    <div className='widget-header'>
        <h3 className='widget-header__title'>Your Options</h3>
        <button
            className='button button--link'
            onClick={props.handleDeleteLinks}
        >
            Remove All
        </button>
    </div>
        {props.links.length === 0 && <p className='widget__message'>Please add an option to get started.</p>}
        {
            props.links.map((link, index) => (
                <Link
                    key={link}
                    link={link}
                    handleDeleteLink={props.handleDeleteLink}
                />
            ))
        }
    </div>
);

export default Links;
