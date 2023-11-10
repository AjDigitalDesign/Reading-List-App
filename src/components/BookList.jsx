import BookShow from "./BookShow.jsx";
// eslint-disable-next-line react/prop-types
function BookList({books, onDelete, onEdit}) {

    // eslint-disable-next-line react/prop-types
    const renderBooks = books.map((book) => {
        return <BookShow onEdit={onEdit} book={book} key={book.id} onDelete={onDelete} />
    })

    return (
        <div className="book-list">{renderBooks}</div>
    )
}

export default BookList;