import React from "react";

const Loading = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Loading...</h1>
    </div>
  );
};

const styles = {
  wrapper: `
    flex
    justify-center
    items-center
    h-[100vh]
  `,
};

export default Loading;
