import React, { useState } from 'react';

const RadioButton = () => {
  const [gender, setGender] = useState('');

  return (
    <>
      <h2>Hello</h2>
      <label> 
        <input
          type='radio'
          onChange={(event) => setGender(event.target.value)}
          name='gender'
          value='male'
          id='male'
          checked={gender === 'male'}
        />
        <label htmlFor='male' >Male</label>
     
      </label>
      <label>
        <input
          type='radio'
          id='female'
          onChange={(event) => setGender(event.target.value)}
          name='gender'
          value='female'
          checked={gender === 'female'}
        />
         <label htmlFor='female' >Female</label>
      </label>
    </>
  );
};

export default RadioButton;
