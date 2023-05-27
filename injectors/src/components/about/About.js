import React from "react";

const About = ({ id, id1 }) => {
  const isAdmin = localStorage.getItem("isAdmin");
  const token = localStorage.getItem("token");
  return (
    <div>
      <section>
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-md-6">
              <img src="/images/about1.jpg" alt="About" className="w-75 mt-5" />
            </div>
            <div className="col-md-6"><br/><br/><br/><br/>
              <h3 className="fs-5">About Us</h3>
              <h1 className="display-6">
                Who <b>We</b> Are
              </h1>
              <hr />
              <p className="lead mb-4">
                First and foremost, we would like to welcome you to our website.
                We <br/><b>-Team Injectors-</b> provide all of our clients with the medical care they need to keep their babies healthy and strong .
              </p>
              <a
                href={`#${id1}`}
                className="btn btn-primary rounded-pill px-4 py-2"
              >
                Our Services
              </a>
              {!isAdmin && token &&
              <a
                href={`#${id}`}
                className="btn btn-primary rounded-pill px-4 py-2 ms-2"
              >
                Contact Us
              </a>}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default About;
