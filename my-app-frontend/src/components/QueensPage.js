import React, { useState } from 'react';
import QueensHeader from './QueensHeader';
import QueensList from './QueensList';
import QueensNavBar from './QueensNavBar';
import SearchQueens from './SearchQueens';

function QueensPage({ queensArr, setQueensArr }) {
    const [search, setSearch] = useState("")

    //console.log(queensArr)

    const filteredQueens = queensArr.filter((queen) => {
        // //console.log(queen)
        return queen.name.toLowerCase().includes(search.toLowerCase())
    })

    function handleDelete(id) {
        const updatedQueensArr = filteredQueens.filter((queen) => queen.id !== id)

        fetch(`http://localhost:9292/queens/${id}`, {
            method: 'DELETE'
        })
        .then(setQueensArr(updatedQueensArr))
    }

    return (
    <div className="QueensPage">
        <QueensNavBar />
        <div className='queens-page-flex-column'>
            <QueensHeader />
            <SearchQueens search={search} setSearch={setSearch}/>
            <QueensList queensArr={filteredQueens} handleDelete={handleDelete}/>
        </div>
    </div>
    );
}

export default QueensPage;