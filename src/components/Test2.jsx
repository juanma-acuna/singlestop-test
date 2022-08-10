export const Test2 = () => {
  return (
    <div>
      <h3>Endpoints methods and naming</h3>

      <div>
        <h4>Instructions</h4>
        <p>
          Complete the first and third input on each line, according to the
          required.
        </p>
      </div>
      <br />
      <div>
        <p>Get all candidates</p>
        <div>
          <input className="inputForm" type="text" placeholder="GET" />
          <input
            className="inputForm"
            type="text"
            readOnly
            defaultValue="https://fake.url/"
          />
          <input className="inputForm" type="text" placeholder="candidates" />
        </div>
      </div>

      <div>
        <p>Create a candidate</p>
        <div>
          <input className="inputForm" type="text" placeholder="POST" />
          <input
            className="inputForm"
            type="text"
            readOnly
            defaultValue="https://fake.url/"
          />
          <input className="inputForm" type="text" placeholder="candidates" />
        </div>
      </div>

      <div>
        <p>Delete the candidate number 1</p>
        <div>
          <input className="inputForm" type="text" placeholder="DELETE" />
          <input
            className="inputForm"
            type="text"
            readOnly
            defaultValue="https://fake.url/"
          />
          <input className="inputForm" type="text" placeholder="candidates/1" />
        </div>
      </div>
    </div>
  );
};
