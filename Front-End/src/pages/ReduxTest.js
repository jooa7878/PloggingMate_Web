import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as testActions } from "../redux/modules/test";
import "../scss/ReduxTest.scss";

const ReduxTest = () => {
  const dispatch = useDispatch();
  const test = useSelector((state) => state.test);

  const [text, setText] = React.useState("");

  function onChange(e) {
    setText(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      <div>
        <h1>{test.value}</h1>
        <button onClick={() => dispatch(testActions.thunkTest("test"))}>
          ADD
        </button>
        <button onClick={() => dispatch(testActions.minus())}>MINUS</button>

        <hr></hr>

        <form onSubmit={onSubmit}>
          <input type="text" value={text} onChange={onChange} />
          <button
            onClick={() => {
              dispatch(testActions.add({ value: text, key: Date.now() }));
              setText("");
            }}
          >
            입력
          </button>
          <ul>
            {test.array.map((item) => (
              <>
                <li key={Date.now()}>{item}</li>
              </>
            ))}
          </ul>
        </form>
      </div>
    </>
  );
};

export default ReduxTest;
