import React from "react";
import {Link} from 'react-router-dom'

function Welcome() {
  return (
    <div>
      <div>
        <Link to="login">Login</Link>
      </div>
      <div>
        <Link to="create">Create</Link>
      </div>
    </div>
  );
}

export default Welcome;
