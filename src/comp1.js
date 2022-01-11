import React from 'react';

const Index = async () => {
  var data = await fetch('https://127.0.0.1/ecloud/api');
  console.log(data);
  return (
    <div className='test'>Welcome { new Date().toString() }</div>
  );
};

export default Index;
