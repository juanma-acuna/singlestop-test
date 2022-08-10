import { useState, useEffect } from "react";

export const Test5 = () => {
  function PlayerStatus() {
    const [status, setStatus] = useState("online");
    const [counter, setCounter] = useState(0);

    // Toggle between the two status values - 'away' or 'online'
    function toggleStatus() {
      setStatus(status === "online" ? "away" : "online");
    }

    // Implement effect hook below.
    // Update the counter when status changes.
    useEffect(() => {
      setCounter(counter + 1);
    }, [status]);

    return (
      <div>
        <h1>{status}</h1>
        <h3>{counter}</h3>
        <button className="buttonClose" onClick={toggleStatus}>
          Toggle status
        </button>
      </div>
    );
  }

  return (
    <div>
      <h3>Multiple useState with useEffect</h3>

      <div>
        <h4>Instructions</h4>
        <div>
          <p>
            Finish de <i>PlayerStatus</i> component so that it follows the
            current <i>status</i> of the player.
          </p>
          <p>
            The <i>status</i> can be either "online" or "away". When the
            component first renders, the player should be "online". The{" "}
            <i>toggleStatus</i> function should change the <i>status</i>{" "}
            variable.
          </p>
          <p>
            The component should count how many times the user changed their
            status, using the <i>counter</i>. When the component first renders,
            the <i>counter</i> should be 1.
          </p>
          <p>
            The counter should be updated within <i>React.useEffect</i> when{" "}
            <i>status</i> changes.
          </p>
          <p>
            For example, after the first render, the div element with id{" "}
            <i>root</i> should look like this:
          </p>
          <div className="codeClass">{`<div><h1>online</h1><h3>1</h3><button>Toggle status</button></div>`}</div>
        </div>
      </div>
      <br />
      <hr />
      <div>
        <PlayerStatus />
      </div>
    </div>
  );
};
