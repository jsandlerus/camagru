import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { fetchPost } from "../../utils/FetchPosts";

const FullImage = () => {
  const [imageGallery, setImageGallery] = useState([]);

  let params = useParams("/image/:imageID");
  const { imageID } = params;

  const getPost = () => {
    const post = fetchPost(imageID);
    post
      .then(res => {
        setImageGallery(res);
      })
      .catch(err => {
        console.error(err);
      });
  };

  useEffect(() => {
    getPost();
  }, []);

  //  Here look for the return to work
  return (
    <div>
      <div className="full_image">
        <img alt="database_image" src={`${imageGallery.image}`} />
      </div>
    </div>
  );
};

export default FullImage;
