import React from 'react';
import Navbar from '../../navbar/navbar.js';
import style from '../../styles.module.scss';
//import logstyle from './styñe.module.scss';
import SideDrawer from '../../SideDrawer/SideDrawer.js';

class Login extends React.Component{


    render(){
        return(
            <div className={style.componentPos}>
                <SideDrawer />
                <Navbar />
                <h1>lOGIN!!!!!!</h1>
            </div>
        )
    }
}

export default Login;