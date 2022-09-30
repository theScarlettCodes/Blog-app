import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MediumContext } from "../context/MediumContext";

const Posts = () => {
  const { posts, users } = useContext(MediumContext);
  const [author, setAuthor] = useState([]);

  useEffect(() => {
    setAuthor(users.find((user) => user.id === posts?.data?.author));
  }, [users, posts]);

  return (
    <>
      <h1 className={styles.articlesHeader}> Articles </h1>
      {posts?.map((post) => (
        <div key={post.id}>
          <Link to={`/posts/` + post.id}>
            <div
              className={styles.wrapper}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <div className={styles.postDetails}>
                <div
                  className={styles.postThumbnailContainer}
                  style={{ width: "40%" }}
                >
                  <img
                    className={styles.postThumbnail}
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "fill",
                    }}
                    src={post?.data?.thumbnail}
                    alt="post Thumbnail"
                  />
                </div>
                <div className={styles.articleData}>
                  <div className={styles.postTitle}>{post?.data?.title}</div>
                  <div className={styles.articleDetails}>
                    <div className={styles.postAuthorNameAndDate}>
                      <p>
                        <b>Author: </b>
                        {author?.name}
                      </p>
                    </div>

                    <div>
                      <p>{post?.data?.body.slice(0, 200)}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

const styles = {
  wrapper: `
  w-[90%]
  mx-auto
      mt-[1rem]
    `,

  articlesHeader: `
    w-[30%]
    m-auto
    text-center
    text-[3rem]
    border-b-[3px]
    border-[#1c1c1c]
  `,

  postDetails: `
    flex
    h-[35vh]
    w-[100%]
    md:flex-row
    justify-center
    gap-[1rem]
    `,

  articleDetails: `
  w-[70%]
  hidden
  md:block
    flex
    flex-col
  `,

  postThumbnailContainer: `
  w-40%
  h-[70%]
  md:h-[100%]
    `,

  postThumbnail: `
  w-[100%]
  h-[100%]
    `,
  postTitle: `
    text-[1.2rem]
    md:text-[1.4rem]
    font-bold
    w-[100%]
  `,

  postAuthorNameAndDate: `
      flex
      flex-row
      gap-[.4rem]
    `,

  articleData: `
      text-[.8rem]
      md:text-[1rem]
      flex
      flex-col
      gap-[.5rem]
      w-[100%]
    `,
};

export default Posts;
