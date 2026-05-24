import Book from "../models/bookModel.js";
import path from 'path'
import fs from 'fs'


//------Create Book Function---------

export const createBook = async (req, res, next) => {
    try {
        const filename = req.file?.filename ?? null;
        const imagePath = filename ? `uploads/${filename}` : null;
        const {title, author, price, rating, category, description} = req.body;

        const book = new Book({
            title,
            author,
            price,
            rating,
            category,
            description,
            image: imagePath
        });
        const saved = await book.save();
        res.status(201).json(saved)
    } 
    catch (err) {
        next(err);        
    }
}

//----------Get Books

export const getBooks = async (req, res, next) => {
    try {
        const books = await Book.find().sort({ createdAt: -1})
        res.json(books)
    } 
    
    catch (err) {
        next(err)
    }
}


//-----------------Delete a Book

export const deleteBook = async (req,res,next) => {
    
    
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        if (!book) {
           return res.status(404).json({message: 'Book not found.'})
        }

        //-----------------Image handling

        if(book.image) {
            const filePath = path.join(process.cwd(), book.image);
            fs.unlink(filePath, (err) => {
                if (err) console.warn('Failed to delete image file:', err)
            })
        }
        res.json({ message: 'Book deleted successfully.' })
    } 
    
    
    catch (err) {
        next(err);
    }
}


