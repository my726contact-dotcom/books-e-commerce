import React, { useState, useEffect } from 'react'
import { styles } from '../assets/dummyStyles'
import {Link, useLocation} from 'react-router-dom'
import { BookOpen, BookPlus, ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react';
import logo from "../assets/logoicon.png"


const Sidebar = () => {

    const [isCollapsed, setisCollapsed] = useState(false);
    const [isMobile, setisMobile] = useState(window.innerWidth < 768);
    const location = useLocation();


    //--------UseEffect Hook Screen Size

    useEffect(() => {
        const checkScreenSize = () => {
        setisMobile(window.innerWidth < 768);    
        }
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize) 
    }, []);




    useEffect(() => {
        const handleResize = () => setisMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const navItems = [
        { path: '/', icon: BookPlus, label: 'Add Books' },
        { path: '/list-books', icon: BookOpen, label: 'List Books' },
        { path: '/orders', icon: ShoppingCart, label: 'Orders' },
    ];

    const toggleCollapse = () => setisCollapsed(!isCollapsed);

    //------------------Mobile View navigation

    if(isMobile) {
        return(
            <div className={styles.mobileNav.container}>
                <nav className={styles.mobileNav.nav}>
                    {navItems.map(({path, icon: Icon, label}) => {
                        const isActive = location.pathname === path;
                        return (
                            <Link key={path} to={path} className={styles.mobileNav.item}>
                                <div className={styles.mobileNav.iconContainer(isActive)}>
                                   <Icon className='h-5 w-5 mx-auto' />
                                </div>
                                <span className={styles.mobileNav.label(isActive)}>
                                    {label}
                                </span>
                            </Link>
                        )
                    })} 
                </nav>
            </div>
        )
    }

    //-----------Desktop navigation

    return (
        <div className={styles.sidebar.container(isCollapsed)}>
            <div className={styles.sidebar.header}>
                {!isCollapsed && (
                    <div className={styles.sidebar.logoContainer}>
                        <div className={styles.sidebar.logoImageContainer}>
                            <img src={logo} alt="logo" className={styles.sidebar.logoImage}/>
                        </div>
                        <div>
                            <h1 className={styles.sidebar.title}>MonarchBooks</h1>
                        </div>
                    </div>
                )}

                <button onClick={toggleCollapse} className={styles.sidebar.collapseButton}>
                    {isCollapsed ? (
                        <ChevronRight className="h-5 w-5" />
                    ) : (
                        <ChevronLeft className="h-5 w-5" />
                    )}
                </button>
            </div>

            <nav className={styles.sidebar.nav}>
                {navItems.map(({path, icon: Icon, label}) => {
                    const isActive = location.pathname === path;
                    return (
                        <Link 
                        key={path} 
                        to={path} 
                        className={styles.sidebar.navItem(isCollapsed, isActive)}>
                            <div className={styles.sidebar.navItemInner}>
                                <div className={styles.sidebar.iconContainer(isActive)}>
                                    <Icon className='h-5 w-5' />
                                </div>
                                {!isCollapsed && (
                                    <span className={styles.sidebar.navLabel(isActive)}>
                                        {label}
                                    </span>
                                )}
                            </div>
                        </Link>
                    )
                })}
            </nav>

            <div className={styles.sidebar.divider} />

            <div className={styles.sidebar.footer(isCollapsed)}>
                {!isCollapsed && (
                    <p className={styles.sidebar.footerText}>
                        &copy; 2026 MonarchBooks
                    </p>
                 )}
            </div>

            
        </div>
    );
};

export default Sidebar
