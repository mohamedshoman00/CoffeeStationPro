import post from "../assets/images/Group 1000001769.png";
import user from "../assets/images/240_F_302884605_actpipOdPOQHDTnFtp4zg4RtlWzhOASp.jpg";
import "../assets/css/post.css";
import { useState } from "react";
import AddComments from "./AddComments";
import PostComments from "./PostComments";
function Post() {
  const [clicked, setClicked] = useState(false);
  const [followBtn, setFollowBtn] = useState(false);
  const [seeMore, setSeeMore] = useState(false);
  const [addComment, setAddComment] = useState(false);
  const [showComments, setShowComments] = useState(false);
  return (
    <div className="post col-12" style={{ zIndex: "100" }}>
      <div
        className="container col-8"
        style={{
          position: "relative",
          marginBottom: addComment ? `150px` : "",
        }}
      >
        <div className="info">
          <div className="left">
            <img src={user} alt="" />
            <p>Mahmoud</p>
          </div>

          <div className="right">
            <i className="fa-solid fa-ellipsis-vertical  first"></i>
            <p>
              Frio Cafe <i className="fa-solid fa-angle-up fa-rotate-90"></i>
            </p>
          </div>
        </div>

        <div className="img-container">
          <img src={post} alt="" />
        </div>

        <div className="like-comment">
          <div className="icons">
            <div
              className="i"
              onClick={() => {
                setClicked(!clicked);
              }}
            >
              <i
                className={
                  clicked ? `fa-solid fa-heart` : `fa-regular fa-heart`
                }
                style={{ color: clicked ? `#FD5B1F` : `#214E8A` }}
              ></i>
              <p>10</p>
            </div>
            <div
              className="i"
              onClick={() => {
                setShowComments(!showComments);
                setAddComment(false);
              }}
            >
              <i className="fa-regular fa-comment"></i>
              <p>10</p>
            </div>
            <div className="i">
              <i className="fa-sharp fa-solid fa-share"></i>
              <p>10</p>
            </div>
            <div className="i">
              <i className="fa-regular fa-bookmark"></i>
              <p>10</p>
            </div>
            <div className="i">
              <i className="fa-sharp fa-solid fa-location-dot"></i>
              <p>10</p>
            </div>
          </div>
          {showComments && <PostComments />}
          <div
            className="comment"
            onClick={() => setAddComment(!addComment)}
            style={{ cursor: "pointer" }}
          >
            <img src={user} alt="" />
            <p>Add Comment ...</p>
          </div>
        </div>
        {addComment && <AddComments />}
        <div className="review">
          <h3>
            Mahmoud
            <button
              onClick={() => setFollowBtn(!followBtn)}
              style={{
                backgroundColor: followBtn ? `#FD5B1F` : `#fff`,
                color: followBtn ? `#fff` : `#214E8A`,
              }}
            >
              {followBtn ? `Following` : `Follow`}
            </button>
          </h3>
          <p>
            The Social Grind is a cafe that aims to provide a warm and welcoming
            environment for people to socialize, work, and relax.
            {seeMore &&
              ` The cafe features comfortable seating, a relaxed atmosphere, and high-quality coffee and food`}
            ...
            <span onClick={() => setSeeMore(!seeMore)}>
              See {seeMore ? `Less` : `More`}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Post;
