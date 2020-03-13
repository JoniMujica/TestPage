import React from 'react';
import Navbar from '../../navbar/navbar.js';
import style from '../../styles.module.scss';

class Contact extends React.Component{


    render(){
        return(
            <div className={style.componentPos}>
                <Navbar />
                <h1>Contact!!!!!!</h1>
            </div>
        )
    }
}

export default Contact;