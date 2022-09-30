import { addDoc, collection } from "firebase/firestore";
import { useContext } from "react";
import { Link, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { MediumContext } from "../context/MediumContext";
import { db } from "../utlils/Firebase";

const CreatePost = () => {
  const { currentUser } = useContext(MediumContext);

  console.log(currentUser);

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");

  const navigate = useNavigate();

  // ADD POSTS TO FIREBASE
  const addPostToFirebase = async () => {
    await addDoc(collection(db, "posts"), {
      title: title,
      image: image,
      body: body,
      author: currentUser.email,
    });
    navigate("/");
  };

  console.log(title);

  return (
    <div className={styles.wrapper}>
      <div className={styles.headingContainer}>
        <h1 className={styles.heading}>Share Your Knowledge!</h1>
        <h4 className={styles.heading2}>
          Contribute to the fountain of knowledge
        </h4>
      </div>

      <div className={styles.inputContainer}>
        <input
          className={styles.inputField}
          type="text"
          name="title"
          placeholder="Title of your Post "
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className={styles.inputContainer}>
        <input
          className={styles.inputField}
          type="text"
          name="image"
          placeholder="Image link "
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>

      <div className={styles.inputContainer}>
        <textarea
          className={styles.textArea}
          type="text"
          name="body"
          placeholder="Write your Post"
          rows={5}
          col={10}
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </div>
      <div className={styles.submitButtonLink}>
        <Button
          id={"submitbutton"}
          type={"submit"}
          value={"Publish"}
          isDisabled={false}
          buttonCustomStyle={styles.submitButton}
          clickHandler={addPostToFirebase}
        />
      </div>
    </div>
  );
};

const styles = {
  wrapper: `
        flex 
        flex-col
        w-[90%]
        container
        mx-auto
        mt-[10%]
        mb-[10rem]
        items-center
        gap-[3rem]
        text-primary
        h-auto
    `,

  headingContainer: `
        text-center
    `,

  heading: `
        text-[2.5rem]
        font-xl
    `,

  heading2: `
      text-[1.2rem]
        font-normal
        p-0
  `,

  textAndLink: `
      text-[1.2rem]
      flex
      gap-[1rem]
  `,

  text: `
        hidden
        md:block
    `,

  Link: `
      text-[#0000FF]
      hover:text-primary
    `,

  inputContainer: `
        flex
        flex-col 
        container
        gap-[1rem] 
  `,

  inputField: `
    py-[.8rem]
    px-[.5rem]
    border-b-[.1rem]
    border-solid
    border-[#1C1C1C]
    text-[1rem]
    outline-none
  `,

  textArea: `
  border-b-[.1rem]
  border-solid
  border-[#1C1C1C]
  text-[1rem]
  outline-none
  overflow-y-none
  resize-none
  scrollbar
  scrollbar-thumb-primary 
  scrollbar-medium
  `,

  submitButton: `
        bg-[#1C1C1C]
        text-[#fff]
        text-[1rem]
        hover:bg-[transparent]
        hover:text-[#1C1C1C]
        mx-0
    `,

  submitButtonLink: `
        flex
        flex-row
        container
        w-full
        justify-between
        gap-[1rem]
        container
        items-center
  `,
};

export default CreatePost;
