import React, { useState } from 'react';

const LiftingStateUp = () => {
  const [data, setData] = useState(0);
  const updateData = () => {
    setData(data + 1);
  };
  return (
    <>
      <ChildA myData={data} />
      <ChildB myData={data} updateData={updateData} />
    </>
  );
};

export default LiftingStateUp;

const ChildA = ({ myData }) => {
  return (
    <>
      <h2>{myData}</h2>
    </>
  );
};

const ChildB = ({ myData, updateData }) => {
  return (
    <>
  
      <button onClick={updateData}>Update</button>
    </>
  );
};
