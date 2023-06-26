import cafes from "../assets/images/Rectangle4878.png";
import museum from "../assets/images//image23.png";
import restaurants from "../assets/images//Rectangle 4879.png";

const Search = ({ dataItems }) => {
  return (
    <div
      className="search"
      style={{ marginBottom: "100px", marginTop: "100px" }}
    >
      <div className="container ">
        <input
          type="search"
          placeholder="search"
          style={{
            border: "none",
            width: "80%",
            padding: "15px 30px",
            textAlighn: "center",
            borderRadius: "20px",
          }}
        />
        <h1
          style={{
            marginTop: "30px",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "30px",
            lineHeight: "35px",
            color: "#000000",
          }}
        >
          Your Search History
        </h1>
        <div className="history" style={{ display: "flex" }}>
          <p
            style={{
              fontWeight: "bold",
              marginRight: "50px",
              boxShadow: "0px 5px 20px 6px rgba(0, 0, 0, 0.07)",
              color: "#214E8A",
              padding: "10px ",
              width: "116px",
              borderRadius: "32px",
              textAlign: "center",
              margin: "40px 40px 40px 0 ",
            }}
          >
            frio
          </p>
          <p
            style={{
              fontWeight: "bold",
              marginRight: "50px",
              boxShadow: "0px 5px 20px 6px rgba(0, 0, 0, 0.07)",
              color: "#214E8A",
              padding: "10px ",
              width: "170px",
              borderRadius: "32px",
              textAlign: "center",
              margin: "40px   ",
            }}
          >
            coffee bloom
          </p>
          <p
            style={{
              fontWeight: "bold",
              marginRight: "50px",
              boxShadow: "0px 5px 20px 6px rgba(0, 0, 0, 0.07)",
              color: "#214E8A",
              padding: "10px ",
              width: "170px",
              borderRadius: "32px",
              textAlign: "center",
              margin: "40px ",
            }}
          >
            karam elsham
          </p>
        </div>
        <div
          className="cards"
          style={{
            border: "none",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div className="card" style={{ border: "none" }}>
            <div className="image">
              <img src={cafes} alt="" style={{ marginBottom: "15px" }} />
            </div>
            <h4>Frio</h4>
          </div>
          <div className="card" style={{ border: "none" }}>
            <div className="image">
              <img
                src={museum}
                alt=""
                style={{
                  width: "366px",
                  height: "248px",
                  borderRadius: "15px",
                  marginBottom: "15px",
                }}
              />
            </div>
            <h4>Meusuem</h4>
          </div>
          <div className="card" style={{ border: "none" }}>
            <div className="image">
              <img src={restaurants} alt="" style={{ marginBottom: "15px" }} />
            </div>
            <h4>Restaurant</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Search;
