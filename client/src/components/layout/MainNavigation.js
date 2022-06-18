import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";
import SignIn from "../SignIn";

function MainNavigation() {
  const [openSignInModal, setSignInModal] = useState(false);

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
            setSignInModal(true);
          }}
        />
        {openSignInModal && <SignIn />}
      </nav>
    </div>
  );
}

export default MainNavigation;
