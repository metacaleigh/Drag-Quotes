import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

function EditQueenForm({ onEditFormSubmit }) {
    let history = useHistory()

    let {id} = useParams()

    const [editQueen, setEditQueen] = useState({})

    useEffect(() => {
        fetch(`http://localhost:9292/queens/${id}`)
            .then(res => res.json())
            .then(queen => {
                setEditQueen(queen)
                setFormData({
                    qname: queen.name,
                    sun_sign: queen.sun_sign,
                    "winner?": queen["winner?"],
                    season: queen.season,
                    hometown: queen.hometown,
                    image_url: queen.image_url,
                    "user_added?": true
                })
            })
    }, [])

const [formData, setFormData] = useState({
    qname: editQueen.name,
    sun_sign: editQueen.sun_sign,
    "winner?": editQueen["winner?"],
    season: editQueen.season,
    hometown: editQueen.hometown,
    image_url: editQueen.image_url,
    "user_added?": true
})

function handleEditFormChange(e) {
    const {name} = e.target
    console.log(name)
    let value;
    if (name == "winner?") {
        value = e.target.checked
    } else {
        value = e.target.value
    }
    console.log(value)
    setFormData({
        ...formData,
        [name]: value
    })
}

function handleEditFormSubmit(e) {
    e.preventDefault()
    onEditFormSubmit(formData)
    // setFormData(initialEditFormData)
    history.push('/queens')
}

return(
    <div className="edit-queen-form-page">
        <div className="edit-queen-form-container">
        <form onSubmit={handleEditFormSubmit}>
            <h1 id="edit-queen-form-header">Edit Queen:</h1>
            <input
                className="edit-queen-form-input"
                name="qname"
                onChange={handleEditFormChange}
                value={formData.qname}
                type="text"
                placeholder='Name'>
            </input>
            <input
                className="edit-queen-form-input"
                name="sun_sign"
                onChange={handleEditFormChange}
                value={formData.sun_sign}
                type="text"
                placeholder='Sun Sign'>
            </input>
            <div id="edit-winner-flex-row">
                <label id="edit-winner-form-label">Winner? (Check box if yes)</label>
                <input
                    id="edit-queen-form-checkbox"
                    name="winner?"
                    onChange={handleEditFormChange}
                    checked={formData["winner?"]}
                    type="checkbox">
                </input>
            </div>
            <input
                className="edit-queen-form-input"
                name="season"
                onChange={handleEditFormChange}
                value={formData.season}
                type="number"
                placeholder='Season Number (i.e. 6)'>
            </input>
            <input
                className="edit-queen-form-input"
                name="hometown"
                onChange={handleEditFormChange}
                value={formData.hometown}
                type="text"
                placeholder='Hometown'>
            </input>
            <input
                className="edit-queen-form-input"
                name="image_url"
                onChange={handleEditFormChange}
                value={formData.image_url}
                type="text"
                placeholder='Image URL'>
            </input>
            <button className="edit-queen-form-submit" type="submit">Submit</button>
        </form>
        </div>
    </div>
)
}

export default EditQueenForm;
