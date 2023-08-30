import React from 'react'
import {FaTh, FaBook,  FaUserAlt, FaBars } from "react-icons/fa"
import { NavLink } from 'react-router-dom'
function Sidebar({children}) {
    const menuItem = [
        {
            path:"/",
            name:"Dashboard",
            icon:<FaTh/>
        },
       
        {
            path:"/books",
            name:"Book",
            icon:<FaBook/>
        },
        {
            path:"/authordetail",
            name:"Authordetail",
            icon:<FaUserAlt/>
        },
        {
            path:"/about",
            name:"About",
            icon:<FaUserAlt/>
        }
    ]
  return (
    <div className='container'>
        <div className="sidebar">
            <div className="top_section">
                <h1 className="logo">Logo</h1>
                <div className="bars">
                    <FaBars/>
                </div>
            </div>
            {menuItem.map((item,index)=>(
                <NavLink to={item.path} key={index} className="link" activeclassName= 'active'>
                    <div className="icon">{item.icon}</div>
                    <div className="link_text">{item.name}</div>
                </NavLink>
            ))}
        </div>
        <main>{children}</main>
    </div>
  )
}

export default Sidebar