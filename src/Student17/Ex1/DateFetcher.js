import React from 'react';
import { useState } from 'react';

export const DateFetcher = () => {
  let [date, setDate] = useState('Unknown');
  const changeDate = () => {
    if (date === 'Unknown'){
      setDate(new Date().toUTCString())

    }else{ 
      setDate('Unknown')
    }

  }

  return (
    <div>
      <button onClick={() => changeDate()}>Push </button> UTC Date:  {date}
    </div>
  );
};
