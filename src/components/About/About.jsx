import React from "react";


function About() {
  return (
    <section class="about section h-4/5" id="about">
      {/* <!--===== ABOUT =====--> */}
      <h2 class="section-title">About</h2>

      <div class="about__container bd-grid">
        <div class="about__img">
          <img
            src="https://res.cloudinary.com/dewfjhlh5/image/upload/c_crop,g_auto,h_1050,w_1050/fxeb0lvbfwemrfazxysf.jpg"
            alt=""
            className="about_img"
          />
        </div>

        <div>
          <h1 class="about__subtitle text-3xl">I'am Merlin Libin</h1>
          <p class="about__text text-xl">
            I'm a passionate Full Stack Web Developer dedicated to crafting
            <strong> fast</strong>, <strong>modern</strong>, and user-friendly
            applications. With a strong focus on the{" "}
            <strong>JavaScript ecosystem</strong>, I bring expertise in creating
            efficient, elegant solutions.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
