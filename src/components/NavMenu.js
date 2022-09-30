import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import ProfilePhoto from "../images/profile_pic.png";
import { useContext } from "react";
import { MediumContext } from "../context/MediumContext";

const NavMenu = () => {
  const { currentUser } = useContext(MediumContext);
  const [modal, setModal] = useState(false);

  return (
    <div className={styles.wrapper}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      {currentUser ? (
        <>
          <Link to="/create-post">
            <Button
              id={"write"}
              // clickHandler={}
              value={"write"}
              isDisabled={false}
            />
          </Link>

          <img
            className={styles.ProfilePhoto}
            src={currentUser.photoURL}
            alt="profile img"
            style={{ width: "50px", height: "50px", borderRadius: "50%" }}
            onClick={() => setModal(true)}
            referrerPolicy="no-referrer"
          />
        </>
      ) : (
        <>
          <Link to="/signin">
            <Button id={"signin"} value={"Sign In"} isDisabled={false} />
          </Link>
        </>
      )}
    </div>
  );
};

const styles = {
  wrapper: `
  flex 
  flex-row
  items-center 
  gap-[2rem] 
    `,
};

export default NavMenu;
