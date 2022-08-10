import React from "react";

const firstNotNull = (...args) => {
  for (let i = 0; i < args.length; i++) {
    if (args.every((element) => element === null)) {
      return null;
    } else if (args[i] !== null && args[i] !== undefined) {
      return args[i];
    }
  }
};

export const Test3 = () => {
  const arr1 = [null, null, "John", "ok"];
  const arr2 = [null, null, null, null, null, null, null];
  const arr3 = [
    "Other",
    null,
    null,
    null,
    null,
    null,
    null,
    "John",
    "ok",
    null,
    null,
  ];

  return (
    <div>
      <h3>firstNotNull function on typescript</h3>

      <div>
        <h4>Instructions</h4>
        <div>
          Write the <i>firstNotNull</i> function that should accept an array,
          whose elements can be string or null.
          <p>
            The function should return the first element that is not null, or
            null if there is no string in the array.
          </p>
          <p>The function should return null if the array is empty.</p>
          <p>For example, invoking the following:</p>
          <div className="codeClass">{`firstNotNull([null, null, "John", "ok"]);`}</div>
          <p>should return "John".</p>
        </div>
      </div>
      <br />
      <br />

      <hr />
      <div>
        <p>Case 1:</p>
        <div className="codeClass">[null, null, "John", "ok"]</div>
        <br />
        <div>{`Result: ${firstNotNull(...arr1)}`}</div>
      </div>
      <br />
      <hr />
      <div>
        <p>Case 2:</p>
        <div className="codeClass">
          [null, null, null, null, null, null, null]
        </div>
        <br />
        <div>{`Result: ${firstNotNull(...arr2)}`}</div>
      </div>
      <br />
      <hr />
      <div>
        <p>Case 3:</p>
        <div className="codeClass">
          ["Other", null, null, null, null, null, null, "John", "ok", null,
          null]
        </div>
        <br />
        <div>{`Result: ${firstNotNull(...arr3)}`}</div>
      </div>
      <br />
      <hr />
      <br />
      <br />
    </div>
  );
};
