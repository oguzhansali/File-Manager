import React from "react";
import './Main.styles.css';


const Main = ({sidebar,folderName,toolbar,content}) =>{
    
    return(
        <div id="container">
            <div id="side-bar">{sidebar}</div>
            <div id="content-host">
                <div id="top-nav">
                    <h1 id="folder-name">{folderName}</h1>
                    <div id="search-host">
                        <input/>
                    </div>
                </div>
                <div id="toolbar">{toolbar}</div>
                <div id="content">{content}</div>
            </div>
        </div>
    )
}

export default Main