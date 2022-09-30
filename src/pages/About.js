import AboutAuthor from "../components/AboutAuthor";
import HeroBanner from "../components/HeroBanner";
import Logo from "../components/Logo";
import stylesSpecial from "../styles/Home.module.css";

const About = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.aboutBodybackground}>
          <div className={styles.logo}>
            <Logo />
          </div>
          <p className={styles.aboutCompany}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque,
            rem natus! Aut, tempora unde quos rerum dolorem labore ducimus eos
            quidem aliquid, accusamus velit provident. Pariatur ipsam incidunt
            voluptatem dignissimos?
          </p>

          <h1 className={styles.bottomDescription}>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            ipsam!{" "}
          </h1>
          <p></p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  wrapper: `
  bg-primary
  text-white
  w-[100%]
  mx-auto
  h-[70vh]
  gap-[2rem]
  `,

  container: `
    w-[90%]
    mx-auto
  `,

  aboutCompany: `
    mx-auto
    w-[100%]
    text-left
    mb-[2rem]
  `,

  logo: `
    w-[40%]
    mx-auto
    mb-[2rem]
  `,

  aboutWrapper: `
  flex
  w-[100%]
    mb-[2rem]
  mx-auto
  container
  `,

  aboutBodybackground: `
    flex
    flex-col
    container
    mx-auto
    gap-[2rem]
    h-[30]
    py-[1rem]
    text-center
  `,

  bottomDescription: `
    
  `,
};

export default About;
