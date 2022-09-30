import { FiLink } from "react-icons/fi";
import { Link } from "react-router-dom";

import ProfilePhoto from "../images/profile_pic.png";
import Socials from "./Socials";

import articles from "../utlils/Data";

const AboutAuthor = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <h2 className={"poppins"}>ABOUT THE AUTHOR</h2>
        <div className={styles.authorDetails}>
          <div>
            <img src={ProfilePhoto} alt="Author Profile" />
          </div>

          <div className={styles.authorNameUsernameDescription + "poppins"}>
            <div>
              <h1 className={"poppins"}> author Name </h1>
              <p className={`${styles.authorUsername} + poppins`}>
                @authurblack
              </p>
            </div>
            <p className={`poppins`}>
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
              sapiente praesentium perferendis aliquid tempora. Accusamus, quos
              nulla. Explicabo fuga veniam error nihil deserunt assumenda
              corporis veritatis debitis laudantium rerum nesciunt quasi magnam
              ab quis, nulla unde ratione consequuntur ducimus excepturi?{" "}
            </p>
            <div className={styles.linkAndSocials}>
              <div className={styles.linkIconAndText}>
                <FiLink />{" "}
                <Link to={{ pathname: `https://www.google.com` }}>
                  authorblack.com
                </Link>
              </div>{" "}
              <Socials />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const styles = {
  wrapper: `
      container
      m-auto
      gap-[1.5rem]
      poppins
      my-[2rem]
  `,
  authorDetails: `
        flex
        md:flex-row
        flex-col
        gap-[2rem]
    `,

  authorNameUsernameDescription: `
      poppins
  `,

  authorUsername: `
    text-[#ccc]
  `,

  linkIconAndText: `
    flex
    flex-row
    items-center
    gap-[.5rem]
  `,

  linkAndSocials: `
    flex
    flex-row
    justify-between
    items-center
    mt-[1rem]
  `,
};

export default AboutAuthor;
