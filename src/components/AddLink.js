import React from 'react';

export default class AddLink extends React.Component {
  state = {
    error: null
  };

  handleAddLink = (e) => {
    e.preventDefault();

    const title = e.target.elements.title.value.trim();
    const url = e.target.elements.url.value.trim();

    const error = this.props.handleAddLink({ title, url });
    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.title.value = '';
      e.target.elements.url.value = '';
    }
  }

  render() {
    return (
      <div>
        { this.state.error &&
          <p className='add-option-error'>{this.state.error}</p>
        }
        <form className="add-option" onSubmit={this.handleAddLink}>
          <input className='add-option__input' placeholder='Title' type='text' name='title' />
          <input className='add-option__input' placeholder='URL' type='text' name='url' />
          <button className='button'>Add Link</button>
        </form>
      </div>
    );
  }
}