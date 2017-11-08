import React, {Component } from 'react';
import PropTypes from 'prop-types';


// export default class InlineError extends Component {
//   render() {
//     return (
//       <div>
//
//       </div>
//
//     );
//   }
// }

const InlineError = ({ text }) => <span style={{color:"red"}}> { text} </span>;

InlineError.propTypes = {
  text: PropTypes.string.isRequired
}

export default InlineError;
