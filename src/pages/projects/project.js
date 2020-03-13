import React from 'react';
import Navbar from '../../navbar/navbar.js';
import style from '../../styles.module.scss';

class Projects extends React.Component{


    render(){
        return( 
            <div className={style.componentPos}>
                <Navbar />
                <h1>PROYECTOS!!!!!!</h1>
            </div>
        )
    }
}

export default Projects;