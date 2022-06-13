import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function MainNavigation() {
  return (
    <div>
      <nav>
        <div className='logo'>Logo</div>
        <ul className='nav-links'>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Products</a>
          </li>
          <li>
            <a>Favorites</a>
          </li>
        </ul>
        <AccountCircleIcon
          sx={{ fontSize: "40px", cursor: "pointer" }}
          onClick={() => {
            alert("work");
          }}
        />
      </nav>
    </div>
  );
}

export default MainNavigation;
