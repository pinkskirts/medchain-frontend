import NavLink from "./nav-link";

function MainHeader() {
  return (
    <>
      <div>
        <ul>
          <li>
            <NavLink href={"/login"}>Login</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default MainHeader;