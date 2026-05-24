import React from 'react'
import { footerStyles as styles } from '../assets/dummystyles'
import { Link } from 'react-router-dom'
import logo from '../assets/logoicon.png'
import { socialLinks, quickLinks } from '../assets/dummydata'
import { ArrowRight, MapPin, Phone, Mail } from 'lucide-react'


const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.container}>
            <div className={styles.grid}>
                <div className={styles.logoBlock}>
                    <Link to='/' className={styles.logoLink}>
                    <img src={logo} alt="logo" className={styles.logoImg} />
                    <h1 className={styles.logoText}>
                    Monarch Books                
                    </h1>                 
                    </Link> 
                    <p className={styles.aboutText}>
                        Start Reading and enter to worlds of fantasy, sci-fi, and many more frictions worlds. 
                    </p>
                    <div className={styles.socialWrap}>
                        {socialLinks.map(({Icon, url}, i) => (
                            <a href={url} key={i} target='_blank' className={styles.socialButton}>
                                <Icon className={styles.socialIcon}/>
                            </a>                            
                        ))}
                    </div>

                </div>
                <div className={styles.quickLinksBlock}>
                    <h3 className={styles.quickLinksTitle}>Quick Links</h3>
                    <ul className={styles.quickLinksList}>
                        {quickLinks.map((link, idx) => (
                            <li key={idx}>
                                <Link to={link.url} className={styles.quickLinkItem}>
                                <span className={styles.quickLinkDot}></span>
                                {link.title}
                                </Link>

                            </li>
                        ))}

                    </ul>

                </div>

                <div className={styles.newsletterBlock}>
                    <h3 className={styles.newsletterTitle}>Stay Alert</h3>
                    <p className={styles.newsletterText}>
                        Subscribe to our Newsletter for updates/offers
                    </p>
                    <form className={styles.formWrap}>
                        <input type="email" placeholder='Enter your email here' className={styles.input} />
                        <button type='submit' className={styles.button}>
                            <ArrowRight className='h-4 w-4' />
                        </button>
                    </form>
                </div>
                
                <div className={styles.contactBlock}>
                    <h3 className={styles.contactTitle}>Contact Us</h3>
                    <div className={styles.contactList}>
                        <div className={styles.contactItem}>
                            <MapPin className={styles.contactIcon} />
                            <span>Abc, books street market, Abc road, India</span>
                        </div>
                        <div className={styles.contactRow}>
                            <Phone className={styles.contactIconInline}/>
                            <span>+91 1234512345</span>

                        </div>
                        <div className={styles.contactRow}>
                            <Mail className={styles.contactIconInline}/>
                            <span>Contact@monarchbooks.com</span>
                        </div>
                    </div>

                </div>


            </div>
            <div className={styles.copyrightWrap}>
                <p className={styles.copyrightText}>
                    &copy; {new Date().getFullYear()} MonarchBooks. All rights reserved.

                </p>

            </div>
        </div>
    </footer>
  )
}

export default Footer