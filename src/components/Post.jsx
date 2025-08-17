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
    <div className="post col-10 col-lg-8" style={{ zIndex: "100" }}>
      <div
        className="container col-12"
        style={{
          position: "relative",
          marginBottom: addComment ? `150px` : "",
        }}
      >
        <div className="gap-10 info">
          <div className="py-6 left">
            <img src={user} alt="" className='w-16 h-16 md:w-20 md:h-20' />
            <p className="text-xl md:text-2xl">Mahmoud</p>
          </div>

          <div className="right">
            <i className="mt-2 mr-2 text-xl fa-solid fa-ellipsis-vertical first md:text-3xl"></i>
            <p className="mt-2 text-xl md:text-2xl md:mr-12">
              Frio Cafe <i className="hidden fa-solid fa-angle-up fa-rotate-90 md:inline-block"></i>
            </p>
          </div>
        </div>

        <div className="img-container">
          <img src={post} alt="" />
        </div>

        <div className="flex flex-col justify-start md:flex-row like-comment">
          <div className="w-full gap-2 mt-2 mb-2 px-7 icons md:w-1/2">
            <div
              className="i"
              onClick={() => {
                setClicked(!clicked);
              }}
            >
              <i
                className={
                 ` ${ clicked ? `fa-solid fa-heart` : `fa-regular fa-heart`}`
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
            className="w-full comment md:w-1/2"
            onClick={() => setAddComment(!addComment)}
            style={{ cursor: "pointer" }}
          >
            <img src={user} alt="" />
            <p>Add Comment ...</p>
          </div>
        </div>
        {/* {addComment && <AddComments />} */}
        <div className="review ">
          <h3 className="flex items-center text-lg">
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
          <p  className="w-full pt-2 pb-3 pr-4 text-sm md:w-1/2">
            The Social Grind is a cafe that aims to provide a warm and welcoming
            environment for people to socialize, work, and relax.
            {seeMore &&
              ` The cafe features comfortable seating, a relaxed atmosphere, and high-quality coffee and food`}
            {seeMore ? ` ` : `...`}
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
