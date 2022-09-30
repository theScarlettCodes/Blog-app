import { createContext, useEffect, useState } from "react";
import { collection, setDoc, doc, onSnapshot, query } from "firebase/firestore";
import { db, auth, provider } from "../utlils/Firebase";
import { signInWithPopup } from "firebase/auth";

const MediumContext = createContext();

const MediumProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  //   GETTING POST DATA

  useEffect(() => {
    const getPost = async () => {
      setLoading(true);
      const q = query(collection(db, "posts"));
      onSnapshot(q, (data) => {
        setPosts(
          data.docs.map((doc) => {
            return {
              id: doc.id,
              data: {
                author: doc.data().author,
                body: doc.data().body,
                date: doc.data().date,
                thumbnail: doc.data().imageUrl,
                title: doc.data().title,
              },
            };
          })
        );
        setLoading(false);
      });
    };

    getPost();
  }, []);

  // GET AUTHOR DATA
  useEffect(() => {
    const getUsers = async () => {
      const q = query(collection(db, "users"));
      onSnapshot(q, (authors) => {
        setUsers(
          authors.docs.map((author) => {
            return {
              id: author.data().email,
              image: author.data().imageUrl,
              name: author.data().name,
            };
          })
        );
      });
    };

    getUsers();
  }, []);

  const addUserToFirebase = async (currentUser) => {
    await setDoc(doc(db, "users", currentUser.email), {
      email: currentUser.email,
      name: currentUser.displayName,
      imageUrl: currentUser.photoURL,
      followerCount: 0,
    });
  };
  // SIGNING IN WITH GOOGLE AUTH

  const handleGoogleAuth = async () => {
    const userData = await signInWithPopup(auth, provider);
    const subscriber = userData.user;
    console.log(subscriber);
    setCurrentUser(subscriber);
    addUserToFirebase(subscriber);
  };

  return (
    <MediumContext.Provider
      value={{
        posts,
        users,
        loading,
        setLoading,
        handleGoogleAuth,
        currentUser,
      }}
    >
      {children}
    </MediumContext.Provider>
  );
};

export { MediumContext, MediumProvider };
