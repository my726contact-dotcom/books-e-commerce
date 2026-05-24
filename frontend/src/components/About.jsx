import React from 'react'
import aboutStyles from '../assets/dummystyles'
import { apbranches, apstats, apteamMembers, branches } from '../assets/dummydata'
import AboutUsImage from '../assets/AboutUsImage.png'
import { Clock, Facebook, Instagram, MapPin, Twitter } from 'lucide-react'

const About = () => {
  return (
    <div className={aboutStyles.container}>
        <section className={aboutStyles.section}>
            <div className={aboutStyles.innerContainer}>
                <div className={aboutStyles.headingWrapper}>
                    <div className='relative inline-block'>
                        <h1 className={aboutStyles.heading}>
                            Selling Books For <br /> Children
                        </h1>
                        <div className={aboutStyles.underline}/>
                    
                    </div>

                    <p className={aboutStyles.subText}>
                        Building the bridge through imagination, fantasy & stories through Books Selling.
                    </p>

                </div>
            </div>
        </section>

        {/*------------------------Stats Sections---------------------------*/}

        <section className={aboutStyles.statsSection}>
            <div className={aboutStyles.innerContainer}>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                    
                    {apstats.map((stat, index) => (
                        <div key={index} className={aboutStyles.statCard}>
                            <div className={aboutStyles.statIconWrapper}>
                                <stat.icon className=' h-8 w-8 text-white' />

                            </div>
                            <h3 className={aboutStyles.statValue}>{stat.value}</h3>
                            <p className={aboutStyles.statLabel}>{stat.label}</p>

                        </div>
                    ))}
                </div>

            </div>
        </section>

        {/*------------------About Section------------------ */}

        <section className={aboutStyles.aboutSection}>
            <div className={aboutStyles.innerContainer}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
                    <div className={aboutStyles.aboutImageWrapper}>
                        <img src={AboutUsImage} alt="About" className={aboutStyles.aboutImage} />
                    <div className={aboutStyles.aboutOverlay} />


                    <div className={aboutStyles.aboutCaption}>
                        <h3 className={aboutStyles.aboutTitle}>Where Fantasy meets Happiness</h3>
                        <p className={aboutStyles.aboutSubtitle}>Filling children hearts with joy</p>

                    </div>
                    </div>

                    <div className={aboutStyles.aboutTextSection}>
                        <div className={aboutStyles.aboutHeadingSection}>
                            <h2 className={aboutStyles.aboutHeading}>Improving Though Experiences and ideas, to sell more storybooks</h2>
                            <p className={aboutStyles.aboutParagraph}>
                                Turning traditional storytelling into an immersive digital journey.
                            </p>
                        </div>

                        <div className={aboutStyles.aboutBoxGrid}>
                            <div className={aboutStyles.aboutBox}>
                                <h4 className={aboutStyles.aboutBoxHeading}>Our Website</h4>
                                <p className={aboutStyles.aboutBoxText}>❊ Creating a global Fantasy Network︵‿︵‿︵‿︵❣</p>

                            </div>
                            <div className={aboutStyles.aboutBox}>
                                <h4 className={aboutStyles.aboutBoxHeading}>Our Aims</h4>
                                <p className={aboutStyles.aboutBoxText}>❊ Inspiring our Little one's into Reading and Dreaming ❊</p>
                            </div>

                        </div>

                    </div>

                </div> 

            </div>
        </section>

        {/*----------------------------- Our Team--------------------------- */}

        <section className={aboutStyles.teamSection}>
            <div className={aboutStyles.innerContainer}>
                <div className='text-center mb-20'>
                    <h2 className={aboutStyles.sectionTitle}>Meet your Literary Guides</h2>
                    <div className={aboutStyles.sectionUnderline} />
                    
                </div>
                <div className=' grid grid-cols-1 md:grid-cols-3 gap-8'>
                    {apteamMembers.map((member) => (
                        <div className={aboutStyles.teamCard} key={member.id}>
                            <div className={aboutStyles.teamImageWrapper}>
                                <img src={member.image} alt={member.name} className={aboutStyles.teamImage} />
                                <div className={aboutStyles.teamOverlay} />                                
                            </div>
                            <h3 className={aboutStyles.teamName}>{member.name}</h3>
                            <p className={aboutStyles.teamPosition}>{member.position}</p>
                            <div className='flex justify-center space-x-4'>
                                {[Facebook, Twitter, Instagram].map((SocialIcon, i) => (
                                    <button key={i} className={aboutStyles.socialIcon}>
                                        <SocialIcon className=' h-6 w-6' />
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}

                </div>
            </div>

        </section>

        {/*-------------------Branches Sections-----------------------*/}

        <section className={aboutStyles.branchSection}>
            <div className={aboutStyles.innerContainer}>
                <div className='text-center mb-20'>
                    <h2 className={aboutStyles.sectionTitle}>Our Digital Store</h2>
                    <div className={aboutStyles.sectionUnderline}/>                
                </div>
                <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>   
                    {apbranches.map((branch, index) => (
                        <div key={index} className={aboutStyles.branchCard}>
                            <div className={aboutStyles.branchImageWrapper}>
                                <img src={branch.image} alt={branch.location} className={aboutStyles.branchImage} />
                                <div className={aboutStyles.branchOverlay}  />     
                             </div>

                             <div className={aboutStyles.branchInfoWrapper} >
                                <div className={aboutStyles.branchLocationWrapper}>
                                    <MapPin className='h-6 w-6 text-[#dc2626]'/>
                                    <h3 className={aboutStyles.branchLocation}>{branch.location}</h3>
                                </div>
                                <div className={aboutStyles.branchHours}>
                                    <Clock className=' h-6 w-6 text-[#dc2626]' />
                                    <p>{branch.hours}</p>
                                </div>
                             </div>

                        </div>
                    ))}                 

                </div>
            </div>

        </section>
    
    </div> 
  )
}

export default About