import React, { useState } from "react";
import opinionImg from "../assets/opinion.jpeg";
import {db, storage} from "./FbConfig";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { set } from "firebase/database";




const Form = () => {
  const [opinion, setOpinion] = useState(false);
  const [name, setName] = useState("");
  const [post, setPost] = useState("");
  const [email, setEmail] = useState("");
  const [rolldiv, setRolldiv] = useState("");
  const [phone, setPhone] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImageFile(file);

    // // Convert the image to URL
    // const reader = new FileReader();
    // reader.onload = (e) => {
    //   setImageUrl(e.target.result);
    // };
    // reader.readAsDataURL(file);
  };

  const change = async (event) => {
    event.preventDefault();

    let imageUrl = null;
    if (imageFile) {
      const storageRef = ref(storage, "images/" + imageFile.name);
      console.log(storageRef.toString());
      await uploadBytes(storageRef, imageFile);

      // Get download URL of the uploaded image
      imageUrl = await getDownloadURL(storageRef);
      setImageUrl(imageUrl)
    }

    const d = new Date().toString();
    const n = name + "-->>" + d;
    const data = { name, post, email, rolldiv, phone, suggestion, imageUrl};
    // set(ref(db, "members/" + n), data)
    // .then( res =>{
    //   console.log(res);
    //   setOpinion(true);
    // })
    // .catch(err=> console.log(err));
    try {
      await set(ref(db, "members/" + n), data);
      setOpinion(true);
    } catch (error) {
      console.error("Error storing data:", error);
    }
  };

  return (
    <>
      {opinion == false ? (
        <>
          <div style={{ color: "white" }}>
            <div className="info">
              <p>
                Congratulations to all GITS committee post holders! Let's
                collaborate and grow together to make this year unforgettable.
                Together, we'll achieve great things! 🚀{" "}
              </p>
            </div>
            <div className="fill">
              <p>Add Your Details below ....</p>
            </div>
            <div className="form">
              <input
                type="text"
                placeholder="Name"
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
              <br />
              <input
                type="text"
                placeholder="Post Name"
                onChange={(event) => {
                  setPost(event.target.value);
                }}
              />
              <br />
              <input
                type="text"
                placeholder="Email"
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <br />
              <input
                type="text"
                placeholder="Roll No / Division"
                onChange={(event) => {
                  setRolldiv(event.target.value);
                }}
              />
              <br />
              <input
                type="text"
                placeholder="Phone Number"
                onChange={(event) => {
                  setPhone(event.target.value);
                }}
              />
              <br />
              <textarea
                type="text"
                placeholder="Any Opinion"
                rows={5}
                cols={20}
                className="opinion-textarea"
                onChange={(event) => {
                  setSuggestion(event.target.value);
                }}
              />
              <br />
              <input type="file" onChange={handleImageChange} />
              <br />
              <input type="submit" onClick={change} />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="opinion" style={{ color: "white", fontSize: "23px" }}>
            <p>Your Response has been recorded.</p>
            <p>And ....</p>
            <img src={opinionImg} />
          </div>
        </>
      )}
    </>
  );
};

export default Form;
