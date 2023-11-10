import {useState} from "react";

function BookEdit({book, onSubmit}) {
    const [title, setTitle] = useState(book.title);

    const handleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        // eslint-disable-next-line react/prop-types
        onSubmit(book.id, title)
    }
    return (
        <div>
            <form className="book-edit" onSubmit={handleOnSubmit}>
                <label htmlFor="Title"></label>
                <input type="text" className="input" value={title} onChange={handleChange}/>
                <button className="button is-primary">Save</button>
            </form>
        </div>
    )
}

export default BookEdit;