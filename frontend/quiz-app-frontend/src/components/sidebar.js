import React from "react";
// import { Sidebar, InputItem, DropdownItem, Icon, Item, Logo, LogoText } from 'react-sidebar-ui'
// import 'react-sidebar-ui/dist/index.css';

import {
    FaTh,
    FaBars,
    FaFileUpload,
    FaLock
}from "react-icons/fa"
import { NavLink } from "react-router-dom";

export const Sidebar = ({children}) => {

    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:FaTh
        },
        {
            path:"/upload",
            name:"Upload",
            icon:FaFileUpload
        },
        {
            path:"/logout",
            name:"Logout",
            icon:FaLock
        },
    ]

    return (
        <div className='container'>
            <div className='sidebar'>
                <div className="top-section">
                    <h1 className="logo">Quiz App</h1>
                    <div className="bars">
                        {/* <FaBars/> */}
                    </div>
                </div>
                {
                    menuItem.map((item, index)=>(
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <div className="icon">{item.icon}</div>
                            <div className="link-text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <main>
                {children}
            </main>
        </div>
    )
};
