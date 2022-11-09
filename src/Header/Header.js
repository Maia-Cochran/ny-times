// import React from 'react';
// import { Sections } from '../data';
// import { Link } from 'react-router-dom';
// import './Header.css';

// const Header = ({ handleChange }) => {

//     const chooseSection = Sections.map(element => {
//         return (<option key={element} value={element}>{element}</option>)
//     })

//     return (
//         <div className="Nav">
//             <Link to='/' className='TitleHome'><h1>New York Times</h1></Link>
//             <label>
//                 Select By:
//                 <select onChange={event => handleChange(event)}>
//                     <option>Choose a Value</option>
//                     {chooseSection}
//                 </select>
//             </label>
//         </div>
//     )
// }

// export default Header;