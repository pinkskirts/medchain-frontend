import NavLink from "../misc/nav-link";

function MainHeader(props) {
  return (
    <>
      <div>
        <ul>
          {props.showHome && (
            <li>
              <NavLink href="/">Home</NavLink>
            </li>
          )}
          {props.showLogin && (
            <li>
              <NavLink href="/login">Login</NavLink>
            </li>
          )}
          {props.showDashboard && (
            <li>
              <NavLink href="/dashboard">User Dashboard</NavLink>
            </li>
          )}
        </ul>
      </div>
    </>
  );
}

export default MainHeader;
