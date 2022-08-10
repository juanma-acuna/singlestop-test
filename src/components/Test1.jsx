import { useState, useReducer } from "react";

const OPERATIONS = {
  ADD: "ADD",
  SUBTRAC: "SUBTRAC",
};

export const Test1 = () => {
  const [number, updateNumber] = useState(0);

  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case OPERATIONS.ADD:
          return {
            ...state,
            number: state.number + action.payload,
          };
        case OPERATIONS.SUBTRAC:
          return {
            ...state,
            number: state.number - action.payload,
          };
        default:
          return state;
      }
    },
    {
      number: 0,
    }
  );

  const add = () => {
    dispatch({
      type: OPERATIONS.ADD,
      payload: number,
    });
  };
  const subtract = () => {
    dispatch({
      type: OPERATIONS.SUBTRAC,
      payload: number,
    });
  };

  const handleNumberChange = (e) => {
    updateNumber(Number(e.target.value));
  };

  const string =
    '<div><div id="result">2</div><button>Add</button><button>Subtract</button><div></div><input type="text" value="2" /></div>';

  return (
    <div>
      <h3>useReducer with useState challenge</h3>

      <div>
        <h4>Instructions</h4>
        <p>
          Finish de <i>App</i> component to that it updates and dispalys the
          calculated <i>number</i> using mathematical operations.
        </p>
        <p>
          The <i>Operations</i> object is finished and shoud not be changed.
        </p>
        <p>
          The <i>App</i> component should use de <i>React.useReducer</i> Hook to
          update the state using dispatched actions. When the <i>App</i>{" "}
          component is finished, the <i>result</i> div should display the{" "}
          <i>number</i> after the clicked mathematical operation is performed.
        </p>
        <p>
          For example, if the user inputs the number 2 and clicks the <i>Add</i>{" "}
          button, the div element with id <i>root</i> should look like this.
        </p>
        <div className="codeClass">{string}</div>
      </div>
      <br />
      <hr />
      <br />
      <div id="result">Number: {state.number}</div>
      <div>
        <button className="buttonClose" id="add" onClick={add}>
          Add
        </button>
        <button className="buttonClose" id="subtract" onClick={subtract}>
          Subtract
        </button>
        <div>
          <input
            className="inputForm"
            type="text"
            value={number}
            onChange={handleNumberChange}
          />
        </div>
      </div>
    </div>
  );
};
