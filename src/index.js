import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/home/home.js';
import Contact from './pages/contact/contact.js';
import Projects from './pages/projects/project.js';
import Login from './pages/login/login.js';
import Error from './pages/error/error.js';

const App = () => (
    <>   
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path="/projects" component={Projects} />
                <Route path="/contact" component={Contact} />
                <Route path="/login" component={Login} />
                <Route path="/" component={Error} />
            </Switch>
        </BrowserRouter>
    </>
);

ReactDOM.render(<App />, document.getElementById('root'));
