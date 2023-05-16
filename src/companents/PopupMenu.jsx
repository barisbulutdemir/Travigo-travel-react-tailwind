import React from 'react';
import {NavLink} from "react-router-dom";

const PopupMenu = ({ navlinks, popupState }) => {

    return (
        <>
        <nav className={`
        fixed top-14 right-24 bg-white bg-opacity-70 opacity-100 z-50
        backdrop-filter backdrop-blur-md rounded-lg w-44 h-auto py-5 px-6 hidden lg:flex justify-center items-center 
        transition-transform duration-300
        ${popupState ? 'lg:showpopup' : 'lg:noshowpopup'}`}>
            {/* Yukarıdaki shoppopup ve noshowpopup direk indexcss de belirtildi. */}
            <ul className="flex items-start flex-col gap-3 ">
                {navlinks?.map((val,i) => (
                    <li><NavLink key={i} to={`#`}>{val.link} </NavLink></li>
                    ))}
                <li><button type="button" className="button-light sm:w-auto rounded-lg"> Join Us</button></li>
            </ul>

        </nav>
        </>
            )

}

export default PopupMenu;