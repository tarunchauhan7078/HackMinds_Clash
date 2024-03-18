// Homepage.js
import React from "react";
import Header from "./Header";
import heroImage from "../topimg.png";
import detailImg from "../detailsimg.png";
import elig from "../eligiblity.png";
import datetime from "../date&time.png";
import criteria from "../judgingCrit.png";
import prizes from "../prizes.png";
import styles from "./Homepage.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PanelistsCarousel from "./PanelistsCarousel";
import Footer from "./Footer";
import imgp from "../judgingCrit.png";

const cards = [
  { img: imgp, name: "Panelist 1" },
  { img: imgp, name: "Panelist 2" },
  { img: imgp, name: "Panelist 3" },
  { img: imgp, name: "Panelist 4" },
];

const Homepage = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Header />
      <div className={styles.heroSection}>
        <img src={heroImage} alt="Hackathon" className={styles.heroImage} />
      </div>
      <nav className={styles.bottomNav}>
        <ul>
          <li>
            <a href="#details" onClick={() => scrollToSection("details")}>
              Details
            </a>
          </li>
          <li>
            <a
              href="#eligibility"
              onClick={() => scrollToSection("eligibility")}
            >
              Eligibility
            </a>
          </li>
          <li>
            <a href="#date" onClick={() => scrollToSection("date")}>
              Date and Timing
            </a>
          </li>
          <li>
            <a href="#criteria" onClick={() => scrollToSection("criteria")}>
              Judging Criteria
            </a>
          </li>
          <li>
            <a href="#panelists" onClick={() => scrollToSection("panelists")}>
              Panelists
            </a>
          </li>
          <li>
            <a href="#prizes" onClick={() => scrollToSection("prizes")}>
              Prizes
            </a>
          </li>
        </ul>
      </nav>
      <div className={styles.contentArea}>
        {/* Container for all sections */}
        <div className={styles.sectionsContainer}>
          {/* Content for each section */}
          <section
            id="details"
            className=""
            style={{ height: "100vh", display: "flex" }}
          >
            <div
              className="left"
              style={{
                width: "50%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h2
                style={{
                  position: "relative",
                  display: "inline-block",
                  color: "#ff8400",
                  right: "150px",
                }}
              >
                Details{" "}
                <span
                  style={{
                    content: " ",
                    display: "block",
                    position: "absolute",
                    bottom: "-3px",
                    left: "-10px",
                    width: "400px",
                    height: "1px",
                    backgroundColor: "orange",
                  }}
                ></span>
              </h2>
              <p style={{ textAlign: "justify", padding: "50px" }}>
                Welcome to Hackathon 2024! Our hackathon is a collaborative
                event designed to bring together creative minds and innovative
                thinkers from across the globe. This year, our focus is on
                pushing the boundaries of technology and addressing real-world
                challenges through innovative solutions. Join us on 22 March 2024, for
                an exciting two-day event filled with coding, collaboration, and
                creativity. Throughout the hackathon, participants will have the
                opportunity to attend workshops, hear from industry experts, and
                work on projects that tackle pressing issues in various domains.
                Whether you're a seasoned developer or just starting out,
                there's something for everyone at Hackathon 2024. Register now
                and be part of the future of innovation!
              </p>
            </div>
            <div
              className="right"
              style={{
                width: "50%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={detailImg} alt="sjbv" />
            </div>
          </section>

          <section
            id="eligibility"
            className={styles.blackBackground}
            style={{ height: "100vh", display: "flex" }}
          >
            <div
              className="left"
              style={{
                width: "50%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={elig} alt="sjbv" />
            </div>
            <div
              className="right"
              style={{
                width: "50%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h2
                style={{
                  position: "relative",
                  display: "inline-block",
                  color: "#ff8400",
                  right: "150px",
                }}
              >
                Eligibility{" "}
                <span
                  style={{
                    content: " ",
                    display: "block",
                    position: "absolute",
                    bottom: "-3px",
                    left: "-10px",
                    width: "400px",
                    height: "1px",
                    backgroundColor: "orange", // Set the background color to orange
                  }}
                ></span>
              </h2>
              <p style={{ textAlign: "justify", padding: "50px" }}>
                To participate in Hackathon 2024, you must meet the following
                eligibility criteria:
                <br />
                - Participants must be at least 18 years old.
                <br />
                - Participants can be individuals or teams of up to 4 members.
                <br />
                - All skill levels are welcome, from beginners to experienced
                developers.
                <br />
                - Participants must adhere to the Hackathon's code of conduct.
                <br />
                - Registrants must agree to abide by the rules and guidelines
                outlined by the organizers.
                <br />
                If you meet the above criteria, we welcome you to join us for an
                exciting hackathon experience!
              </p>
            </div>
          </section>

          <section
            id="date"
            className=""
            style={{ height: "100vh", display: "flex" }}
          >
            <div
              className="left"
              style={{
                width: "50%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h2
                style={{
                  position: "relative",
                  display: "inline-block",
                  color: "#ff8400",
                  right: "120px",
                }}
              >
                Date & Time{" "}
                <span
                  style={{
                    content: " ",
                    display: "block",
                    position: "absolute",
                    bottom: "-3px",
                    left: "-10px",
                    width: "400px",
                    height: "1px",
                    backgroundColor: "orange", // Set the background color to orange
                  }}
                ></span>
              </h2>
              <p style={{ textAlign: "justify", padding: "50px" }}>
                Hackathon 2024 will take place on 22 March 2024.
                <br />
                The event will span 2 days.
                <br />
                Participants are encouraged to arrive on time for registration
                and the opening ceremony.
                <br />
                Mark your calendars and get ready for an exciting two-day event
                filled with coding, collaboration, and innovation!
              </p>
            </div>
            <div
              className="right"
              style={{
                width: "50%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={datetime} alt="sjbv" />
            </div>
          </section>

          <section
            id="criteria"
            className={styles.blackBackground}
            style={{ height: "100vh", display: "flex" }}
          >
            <div
              className="left"
              style={{
                width: "50%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={criteria} alt="sjbv" />
            </div>
            <div
              className="right"
              style={{
                width: "50%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h2
                style={{
                  position: "relative",
                  display: "inline-block",
                  color: "#ff8400",
                  right: "100px",
                }}
              >
                Judging Criteria{" "}
                <span
                  style={{
                    content: " ",
                    display: "block",
                    position: "absolute",
                    bottom: "-3px",
                    left: "-10px",
                    width: "400px",
                    height: "1px",
                    backgroundColor: "orange", // Set the background color to orange
                  }}
                ></span>
              </h2>
              <p style={{ textAlign: "justify", padding: "50px" }}>
                Projects submitted to Hackathon 2024 will be evaluated based on
                the following criteria:
                <br />
                - Innovation: How innovative and original is the project idea?
                <br />
                - Technical Complexity: What level of technical complexity is
                demonstrated in the implementation?
                <br />
                - Impact: What potential impact does the project have on
                addressing real-world problems?
                <br />
                - Presentation: How effectively is the project presented,
                including clarity, coherence, and visual appeal?
                <br />
                - Execution: How well is the project executed, including
                functionality, usability, and quality of implementation?
                <br />
                Judges will assess projects based on these criteria to determine
                the winners. Good luck to all participants!
              </p>
            </div>
          </section>
          <section
            id="panelists"
            style={{
              height: "80vh",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h2
              style={{
                position: "relative",
                display: "inline-block",
                color: "#ff8400",
                left: "90px",
              }}
            >
              Panelists
              <span
                style={{
                  content: " ",
                  display: "block",
                  position: "absolute",
                  bottom: "-3px",
                  left: "-10px",
                  width: "400px",
                  height: "1px",
                  backgroundColor: "orange",
                }}
              ></span>
            </h2>
            <hr
              style={{
                border: "none",
                height: "1px",
                backgroundColor: "transparent",
              }}
            ></hr>
            <div>
              <PanelistsCarousel cards={cards} />
            </div>
          </section>

          <section
            id="prizes"
            className={styles.blackBackground}
            style={{ height: "100vh", display: "flex" }}
          >
            <div
              className="left"
              style={{
                width: "50%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={prizes} alt="sjbv" />
            </div>
            <div
              className="right"
              style={{
                width: "50%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h2
                style={{
                  position: "relative",
                  display: "inline-block",
                  color: "#ff8400",
                  right: "180px",
                }}
              >
                Prizes{" "}
                <span
                  style={{
                    content: " ",
                    display: "block",
                    position: "absolute",
                    bottom: "-3px",
                    left: "-10px",
                    width: "400px",
                    height: "1px",
                    backgroundColor: "orange", // Set the background color to orange
                  }}
                ></span>
              </h2>
              <p style={{ textAlign: "justify", padding: "50px" }}>
                Hackathon 2024 offers exciting prizes for winning projects!
                Participants have the chance to win the following awards:
                <br />
                - First Place: [Description of First Place Prize]
                <br />
                - Second Place: [Description of Second Place Prize]
                <br />
                - Third Place: [Description of Third Place Prize]
                <br />
                In addition to cash prizes, winning teams will also receive
                recognition and exposure for their innovative projects. Don't
                miss out on the opportunity to showcase your skills and compete
                for these prestigious awards!
              </p>
            </div>
          </section>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
