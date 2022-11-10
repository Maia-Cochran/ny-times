import React from 'react';
import '../SearchForm/SearchForm.css';
import Sections from '../../data';
import { getSection } from '../../apiCalls'

const SearchForm = ({ setArticles }) => {
    const listSections = Sections.map(section => {
        return (<option key={section} value={section}>{section}</option>)
    })

    const handleSubmit = event => {
        event.preventDefault();
        console.log('.TARGET VALUE', event.target.value)
        getSection(event.target.value)
            .then(result => {
                console.log('RESULT', result.results)
                setArticles(result.results)
            })
    }

    return (
        <form>
            <select className='search-form' onChange={event => handleSubmit(event)}>
                <option value='' disable selected>Choose a Topic!</option>
                {listSections}
            </select>
        </form>
    )
}

export default SearchForm