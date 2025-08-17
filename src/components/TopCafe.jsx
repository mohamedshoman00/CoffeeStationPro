import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "../assets/css/top-cafe.css";
const TopCafe = ({ data, title }) => {
  const location = useLocation();
  const nav = useNavigate();
  return (
    <div className="col-10 col-lg-10">
      {/* Start top-cafe  */}
      <div className="top-cafe" id="top-cafe">
        <h2 className="main-title gap-5 d-flex justify-content-between items-center col-12 col-lg-12 text-2xl md:text-4xl">
          Top {title} In Ismalia
          {location.pathname === `/home` ? (
            <NavLink
              to={
                title === `cafes`
                  ? `/all-cafes`
                  : title === `restaurants`
                  ? `/all-restaurants`
                  : ``
              }
              className="view-all-btn w-40 h-16"
            >
              View All
            </NavLink>
          ) : null}
        </h2>

        <div className="container">
          {data.map((ele, i) => (
            <div className="box" key={i}>
              <img decoding="async" src={ele.image} alt="" />
              <div className="content">
                <h3>
                  <span className="first">{ele.itemFirstName} </span>
                  <span className="second">{ele.itemLastName}</span>
                </h3>
                <p>{ele.description}</p>
                <div className="rate">
                  <i className="filled fas fa-star"></i>
                  <i className="filled fas fa-star"></i>
                  <i className="filled fas fa-star"></i>
                  <i className="filled fas fa-star"></i>
                  <i className="far fa-star"></i>
                  <span>{ele.rate}</span>
                </div>
              </div>
              <div className="info" onClick={() => nav("/cafe-details")}>
                <NavLink>Go To Cafe</NavLink>
                <i className="fas fa-long-arrow-alt-right"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* End top-cafe */}
    </div>
  );
};

export default TopCafe;
