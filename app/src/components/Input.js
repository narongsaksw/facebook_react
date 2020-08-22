import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Input = ({ addPost }) => {
  const [input, setInput] = useState('');
  const onChange = (e) => {
    setInput(e.target.value);
  };

  const onKeyDown = (e) => {
    const title = e.target.value;
    if (e.key === 'Enter' && title) {
      addPost(title);
      setInput('');
    }
  };
  return (
    <div className='Input'>
      <div className='Input__header'>Create Post</div>
      <input
        className='Input__field'
        type='text'
        value={input}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    </div>
  );
};

Input.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default Input;
