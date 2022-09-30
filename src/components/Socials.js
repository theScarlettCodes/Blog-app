import { Link } from "react-router-dom";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { ImFacebook2 } from "react-icons/im";

const Socials = () => {
  return (
    <div className={styles.socials}>
      <Link to="/">
        <AiFillLinkedin className={styles.icon} />
      </Link>

      <Link to="/">
        <AiFillInstagram className={styles.icon} />
      </Link>

      <Link to="/">
        <ImFacebook2 className={styles.icon} />
      </Link>
    </div>
  );
};

const styles = {
  socials: `
    flex
    flex-row
    gap-[1rem]
  `,
  icon: `
    w-[1.5rem]
    h-[1.5rem]
  `,
};

export default Socials;
