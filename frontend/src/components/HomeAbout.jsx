import React from 'react'
import { homeAboutStyles as s } from '../assets/dummystyles'
import HomeAboutImage from '../assets/HomeAboutImage.png'
import { featuredBooks, hastats } from '../assets/dummydata'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'


const HomeAbout = () => {
  return (
    <div className={s.wrapper}>
      <div className=' absolute inset-0 overflow-hidden'>
        <div className={s.bgBlur1}></div>
        <div className={s.bgBlur2}></div>
      </div>


      <div className={s.container}>
        <div className={s.aboutGrid}>
          <div className={s.imageWrapper}>
            <div className={s.imageGlow}></div>
            <div className={s.imageContainer}>
              <img src={HomeAboutImage} alt="about image" className={s.aboutImage} />

            </div>

          </div>

          <div className=' space-y-8'>
            <div>
              <h2 className={s.aboutHeader}> Our Books site Journey</h2>
              <div className={s.underline}></div>
            </div>
            <p className={s.aboutText}>
              From choosing the first book to building our little online library, every step was taken with one goal: to help children discover the magic of reading.
              Stories helps kids imagine new worlds, learn new ideas, and grow their creativity.
            </p>
            <div className={s.statGrid}>
              {hastats.map((stat,index) => (
                <div className={s.statCard} key={index}>
                  <div className={s.statIconWrap}>
                  <stat.icon className={s.statIcon}/>
                  </div>
                  <h3 className={s.statValue}>{stat.value}</h3>
                  <p className={s.statLabel}>{stat.label}</p>

                </div>

              ))}

            </div>

            <Link to='/about' className={s.aboutButton}>
            <span>Click to Know About Us</span>
            <ArrowRight className={s.arrowIcon}/>
            </Link>

          </div>

        </div>  

        <div className='mb-12 text-center'>
          <h2 className={s.sectionHeader}>Best Story Books</h2>
          <div className={s.headerUnderline}></div>
          <p className={s.headerText}>
            Selected Recommendation from our popular readers and experts that you may want to 
            see.
          </p>

        </div>
        
        <div className={s.bookGrid}>
          {featuredBooks.map((books, index) => (
            <div className={s.bookCardWrap} key={index}>
              <div className={s.bookCardGlow}></div>

              <div className={s.bookCard}>
                <div className={s.bookImageWrapper}>
                  <img src={books.image} alt={books.title} className={s.bookImage}/>
                </div>

                <div className={s.bookContent}>
                  <h3 className={s.bookTitle}>{books.title}</h3>

                  <p className={s.bookAuthor}>{books.author}</p>
                  <p className={s.bookDesc}>{books.description}</p>

                  <Link to='/books' className={s.discoverLink}>
                  <span>
                    Click Here
                  </span>
                  <ArrowRight className={s.arrowSmall}/>
                  </Link>

                </div>

              </div>

            </div>
          ))}
        </div>



      </div>      
    </div>
  )
}

export default HomeAbout