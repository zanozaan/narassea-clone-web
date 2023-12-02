import React from "react";
import HeaderPost from "./HeaderPost";
import BodyPost from "./BodyPost";
import FooterPost from "./FooterPost";

const CreatePost = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center flex-col"
      onClick={handleClose}
      id="wrapper"
    >
      <HeaderPost />
      <BodyPost />
      <FooterPost />
    </div>
  );
};

export default CreatePost;
