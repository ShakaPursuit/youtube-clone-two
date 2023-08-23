import { Link } from "react-router-dom";
export default function TopBar() {
  return (
    <header className="header">
      <li>
        <img className="icon" src="src/assets/yticon.png"></img>
      </li>
      <br></br>
      <br></br>&nbsp;
      <li>
        <Link to="/">Home</Link>
      </li>
      <br></br>&nbsp;
      <li>
        <Link to="/about">About</Link>
      </li>
    </header>
  );
}
