'use client'


import cl from './Style.module.css'; // Import CSS module properly
import logoImage from '../../../public/logo.png';
import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import ToggleMood from '../ToggleMood';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Navber = () => {
    const pathname = usePathname();

    const [isOpen, setIsOpen] = useState(false);

    const handleNav=()=>{
        setIsOpen(!isOpen)
    }


    const navmenu = [
        {
            id: 1,
            name: "Home",
            direction: '/'
        },
        {
            id: 2,
            name: "About",
            direction: '/about'
        },
        {
            id: 3,
            name: "Project",
            direction: '/project'
        },
        {
            id: 4,
            name: "Skills",
            direction: '/skills'
        },
        {
            id: 5,
            name: "Testimonials",
            direction: '/testimonials'
        },
    ];

    return (
        <>
            <div className={cl.navbar}>
                <Image src={logoImage} alt='logo' className={cl.logo} />
                <ul className={cl.nav_menu_list}>
                    {navmenu.map((menu) => (
                        <li className={cl.nav_menu} key={menu.id}>
                            <Link className={`${pathname == menu.direction ? 'ring-offset-2 ring-2 rounded' : ''}`} href={menu.direction}>
                                {menu.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className={cl.theme_change_action}>
                    <MenuIcon onClick={handleNav} className={cl.menuIcon} />
                    <ToggleMood />
                </div>
            </div>
            <div className={`${isOpen ? cl.responsiveNavber : cl.nav_menu_list}`}>
                <div className={cl.respnsiveNavber_container}>
                    <ul className={cl.resonsiveNav_menu_list}>
                        {navmenu.map((menu) => (
                            <li className={cl.nav_menu} key={menu.id}>
                                <Link onClick={handleNav} className={`${pathname == menu.direction ? 'ring-offset-2 ring-2 rounded' : ''}`} href={menu.direction}>
                                    {menu.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </>
    );
}

export default Navber;
