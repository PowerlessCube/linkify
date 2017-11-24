console.log("App.js is running");

// variables
const app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of computer",
    options: []
}

const appRoot = document.getElementById("app");

//Methods
const onFormSubmit = (e) => {
    e.preventDefault();
    
    const option = e.target.elements.option.value;
    
    if (option) {
        app.options.push(option); // adds input to app.options
        e.target.elements.option.value = ''; //Clears input
        render() // Re-renders app.
    }
}

const onRemoveAll = () => {
    if (app.options) {
        app.options.length = 0; // sets the array to null
        render(); // re-render app.
    }
}

const onMakeDecision = () => {
    if (app.options.length > 0) {
        const randomNum = Math.floor(Math.random() * app.options.length);
        const option = app.options[randomNum];
        alert(option);
    }
}

// Template
const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? "Here are your options" : "No options :-("}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What Should I do</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                {
                    app.options.map((option) => {
                        return <li key={option}>{option}</li>
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
}

render();