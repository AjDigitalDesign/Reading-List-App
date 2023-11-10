import {useState} from "react";
import bookEdit from "./BookEdit.jsx";
import BookEdit from "./BookEdit.jsx";

// eslint-disable-next-line react/prop-types

function BookShow({book, onDelete, onEdit}) {
    const [showEdit, setShowEdit] = useState(false);

    const handleDeleteClick = () => {
        // eslint-disable-next-line react/prop-types
        onDelete(book.id)
    }

    const handleEditClick = () => {
        setShowEdit(!showEdit)
    }

    const handleSubmit = (id, newTitle) => {
        setShowEdit(false)
        onEdit(id, newTitle);
    }

    let content = <h3>{book.title}</h3>;
    if (showEdit) {
        content = <BookEdit onSubmit={handleSubmit} book={book} />
    }

    return (
        // eslint-disable-next-line react/prop-types
        <div className="book-show">
            <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="books"/>
            {/* eslint-disable-next-line react/prop-types */}
            <div>{content}</div>
            <div className="actions">
                <button className="edit" onClick={handleEditClick}>Edit</button>
                <button className="delete" onClick={handleDeleteClick}>Delete</button>
            </div>
        </div>
    )
}

export default BookShow;