import user from "../assets/images/240_F_302884605_actpipOdPOQHDTnFtp4zg4RtlWzhOASp.jpg";
import "../assets/css/review.css";
const Review = () => {
  return (
    <div className="review">
      <div className="container">
        <img src={user} alt="" />
        <div className="text">
          <h3>Mahmoud</h3>
          <p>
            The Social Grind is a cafe that aims to provide a warm and welcoming
            environment for people to socialize, work, and relax. The cafe
            features comfortable seating, a relaxed atmosphere, and high-quality
            coffee and food.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Review;
