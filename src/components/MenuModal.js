import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MediumContext } from "../context/MediumContext";

const MenuModal = ({ mobileMenu }) => {
  const { currentUser } = useContext(MediumContext);
  const [closeMenu, setCloseMenu] = useState(mobileMenu);

  return (
    <div className={styles.wrapper}>
      <div className={styles.contactDetail}>
        <div className={styles.contact}>
          <p>[Email]</p>
          <p>
            {currentUser?.email != null
              ? currentUser?.email
              : "Yourmail@****.com"}
          </p>
        </div>
        <div className={styles.contact}>
          <p>[Phone]</p>
          <p>
            {currentUser?.phone != null ? currentUser?.phone : "070* *** ****"}
          </p>
        </div>
      </div>
      <div className={styles.innerWrapper}>
        <Link to="/" className={styles.innerWrapperLink}>
          Home
        </Link>
        <Link to="/about" className={styles.innerWrapperLink}>
          About
        </Link>
        <Link to="/signin" className={styles.innerWrapperLink}>
          Sign In
        </Link>
        <Link to="/dashboard" className={styles.innerWrapperLink}>
          Dashboard
        </Link>
      </div>

      <div className={styles.menu}>
        <h1>[MENU]</h1>{" "}
        <h1
          className={styles.closeMenu + styles.innerWrapperLink}
          onClick={() => setCloseMenu()}
        >
          X
        </h1>
      </div>
    </div>
  );
};

const styles = {
  wrapper: `
      flex
      flex-col
      gap-[2rem]
      items-center
      justify-center
      w-full
    `,

  innerWrapperLink: `
      hover:text-[#ccc]
      poppins
    `,

  contactDetail: `
    absolute
    w-full
    top-0
    left-0 
    my-[2rem]
    ml-[2rem]
    `,

  contact: `
    poppins
    flex
    flex-row
    w-[70%]
    gap-[1rem]
    text-[1.3rem]
    tracking-wide
    `,

  innerWrapper: `
      flex
      flex-col
    `,
  menu: `
      flex
      flex-row
      justify-between
      w-[90%]
      mx-auto
      absolute
      left-0
      bottom-0
      text-[4rem]
  
    `,

  closeMenu: `
        cursor-pointer
    `,
};

export default MenuModal;
