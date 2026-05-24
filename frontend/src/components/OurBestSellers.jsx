import React, { useEffect, useRef, useState } from 'react'

import { ourBestSellersStyles as styles } from '../assets/dummystyles'
import axios from 'axios'
import { ChevronLeft, ChevronRight, ShoppingCart, Star, Minus, Plus } from 'lucide-react'
import { obsbooks, bgColors } from '../assets/dummydata'
import { useCart } from '../CartContext/CartContext'



const API_BASE = 'http://localhost:4000'


const OurBestSellers = () => {
     const scrollRef = useRef(null)
     const { cart, addToCart, dispatch, updateCartItem } = useCart()

     const [books, setBooks] = useState([]);
     const [loading, setLoading] = useState(false);
     const [error, setError] = useState(null);

     const inCart = (id) => cart.items.some(item => item.id === id)
     const getQty = (id) => cart.items.find(item => item.id === id)?.quantity || 0;

     // FETCH BOOKS FROM SERVER

     useEffect(() => {
        const fetchBooks = async () => {
            setLoading(true);
            try {
                const res = await axios.get(`${API_BASE}/api/book`);
                setBooks(Array.isArray(res.data) ? res.data : res.data.books || []);
            } 
            
            catch (err) {
                console.error('Error fetching best books', err);
                setError(err.message || 'Failed to fetch books');
            }

            finally{
                setLoading(false)
            }
        }

        fetchBooks();
     }, []);

     const handleAdd = (book) => {
        addToCart({id: book._id, title: book.title, author: book.author, price: book.price, quantity: 1});
     }
     const handleInc = (id) => updateCartItem({id, quantity: getQty(id) + 1});
     const handleDec = (id) => updateCartItem({id, quantity: getQty(id) - 1});

     
     const scrollLeft = () => scrollRef.current.scrollBy({left: -400, behavior: "smooth"})
     const scrollRight = () => scrollRef.current.scrollBy({left: 400, behavior: "smooth"})

     
     if(loading) return <div className={styles.loading}>Loading best sellers...</div>
     if(error) return <div className={styles.error}>{error}</div>


    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/*-------------------HEADER---------------------------------------------------*/}
                <div className={styles.headerWrapper}>
                    <div className={styles.headerText}>
                        <h1 className={styles.title}>
                            <span className={styles.gradientText}>
                                Top Picked Choice

                            </span>

                        </h1>
                        <p className={styles.subtitle}>Top Rated By Our Readers</p>

                    </div>

                    {/*--------------------------------------------------------RIGHT BTNS FOR MOVING LEFT AND RIGHT--------------------------------------------------------------- */}

                    <div className={styles.navWrapper}>
                        <div className={styles.navLine}/>
                        <div className={styles.navButtons}>
                            <button onClick={scrollLeft} className={styles.navBtn}>
                                <ChevronLeft className={styles.navIcon} size={20}/>
                            </button>
                            <button onClick={scrollRight} className={styles.navBtn}>
                                <ChevronRight className={styles.navIcon} size={20}/>
                            </button>
                        </div>

                    </div>

                </div>

                {/*----------------------------------------BOOKS SECTIONS--------------------------------------------------- */}
                <div className={styles.scrollContainer} ref={scrollRef}>
                    {books.map((book, index) => (
                        <div className={styles.card(bgColors[index % bgColors.length])} key={book._id}>
                            <div className={styles.cardInner}>

                                <div className={styles.stars}>
                                    {[...Array(Math.floor(book.rating || 0))].map((_, i) => (
                                        <Star className=' h-4 w-4 md:h-5 md:w-5 text-amber-400 fill-amber-400' key={i}/>
                                    ))}
                                </div>

                                <div className={styles.bookInfo}>
                                    <h2 className={styles.bookTitle}>{book.title}</h2>
                                    <p className={styles.bookAuthor}>{book.author}</p>

                                </div>

                                <p className={styles.bookDesc}>{book.description}</p>

                                {/*-----------------------------------------------------ADD Controls Like ADDtoCart----------------------------------------------------------------------------- */}

                                <div className={styles.cartControls}>
                                    <div className={styles.priceQtyWrapper}>
                                        <span className={styles.price}>₹{Number(book.price || 0).toFixed(2)}</span>

                                        {inCart(book._id) ? (
                                            <div className={styles.qtyWrapper}>
                                        <button onClick = {() => handleDec(book._id)} className={styles.qtyBtn}>
                                                    <Minus size = {18}/>
                                                </button>
                                                <span className={styles.qtyText}>{getQty(book._id)}</span>
                                                <button onClick = {() => handleInc(book._id)} className={styles.qtyBtn}>
                                                    <Plus size = {18}/>
                                                </button>
                                            </div>
                                        ) : (
                                            <button onClick={() => handleAdd(book)} className={styles.addButton}>
                                                <ShoppingCart className=' h-4 w-4 md:h-5 md:w-5'/>
                                                <span>Add To Your Collection</span>
                                            </button>
                                        )}
                                    </div>
                                </div>

                            </div>


                            {/*----------------------------this is extra code*/}
                            {book.image && (
                            <img src={book.image.startsWith('http') ? book.image : `${API_BASE}/${book.image}`} 
                            alt={book.title} className={styles.bookImage}/>
                            )}
                            {/*-------------------------------this is extra code*/}

                            

                        </div>
                    ))}

                </div>

            </div>

        </section>
    )
}

export default OurBestSellers