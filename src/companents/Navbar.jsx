import React, {useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.png';
import menu from '../images/menu.svg';
import PopupMenu from "./PopupMenu.jsx";

const Navbar = ({ navlinks }) => {


     const [popupState, setPopupState] = React.useState(false);
     const[navState, setNavState] = React.useState(false);

    /*  Aşağıda neden !popupState yaptık? her tıklanmasında değişmesi için.  */
     const onTriggerPopup = () => setPopupState(!popupState);


     const onNavScroll = () => {
        if (window.scrollY > 100) {
            setNavState(true);
        } else {
            setNavState(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', onNavScroll);
        return () => {
            window.removeEventListener('scroll', onNavScroll);
        }
    }, [])


    return (
        <>
        <header className={` flex items-center justify-center fixed  w-auto h-auto
         top-0 lg:top-0 left-0 right-0 transition-all
        duration-300 ${navState && 'bg-white/80 bg-clip-padding backdrop-filter ' +
        'backdrop-blur-sm bg-opacity-20 flex ' +
        'items-center h-[9vh] fixed top*0 left-0 ' +
        'right-0 opacity-100 z-[100] shadow-sm ' +
        'shadow-slate-100' }`}>
            <nav className="travigo-container">
                <div className=" py-2 flex justify-between  items-center gap-72  ">
                    <NavLink to={'/'} className="flex items-center">
                        <img src={logo} alt="logo" className="w-22 h-9 object-fill" />
                    </NavLink>

                    <ul className="flex  items-center lg:hidden gap-7">
                        {navlinks?.map((link, index) => {
                            return (
                                <li className="text-lg text-slate-900">
                                    <NavLink to={'#'} className="" key={index}>
                                        {link.link}
                                    </NavLink>{' '}
                                </li>
                            );
                        })}
                    </ul>

                    <ul className="flex items-center lg:hidden">
                        <li>
                            <button type="button" className="button-emarald px-7 text-base py-1 ">
                                Join Us
                            </button>
                        </li>
                    </ul>

                    {/* Menu button  */}
                    <ul className="hidden lg:flex items-center">
                        <button type="button" className=" flex items-center justify-center
                         transition-all duration-200 active:scale-90 cursor-pointer" onClick={onTriggerPopup}>
                            <img src={menu} alt="menu/svg"
                                 className="object-cover shadow-sm filter" /> </button>
                    </ul>
                </div>
            </nav>
        </header>

        <PopupMenu navlinks={navlinks} popupState={popupState} />
        </>
    );
};

export default Navbar;
