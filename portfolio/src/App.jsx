import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <main>

        {/* =========================
            HOME
        ========================= */}

        <section id="home" className="section home-section">
          <div className="section-content">

            <p>HELLO, I'M</p>

            <h1>Sandeep B Naik</h1>

            <h2>Computer Science Student</h2>

            <p>
              A curious Computer Science student who enjoys turning
              ideas into practical applications through code,
              creativity, and continuous learning.
            </p>

            <div className="home-buttons">
              <a href="#projects">View Projects</a>
              <a href="#contact">Contact Me</a>
            </div>

          </div>
        </section>


        {/* =========================
            ABOUT
        ========================= */}

        <section id="about" className="section about-section">
          <div className="section-content">

            <p>GET TO KNOW ME</p>

            <h1>About Me</h1>

            <p>
              I'm Sandeep B Naik, a Computer Science student with
              a strong interest in software development and web
              technologies.
            </p>

            <p>
              I enjoy understanding how things work and building
              projects that allow me to apply what I learn in
              practical situations. From creating simple websites
              to developing interactive applications, I like
              experimenting with different ideas and improving
              my skills along the way.
            </p>

            <p>
              My current focus is on strengthening my fundamentals
              in programming, web development, and problem solving.
              I believe that every project is an opportunity to
              learn something new.
            </p>


            <div className="about-details">

              <div className="about-detail-card">
                <span>01</span>

                <h3>Education</h3>

                <p>
                  Computer Science student with an interest in
                  software and web development.
                </p>
              </div>


              <div className="about-detail-card">
                <span>02</span>

                <h3>Interests</h3>

                <p>
                  Web development, programming, technology,
                  problem solving, and learning new tools.
                </p>
              </div>


              <div className="about-detail-card">
                <span>03</span>

                <h3>Currently Learning</h3>

                <p>
                  React, modern JavaScript, Git, and better
                  approaches to building real-world applications.
                </p>
              </div>

            </div>

          </div>
        </section>


        {/* =========================
            SKILLS
        ========================= */}

        <section id="skills" className="section skills-section">
          <div className="section-content">

            <p>WHAT I KNOW</p>

            <h1>My Skills</h1>

            <p>
              Technologies and tools that I have worked with
              during my studies and personal projects.
            </p>


            <div className="skills-list">

              <span>HTML</span>

              <span>CSS</span>

              <span>JavaScript</span>

              <span>React</span>

              <span>Java</span>

              <span>Python</span>

              <span>C Programming</span>

              <span>Git</span>

              <span>GitHub</span>

            </div>

          </div>
        </section>


        {/* =========================
            PROJECTS
        ========================= */}

        <section id="projects" className="section projects-section">
          <div className="section-content">

            <p>MY WORK</p>

            <h1>Projects</h1>

            <p>
              A few projects that showcase my interest in
              programming, web development, and problem solving.
            </p>


            <div className="projects-list">


              {/* PROJECT 01 */}

              <div className="project-card">

                <span>01</span>

                <h2>
                  College Event Management Website
                </h2>

                <p>
                  A website designed to display college events,
                  announcements, schedules, and important
                  information for students.
                </p>

                <p>
                  HTML • CSS • JavaScript
                </p>

              </div>


              {/* PROJECT 02 */}

              <div className="project-card">

                <span>02</span>

                <h2>
                  Student Result Management System
                </h2>

                <p>
                  A simple application created to organize and
                  display student marks and academic results in
                  an easy-to-use interface.
                </p>

                <p>
                  Java • HTML • CSS
                </p>

              </div>


              {/* PROJECT 03 */}

              <div className="project-card">

                <span>03</span>

                <h2>
                  Personal Portfolio Website
                </h2>

                <p>
                  A responsive personal portfolio designed to
                  showcase my skills, projects, education, and
                  contact information.
                </p>

                <p>
                  React • JavaScript • CSS
                </p>

              </div>

            </div>

          </div>
        </section>


        <section id="contact" className="section contact-section">
          <div className="section-content">

            <p>LET'S CONNECT</p>

            <h1>Contact Me</h1>

            <p>
              Whether you have a project idea, an opportunity,
              or simply want to connect, feel free to reach out.
            </p>


            <div className="contact-info">

              <p>
                <strong>Email</strong>
                <br />
                sandeepnaik@gmail.com
              </p>

              <p>
                <strong>Location</strong>
                <br />
                Karnataka, India
              </p>

              <p>
                <strong>Availability</strong>
                <br />
                Open to learning and opportunities
              </p>

            </div>


            <form className="contact-form">

              <input
                type="text"
                placeholder="Your Name"
              />

              <input
                type="email"
                placeholder="Your Email"
              />

              <input
                type="text"
                placeholder="Subject"
              />

              <textarea
                rows="6"
                placeholder="Your Message"
              ></textarea>

              <button type="submit">
                Send Message
              </button>

            </form>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

export default App;