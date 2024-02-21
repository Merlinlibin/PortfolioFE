import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section class="home bd-grid " id="home">
      {/* <!--===== HOME =====--> */}
      <div class="home__data">
        <h1 class="home__title">
          Hi,
          <br />
          I'am <span class="home__title-color">Merlin Libin</span>
          <br /> Web Developer
        </h1>

        <a
          href="https://drive.google.com/file/d/1uKKxWmiCPvL9yePo9q7YXYSrGPbxoRzw/view?usp=sharing"
          target="_blank"
          type="button"
          class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
          Resume
        </a>
        <div class="home__social  mt-5">
          <a
            href="https://www.linkedin.com/in/merlin-libin-j-199317277?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            class="home__social-icon"
            target="_blank">
            <i class="bx bxl-linkedin"></i>
          </a>
          <a
            href="https://github.com/Merlinlibin"
            class="home__social-icon"
            target="_blank">
            <i class="bx bxl-github"></i>
          </a>
        </div>
      </div>

      <div class="home__img ">
        <svg class="home__blob" viewBox="0 0 479 467">
          <mask id="mask0" mask-type="alpha">
            <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
          </mask>
          <g mask="url(#mask0)">
            <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
            <image
              class="home__blob-img "
              href="https://res.cloudinary.com/dewfjhlh5/image/upload/c_crop,g_auto,h_1050,w_1050/v1708489266/fxeb0lvbfwemrfazxysf.png"
            />
          </g>
        </svg>
      </div>
    </section>
  );
}

export default Home;
