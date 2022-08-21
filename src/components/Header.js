import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button';

const Header = (props) => {
   const onClick = () => {
    console.log('click from function in header');
   };
  return (
    <header className="header">
      <h1>{props.title}</h1>
     <Button color="green" text="Add" onClick={onClick}/>
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