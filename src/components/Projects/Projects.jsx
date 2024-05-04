import React from "react";
import { FaNode } from "react-icons/fa";
import { FaReact } from "react-icons/fa";

function Projects() {
  return (
    <section className="about section h-4/5" id="project">
      {/* <!--===== PROJECT =====--> */}
      <h2 className="section-title">Projects</h2>

      <div className="mx-7 grid grid-rows-3 lg:grid-cols-2 gap-4 items-center justify-items-center ">
        <div
          class="max-w-sm roundedcard overflow-hidden  my-11 "
          data-aos="zoom-in-down">
          <div className="overflow-hidden">
            <img
              class="w-full image-p"
              src="https://res.cloudinary.com/dewfjhlh5/image/upload/v1714751669/cghup9xgk0esj5qm83di.png"
              alt="Sunset in the mountains"
            />
          </div>
          <div class="px-3 pt-3">
            <div class="font-bold text-xl mb-2 text-center ">
              NUXZOX Shopping Platform
            </div>
          </div>
          <div class="px-6 pt-1 pb-9 flex items-center justify-between">
            <div>
              <a
                class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-3 border-b-4 border-blue-700 hover:border-blue-500 rounded shadow-xl cursor-pointer"
                target="_blank"
                href="https://merlin-shop.netlify.app/">
                Live
              </a>
            </div>
            <div className="flex gap-4">
              <a
                href="https://github.com/Merlinlibin/e-commerce_FE"
                target="_blank">
                <FaReact
                  className="button-project"
                  style={{ color: "rgb(4, 206, 237)" }}
                />
              </a>

              <a
                href="https://github.com/Merlinlibin/e-commerce_BE"
                target="_blank">
                <FaNode
                  className="button-project"
                  style={{ color: "#417E38" }}
                />
              </a>
            </div>
          </div>
        </div>

        <div
          class="max-w-sm roundedcard overflow-hidden my-11"
          data-aos="zoom-in-down">
          <div className="overflow-hidden">
            <img
              class="w-full image-p"
              src="https://res.cloudinary.com/dewfjhlh5/image/upload/v1714751669/uyrjp4s3zmezjf4ttvdr.png"
              alt="Sunset in the mountains"
            />
          </div>
          <div class="px-3 pt-3 pb-0">
            <div class="font-bold text-xl mb-2 text-center">ToDo App</div>
          </div>
          <div class="px-6 pt-1 pb-9 flex items-center justify-between">
            <div>
              <a
                class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-3 border-b-4 border-blue-700 hover:border-blue-500 rounded shadow-xl cursor-pointer"
                target="_blank"
                href="https://to-do-fsp.netlify.app/">
                Live
              </a>
            </div>
            <div className="flex gap-4">
              <a href="https://github.com/Merlinlibin/ToDo_FE" target="_blank">
                <FaReact
                  className="button-project"
                  style={{ color: "rgb(4, 206, 237)" }}
                />
              </a>

              <a href="https://github.com/Merlinlibin/ToDo_BE" target="_blank">
                <FaNode
                  className="button-project"
                  style={{ color: "#417E38" }}
                />
              </a>
            </div>
          </div>
        </div>
        <div
          class="max-w-sm roundedcard overflow-hidden my-11"
          data-aos="zoom-in-down">
          <div className="overflow-hidden">
            <img
              class="w-full image-p"
              src="https://res.cloudinary.com/dewfjhlh5/image/upload/v1714751669/ru4cvu2uxtpkqvcvawiw.png"
              alt="Sunset in the mountains"
            />
          </div>
          <div class="px-3 py-3 pb-0">
            <div class="font-bold text-xl mb-2 text-center">
              Image Finder App
            </div>
          </div>
          <div class="px-6 pt-1 pb-9 flex items-center justify-between">
            <div>
              <a
                class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-3 border-b-4 border-blue-700 hover:border-blue-500 rounded shadow-xl cursor-pointer"
                target="_blank"
                href="https://dynamic-vacherin-c4fdfd.netlify.app/">
                Live
              </a>
            </div>
            <div className="flex gap-4">
              <a
                href="https://github.com/Merlinlibin/ImageFinder_App"
                target="_blank">
                <FaReact
                  className="button-project"
                  style={{ color: "rgb(4, 206, 237)" }}
                />
              </a>

              {/* <a href="https://github.com/Merlinlibin/ToDo_BE" target="_blank">
                <FaNode
                  className="button-project"
                  style={{ color: "#417E38" }}
                />
              </a> */}
            </div>
          </div>
        </div>
        <div
          class="max-w-sm roundedcard overflow-hidden my-11"
          data-aos="zoom-in-down">
          <div className="overflow-hidden">
            <img
              class="w-full image-p"
              src="https://res.cloudinary.com/dewfjhlh5/image/upload/v1714751669/zccdymq0d2jjhsbm6f4x.png"
              alt="Sunset in the mountains"
            />
          </div>
          <div class="px-3 py-3 pb-0">
            <div class="font-bold text-xl mb-2 text-center">
              Lets Connect Chat App
            </div>
          </div>
          <div class="px-6 pt-1 pb-9 flex items-center justify-between">
            <div>
              <a
                class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-3 border-b-4 border-blue-700 hover:border-blue-500 rounded shadow-xl cursor-pointer"
                target="_blank"
                href="https://letsconnect-chat.netlify.app/">
                Live
              </a>
            </div>
            <div className="flex gap-4">
              <a
                href="https://github.com/Merlinlibin/Chat_APP_FE"
                target="_blank">
                <FaReact
                  className="button-project"
                  style={{ color: "rgb(4, 206, 237)" }}
                />
              </a>

              <a
                href="https://github.com/Merlinlibin/Chat_APP/tree/master/backend"
                target="_blank">
                <FaNode
                  className="button-project"
                  style={{ color: "#417E38" }}
                />
              </a>
            </div>
          </div>
        </div>
        <div
          class="max-w-sm roundedcard overflow-hidden my-11"
          data-aos="zoom-in-down">
          <div className="overflow-hidden">
            <img
              class="w-full image-p"
              src="https://res.cloudinary.com/dewfjhlh5/image/upload/v1714751669/jnfx3pvaott1rgibffqj.png"
              alt="Sunset in the mountains"
            />
          </div>
          <div class="px-3 py-3 pb-0">
            <div class="font-bold text-xl mb-2 text-center">Spotify Clone</div>
          </div>
          <div class="px-6 pt-1 pb-9 flex items-center justify-between">
            <div>
              <a
                class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-3 border-b-4 border-blue-700 hover:border-blue-500 rounded shadow-xl cursor-pointer"
                target="_blank"
                href="https://jolly-zabaione-ea8791.netlify.app/">
                Live
              </a>
            </div>
            <div className="flex gap-4">
              <a
                href="https://github.com/Merlinlibin/SpotifyCloneFE"
                target="_blank">
                <FaReact
                  className="button-project"
                  style={{ color: "rgb(4, 206, 237)" }}
                />
              </a>

              <a
                href="https://github.com/Merlinlibin/SpotifyCloneBE"
                target="_blank">
                <FaNode
                  className="button-project"
                  style={{ color: "#417E38" }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
