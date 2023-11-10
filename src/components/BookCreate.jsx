import {useState} from "react";

// eslint-disable-next-line react/prop-types
function BookCreate({onCreate}) {

    const [title, setTitle] = useState('');
    const formOnSubmit = (e) => {
        e.preventDefault()
        onCreate(title)
        setTitle('')
    }

    const handleChange = (e) => {
        setTitle(e.target.value)
    }
    return (
        <div className="book-create">
            <h3>Add a Book</h3>
            <form onSubmit={formOnSubmit}>
                <label htmlFor="">Title</label>
                <input className="input" type="text" onChange={handleChange} value={title}/>
                <button className="button">Create</button>
            </form>
        </div>
    )
}

export default BookCreate;