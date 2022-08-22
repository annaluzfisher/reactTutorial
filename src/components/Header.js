import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button';

const Header = ({title, onAdd, showAddTask}) => {

  return (
    <header className="header">
      <h1>{title}</h1>
 <Button color={showAddTask ? 'red' : "green"} text={showAddTask ? 'close' : "Add"} onClick={onAdd}/>
    </header>
  );
}

//onAdd... you don't have to invoke functions? the onClick is an automatic invoke??
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