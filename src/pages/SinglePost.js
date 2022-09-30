import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MediumContext } from "../context/MediumContext";
import AboutAuthor from "../components/AboutAuthor";
import { db } from "../utlils/Firebase";
import { doc, getDoc } from "firebase/firestore";

const SinglePost = () => {
  const [article, setArticle] = useState(null);
  const { id } = useParams();
  const { posts } = useContext(MediumContext);

  useEffect(() => {
    const getSingleDoc = async () => {
      const docRef = doc(db, "posts", id);
      const docSnap = await getDoc(docRef);

      setArticle(docSnap.data());
    };

    getSingleDoc();
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.postDetails}>
        <div className={styles.postThumbnail}>
          <img
            src={article?.imageUrl}
            alt="post thumbnail"
            className={styles.postImage}
          />
        </div>
        <div className={styles.postTexts}>
          <div className={styles.postTitle}>{article?.title}</div>
          <div className={styles.postAuthorNameAndDate}></div>

          <div>{article?.body}</div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  wrapper: `
  flex
  flex-col
  gap-[1rem]
  w-[100%]
  `,
  postTitle: `
    text-[2rem]
    font-bold
  `,
  postThumbnail: `
  w-[100%]
  h-[50vh]
  `,
  postImage: `
    w-[100%]
    h-[100%]
    object-fill
  `,

  postDetails: `
    flex
    flex-col
    gap-[1rem]
    mx-[.5rem]
  `,
  postTexts: `
    w-[90%]
    mx-auto
    my-[2rem]
  `,
};

export default SinglePost;
