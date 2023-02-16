import React, { useState } from 'react';

function AddNewQuoteForm({ queensArr }) {
    const initialQuoteFormData = {
        queen_id: "",
        quote: "",
        claps: 0,
        "user_added?": true
    }

    const [selectedQueen, setSelectedQueen] = useState("Ru Paul")
    const [quoteFormData, setQuoteFormData] = useState(initialQuoteFormData)

    function handleQuoteFormChange(e) {
        setQuoteFormData({
            ...quoteFormData,
            [e.target.name]: e.target.value
        })
    }

return(
    <>
    <div>
        <form>
            <label>
                Choose a Queen:
                <select>
                    {queensArr.map((queen) => {
                        return <option key={queen.id} value={queen.id}>{queen.name}</option>
                    })}
                </select>
                <input
                    className="new-quote-form-input"
                    name="quote"
                    onChange={handleQuoteFormChange}
                    value={quoteFormData.quote}
                    type="text"
                    placeholder='Add Quote...'>
                </input>
                <button type="submit">Submit</button>
            </label>
        </form>
    </div>
    </>
)
}

export default AddNewQuoteForm;