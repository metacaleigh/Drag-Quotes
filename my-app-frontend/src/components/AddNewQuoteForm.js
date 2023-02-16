import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

function AddNewQuoteForm({ queensArr, onQuoteFormSubmit }) {

    let history = useHistory();

    const initialQuoteFormData = {
        queen_id: 1,
        quote: "",
        claps: 0,
        "user_added?": true
    }
    const [quoteFormData, setQuoteFormData] = useState(initialQuoteFormData)

    function handleQuoteFormChange(e) {
        setQuoteFormData({
            ...quoteFormData,
            [e.target.name]: e.target.value
        })
    }

    function handleQuoteFormSubmit(e) {
        e.preventDefault()
        onQuoteFormSubmit(quoteFormData)
        setQuoteFormData(initialQuoteFormData)
        history.push("/")
    }

return(
    <div className="new-quote-form-page">
        <div className="new-quote-form-div">
            <form onSubmit={handleQuoteFormSubmit}>
                <div className="new-quote-flex-column">
                <label id="dropdown-label">Choose a Queen:</label>
                <select className="new-quote-form-input" value={quoteFormData.queen_id} name="queen_id" onChange={handleQuoteFormChange}>
                    {queensArr.map((queen) => {
                        return <option key={queen.id} value={queen.id}>{queen.name}</option>
                     })}
                </select>
                <label id="dropdown-label">Add a Quote:</label>
                <input
                    className="new-quote-form-input"
                    name="quote"
                    onChange={handleQuoteFormChange}
                    value={quoteFormData.quote}
                    type="text"
                    placeholder='Add Quote...'>
                </input>
                <button id="new-quote-form-button" type="submit">Submit</button>
                </div>
            </form>
        </div>
    </div>
)
}

export default AddNewQuoteForm;