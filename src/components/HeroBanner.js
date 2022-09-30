const HeroBanner = ({ backgroundImage, alignArticle }) => {
  return (
    <div className={`${backgroundImage}`}>
      <div className={`${alignArticle} + ${styles.article}`}>
        <h4 className={styles.featuredArticle}>Featured Article</h4>
        <h2 className={styles.articleTitle}>
          {"World's"} Most Dangerous Technology Ever Made{" "}
        </h2>
        <div className={styles.authorNameAndDate}>
          <p>Egbadon Jeffrey</p>
          <p>15 Aug, 2022</p>
        </div>
        <p className={styles.articleBody}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tempore
          tenetur ipsum beatae iure vitae quam. Dolore laborum iusto reiciendis
          totam! Dolores saepe nisi repellat hic dicta alias, magnam architecto.
        </p>
      </div>
    </div>
  );
};

const styles = {
  backgroundImage: `
    relative
  `,

  article: `
    md:w-[40%]
    h-[90%]
    container

    my-[.5rem]
    py-[2rem]
    px-[1rem]
    bg-white
  `,

  featuredArticle: `
    text-[1.5rem]
    font-medium
    text-[#1c1c1c50]
  `,

  articleTitle: `
    text-[1.5rem]
    md:text-[1rem]
    font-semibold
    text-primary
  `,

  authorNameAndDate: `
    flex
    flex-row
    text-[.8rem]
    text-[#1c1c1c50]
    gap-[.3rem]
    capitalize
  `,

  articleBody: `
    text-[1rem]
    md:text-[1rem]

  `,
};

export default HeroBanner;
