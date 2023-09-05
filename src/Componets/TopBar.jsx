import { Link } from "react-router-dom";
export default function TopBar() {
  return (
    <header className="header">
      <li>
        <img className="icon" src="https://w7.pngwing.com/pngs/24/227/png-transparent-youtube-logo-youtube-text-trademark-logo.png"></img>
      </li>
      <br></br>
      <br></br>&nbsp;
      <li >
        <Link to="/">Home</Link>
      </li>
      <br></br>&nbsp;
      <li>
        <Link to="/about">About</Link>
      </li>
    </header>
  );
}
