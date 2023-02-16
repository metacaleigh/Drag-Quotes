import React, { useState } from 'react'

function AddNewQueenForm({ onFormSubmit }) {

const initialFormData = {
    qname: "",
    sun_sign: "",
    "winner?": false,
    season: "",
    hometown: "",
    image_url: "",
    "user_added?": true
}

const [formData, setFormData] = useState(initialFormData)

function handleFormChange(e) {
    const {name} = e.target
    console.log(name)
    let value;
    if (name == "winner?") {
        value = true
    } else {
        value = e.target.value
    }
    console.log(value)
    setFormData({
        ...formData,
        [name]: value
    })
}

function handleFormSubmit(e) {
    e.preventDefault()
    onFormSubmit(formData)
    setFormData(initialFormData)
}

return(
    <div className="new-queen-form-page">
        <div className="new-queen-form-container">
        <form onSubmit={handleFormSubmit}>
            <h1 id="new-queen-form-header">Add New Queen:</h1>
            <input
                className="new-queen-form-input"
                name="qname"
                onChange={handleFormChange}
                value={formData.qname}
                type="text"
                placeholder='Name'>
            </input>
            <input
                className="new-queen-form-input"
                name="sun_sign"
                onChange={handleFormChange}
                value={formData.sun_sign}
                type="text"
                placeholder='Sun Sign'>
            </input>
            <div id="winner-flex-row">
                <label id="winner-form-label">Winner?</label>
                <input
                    // className="new-queen-form-input"
                    name="winner?"
                    onChange={handleFormChange}
                    checked={formData["winner?"]}
                    type="checkbox">
                </input>
            </div>
            <input
                className="new-queen-form-input"
                name="season"
                onChange={handleFormChange}
                value={formData.season}
                type="number"
                placeholder='Season Number (i.e. 6)'>
            </input>
            <input
                className="new-queen-form-input"
                name="hometown"
                onChange={handleFormChange}
                value={formData.hometown}
                type="text"
                placeholder='Hometown'>
            </input>
            <input
                className="new-queen-form-input"
                name="image_url"
                onChange={handleFormChange}
                value={formData.image_url}
                type="text"
                placeholder='Image URL'>
            </input>
            <button type="submit">Submit</button>
        </form>
    </div>
    </div>
)
}

export default AddNewQueenForm;