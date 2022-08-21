import React from 'react'
import PropTypes from  'prop-types'



const button = ({color, text, onClick}) => {

  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className="btn"
    >
      {text}
    </button>
  );
}

button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
};

button.defaultProps ={
  backgroundColor: 'blue',

}

export default button