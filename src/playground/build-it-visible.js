console.log('build-it-visible is loaded');

//variable
const appRoot = document.getElementById('app');
let visibility = false

//Methods
const toggleVisibility = () => {
    visibility = !visibility;
    render()
}

//Template
const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>{visibility ? 'hide' : 'Show'} Details</button>
            {visibility && <p>This is a message.</p>}
        </div>
    );
    ReactDOM.render(template, appRoot);
}

render();

