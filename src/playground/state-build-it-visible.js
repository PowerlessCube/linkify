class VisibilityToggle extends React.Component {
    
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        }
    }

    //Methods
    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility // invert prev state.
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide' : 'Show'} Details</button>
                {this.state.visibility && <p>This is a message.</p>}
            </div>
        )
    };
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));