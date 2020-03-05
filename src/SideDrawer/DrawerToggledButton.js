import React from 'react';
import buttonStyle from './style.module.scss'


const DrawerToggledButton = props => (
    <button className={buttonStyle.ToggleButtonLine}>
        <div className={buttonStyle.ToggleButtonLine}/>
        <div className={buttonStyle.ToggleButtonLine}/>
        <div className={buttonStyle.ToggleButtonLine}/>
    </button>
);

export default DrawerToggledButton;