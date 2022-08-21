import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => {
  return (
    <header className="header">
      <h1>{props.title}</h1>
      <button className='btn'>Add</button>
    </header>
  );
}


// const Header = ( {title }) => {
//   return <h1>{title}</h1>;
// };   same as props.title and passing in props

// const headerStyle = {
//   color: 'pink',
//   backgroundColor: 'blue',
// }   style = {headerStyle} for in line styling

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

Header.defaultProps ={
  title: 'Task Tracker',
}

export default Header