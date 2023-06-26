import world from "../assets/images/image112.png";

export default function WebFooter() {
  return (
    <>
      <div
        className="footer w-100"
        style={{
          position: "relative",
          backgroundImage: `url(${world})`,
          backgroundSize: "cover",
        }}
      >
        <div className="overlay" style={{ opacity: "0.6", zIndex: `-1` }}></div>
        <div className="layer bg-black bg-opacity-75">
          <div className="container p-5">
            <div className="row">
              <div className="col-3">
                <h2 className="text-white">
                  Wa<span className="text-danger">l</span>k
                  <span className="text-danger">i</span>e
                </h2>
                <p className="text-white p-2">
                  visita.com's brand is ranked #588 in the list of Global Top
                  1000 Brands, as rated by customers of visita.com
                </p>
              </div>
              <div className="col-3 ps-4">
                <h3 className="fw-bolder text-white">explore</h3>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                  <li className="nav-item mx-1 ">
                    <a
                      className="nav-link active text-white bx-0"
                      aria-current="page"
                      href="#"
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-item mx-1 ">
                    <a
                      className="nav-link active text-white bx-0"
                      aria-current="page"
                      href="#"
                    >
                      Reels
                    </a>
                  </li>
                  <li className="nav-item mx-1">
                    <a
                      className="nav-link active text-white bx-0"
                      aria-current="page"
                      href="#"
                    >
                      Community
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-3 text-white" style={{ marginTop: "45px" }}>
                <p> Help </p>
                <p> Terms and Conditions </p>
                <p> privacy policy </p>
              </div>

              <div className="col-3">
                <h4 className="text-white"> Follow Us</h4>

                <div className="icon d-flex gap-3 mt-4">
                  <i
                    className="fa-brands fa-instagram fa-2"
                    style={{
                      color: `#FD5B1F`,
                      fontSize: `23px`,
                      cursor: `pointer`,
                    }}
                  ></i>
                  <i
                    className="fa-brands fa-whatsapp fa-2"
                    style={{
                      color: `#FD5B1F`,
                      fontSize: `23px`,
                      cursor: `pointer`,
                    }}
                  ></i>
                  <i
                    className="fa-brands fa-twitter fa-2"
                    style={{
                      color: `#FD5B1F`,
                      fontSize: `23px`,
                      cursor: `pointer`,
                    }}
                  ></i>
                  <i
                    className="fa-brands fa-facebook-f fa-2"
                    style={{
                      color: `#FD5B1F`,
                      fontSize: `23px`,
                      cursor: `pointer`,
                    }}
                  ></i>
                  <i
                    className="fa-brands fa-tiktok fa-2"
                    style={{
                      color: `#FD5B1F`,
                      fontSize: `23px`,
                      cursor: `pointer`,
                    }}
                  ></i>
                </div>
              </div>
            </div>
          </div>

          <div
            className="down d-flex align-items-center justify-content-center"
            style={{
              background: `#000000`,
              opacity: `0.85`,
            }}
          >
            <p className="text-white p-4 mb-0"> © All Right Reserved 2021 </p>
          </div>
        </div>
      </div>
    </>
  );
}
