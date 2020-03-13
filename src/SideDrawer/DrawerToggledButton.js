import React from 'react';
import buttonStyle from './DrawerToggledButton.module.scss';


const DrawerToggledButton = props => (
    <button className={buttonStyle.ToggleButton}>
        <div className={buttonStyle.ToggleButtonLine}/>
        <div className={buttonStyle.ToggleButtonLine}/>
        <div className={buttonStyle.ToggleButtonLine}/>
    </button>
);

export default DrawerToggledButton;