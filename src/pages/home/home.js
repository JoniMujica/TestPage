import React from 'react';
import Navbar from '../../navbar/navbar.js';
import SideDrawer from '../../SideDrawer/SideDrawer.js'
import style from '../../styles.module.scss';

class Home extends React.Component{


    render(){
        return(
            <div className={style.componentPos}>
                <SideDrawer />
                <Navbar />
                <h1>Home!!!!!!</h1>
            </div>
        )
    }
}

export default Home;