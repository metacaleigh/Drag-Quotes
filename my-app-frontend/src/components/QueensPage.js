import React, { useState } from 'react';
import QueensHeader from './QueensHeader';
import QueensList from './QueensList';
import QueensNavBar from './QueensNavBar';
import AddNewQueenForm from './AddNewQueenForm';
import SearchQueens from './SearchQueens';

function QueensPage({ queensArr }) {
    const [search, setSearch] = useState("")

    const filteredQueens = queensArr.filter((queen) => {
        return queen.name.toLowerCase().includes(search.toLowerCase())
    })

    return (
    <div className="QueensPage">
        <QueensNavBar />
        <div className='queens-page-flex-column'>
            <QueensHeader />
            <SearchQueens search={search} setSearch={setSearch}/>
            <QueensList queensArr={filteredQueens}/>
        </div>
    </div>
    );
}

export default QueensPage;