import React from 'react';

// import AddOption from './AddOption';
import AddLink from './AddLink';
import Header from './Header';
import Links from './Links';

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        links: [],
        selectedOption: undefined
    };

    handleDeleteLinks = () => {
        this.setState(() => ({options: []}));
    };

    handleDeleteLink = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }))
    };

    handleAddLink = (link) => {
        const { title, url } = link;

        if (!title) {
            return 'Enter a valid title'
        }
        if (!url) {
            return 'Enter a valid url'
        }

        if (this.state.links.indexOf(link) > -1) {
            return 'This link already exists';
        }

        this.setState((prevState) => ({
            links: prevState.links.concat(link)
        }));
    }

    handleClearSelectedOption = () => {
        this.setState(() => ({ selectedOption: undefined }))
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => ({ options }));
            }
        } catch (e) {
            // Do nothing
        }

    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
            console.log('Saving data');
        }
    }

    componentWillUnmount() {
        console.log('component unmounted')
    }

    render() {
        return (
            <div>
                <Header />
                <div className='container'>
                    <div className='widget'>

                        <Links 
                            links={this.state.links}
                            handleDeleteLinks={this.handleDeleteLinks} 
                            handleDeleteLink={this.handleDeleteLink}
                        />
                        <AddLink
                            handleAddLink={this.handleAddLink}
                        />
                    </div>
                </div>
            </div>
        );
    }

}
