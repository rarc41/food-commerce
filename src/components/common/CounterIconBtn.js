import React from "react";

const CounterIconBtn = ({elementsCart}) => {
  const styleCounterIcon = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '6rem',
    width: '6rem',
    backgroundColor: 'var(--yellow)',
    borderRadius: '1.5rem',
    margin: '2rem'
  };

  const styleNumber = {
      fontWeight: "bold",
      fontSize: "2.5rem"
  };


  return (
    <div style={styleCounterIcon}>
        <span style={styleNumber}>{elementsCart}</span>
    </div>
  );
};

export default CounterIconBtn;
