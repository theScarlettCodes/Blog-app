import { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { MediumContext } from "../context/MediumContext";

const SignIn = () => {
  const { currentUser, handleGoogleAuth } = useContext(MediumContext);

  return (
    <div className={styles.wrapper}>
      <div className={styles.googleAuth}>
        {!currentUser && (
          <Button
            id={"googleauth"}
            value={"Login With Google"}
            isDisabled={false}
            buttonCustomStyle={styles.googleButton}
            clickHandler={() => handleGoogleAuth()}
          />
        )}
      </div>
    </div>
  );
};

const styles = {
  wrapper: `
        flex 
        flex-col
        w-[50%]
        container
        mx-auto
        mb-[10rem]
        justify-center
        items-center
        gap-[3rem]
        text-primary
        h-[40vh]
    `,
};

export default SignIn;
