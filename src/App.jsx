import {useState} from "react";
import BookCreate from "./components/BookCreate.jsx";
import BookList from "./components/BookList.jsx";


function App () {
    const [books, setBooks] = useState([]);

    const deleteBookById = (id) => {
        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        })

        setBooks(updatedBooks)
    };

    const editBookById = (id, newTitle) => {
        const updatedBooks = books.map((book) => {
            if(book.id === id) {
                return {...book, title:newTitle}
            }

            return book;
        })

        setBooks(updatedBooks)
    }


    const createBook = (title) => {
        const randomID = Math.round(Math.random() * 9999)
       const updatedBooks = [ ...books, {id: randomID, title: title} ];
       setBooks(updatedBooks)
    }

    return (
        <div className="app">
            <h1>Reading List</h1>
            <BookList onEdit={editBookById} books={books} onDelete={deleteBookById} />
            <BookCreate onCreate={createBook} />
        </div>
    )
}

export default App;