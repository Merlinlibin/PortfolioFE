import React from "react";

function About() {
  return (
    <section className="about section h-4/5" id="about">
      {/* <!--===== ABOUT =====--> */}
      <h2 className="section-title">About</h2>

      <div className="about__container bd-grid">
        <div className="about__img" data-aos="fade-up-right">
          <img
            src="https://res.cloudinary.com/dewfjhlh5/image/upload/c_crop,g_auto,h_1050,w_1050/fxeb0lvbfwemrfazxysf.jpg"
            alt=""
            className="about_img"
          />
        </div>

        <div data-aos="fade-down-left">
          <h1 className="about__subtitle text-3xl">
            I'am <span className="home__title-color">Merlin Libin</span>
          </h1>
          <p className="about__text text-xl">
            I'm a passionate Full Stack Web Developer dedicated to crafting
            <strong> fast</strong>, <strong>modern</strong>, and user-friendly
            applications. With a strong focus on the{" "}
            <strong>JavaScript ecosystem</strong>, I bring expertise in creating
            efficient, elegant solutions.
          </p>
        </div>
      </div>
      <div data-aos="fade-down-left" className="container mx-auto mt-14">
        <div className="mx-4">
          <h1 className="about__subtitle text-3xl">
            <span className="home__title-color">
              MERN STACK DEVELOPMENT(2023)
            </span>
          </h1>
          <p className="about__text text-xl">
            I've mastered the MERN stack, proficient in
            <strong> MongoDB, Express.js, React</strong>, and
            <strong> Node.js</strong> enabling me to build full-stack web
            applications seamlessly from database to front-end.
          </p>
        </div>
      </div>
      <div data-aos="fade-down-left" className="container mx-auto mt-14">
        <div className="mx-4">
          <h1 className="about__subtitle text-3xl">
            <span className="home__title-color">
              BACHELOR OF ENGINEERING(2018)
            </span>
          </h1>
          <p className="about__text text-xl">
            Graduated with a <strong> Bachelor of Engineering</strong> in
            Mechanical from Marthandam College of Engineering and
            Technology,Kanyakumari in 2018.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
