import React from 'react';
import Navbar from '../../navbar/navbar.js'
import style from '../../styles.module.scss';

class Error extends React.Component{


    render(){
        return(
            <div className={style.componentPos}>
                <Navbar />
                <h1>ERROR 404 THIS PAGE NO FOUND!!!!!!</h1>
            </div>
        )
    }
}

export default Error;