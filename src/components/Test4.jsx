export const Test4 = () => {
  return (
    <div>
      <h3>GIT Theory</h3>

      <div>
        <h4>Instructions</h4>
        <p>
          Which of the following statements are true for merging feature and
          master branches?
        </p>
      </div>
      <br />
      <br />

      <hr />
      <div>
        <input type="checkbox" readOnly />
        <span>The feature branch cannot be branched further.</span>
      </div>
      <br />
      <div>
        <input type="checkbox" readOnly checked={true} />
        <span>GIT ensures that conflicts never happen.</span>
      </div>
      <br />
      <div>
        <input type="checkbox" readOnly checked={true} />
        <span>
          Each developer can have their own local branches and commit changes to
          them. These branches are not visible to other developers utils the
          developer publishes the changes.
        </span>
      </div>
      <br />
      <div>
        <input type="checkbox" readOnly checked={true} />
        <span>
          A push command to the master branch can fail if the baster branch was
          modified in the meantine.
        </span>
      </div>
      <br />
      <div>
        <input type="checkbox" readOnly checked={true} />
        <span>
          After merging, git-blame will list only one developer for every
          modified source code file.
        </span>
      </div>
      <br />
      <div>
        <input type="checkbox" readOnly checked={true} />
        <span>
          Before merging, we can sync changes from the master branch to the
          feature branch.
        </span>
      </div>
    </div>
  );
};
