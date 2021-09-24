import React, { useEffect, useState, Fragment } from "react";

// this is a incremente/ decremente button used y the checkout section to set the persons quantity

const styleButton = {
  display: "flex",
  justifyContent: "space-between",
  height: "3.7rem",
  width: "11rem",
  borderRadius: "2rem",
  // backgroundColor: 'red',
  overflow: "hidden",
  border: "1px solid var(--grey)",
};

const styleMinPlus = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  width: "33%",
  background: "none",
  border: "none",
};

const styleSymbol = { fontWeight: "bold", fontSize: "1.7rem" }

const IncDecBtn = () => {
  const [counter, setCounter] = useState(1);
  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    if (counter <= 1) {
      return;
    } else {
      setCounter(counter - 1);
    }
  };

  useEffect(() => {

  }, []);

  return (
    <Fragment>
      <div
        style={styleButton}
        // style={{ height: "2rem", width: "2rem", backgroundColor: "red" }}
      >
        <button style={styleMinPlus} onClick={() => decrement()}>
          <span style={styleSymbol}> - </span>
        </button>
        <div style={styleMinPlus}>
          <span style={styleSymbol}>
            {" "}
            {counter}{" "}
          </span>
        </div>
        <button style={styleMinPlus} onClick={() => increment()}>
          <span style={styleSymbol}> + </span>
        </button>
      </div>
    </Fragment>
  );
};

export default IncDecBtn;
