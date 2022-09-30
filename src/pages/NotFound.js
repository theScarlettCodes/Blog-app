import React from "react";

const NotFound = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.main}>404 Page Not Found</h1>
      <p>Sorry Appears the Link You entered does not exist</p>
    </div>
  );
};

const styles = {
  wrapper: `
        h-[60vh]
        flex
        flex-col
        justify-center
        items-center
    `,
  main: `
      text-2xl  
    `,
};

export default NotFound;
