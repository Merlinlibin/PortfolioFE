import React from "react";
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

function Skills() {
  return (
    <section className="skills section" id="skills">
      {/* <!--===== SKILLS =====--> */}
      <h2 className="section-title">Skills</h2>

      <div className="skills__container bd-grid">
        <div
          className="flex align-center justify-center"
          data-aos="zoom-in-down">
          <img
            src="https://res.cloudinary.com/dewfjhlh5/image/upload/v1708493762/s37h8v4nqy8sm8bm3xby.png "
            alt=""
            className="skills__img"
          />
        </div>

        <div>
          <h1 className="skills__subtitle">Profesional Skills</h1>

          <div className="skills__data" data-aos="fade-up-right">
            <div className="skills__names">
              <FaHtml5 className="skills__icon" />
              <span className="skills__name">HTML5</span>
            </div>
            <div className="skills__bar skills__html"></div>
            <div>
              <span className="skills__percentage">75%</span>
            </div>
          </div>
          <div className="skills__data" data-aos="fade-up-right">
            <div className="skills__names">
              <IoLogoCss3 className="skills__icon" />
              <span className="skills__name">CSS3</span>
            </div>
            <div className="skills__bar skills__css"></div>
            <div>
              <span className="skills__percentage">65%</span>
            </div>
          </div>
          <div className="skills__data" data-aos="fade-up-right">
            <div className="skills__names">
              <TbBrandJavascript className="skills__icon" />
              <span className="skills__name">JAVASCRIPT</span>
            </div>
            <div className="skills__bar skills__js"></div>
            <div>
              <span className="skills__percentage">65%</span>
            </div>
          </div>
          <div className="skills__data" data-aos="fade-up-right">
            <div className="skills__names">
              <FaReact className="skills__icon" />
              <span className="skills__name">React</span>
            </div>
            <div className="skills__bar skills__react"></div>
            <div>
              <span className="skills__percentage">70%</span>
            </div>
          </div>
          <div className="skills__data" data-aos="fade-up-right">
            <div className="skills__names">
              <FaNode className="skills__icon" />
              <span className="skills__name">Node</span>
            </div>
            <div className="skills__bar skills__node"></div>
            <div>
              <span className="skills__percentage">65%</span>
            </div>
          </div>
          <div className="skills__data" data-aos="fade-up-right">
            <div className="skills__names">
              <SiMongodb className="skills__icon" />
              <span className="skills__name">MongoDb</span>
            </div>
            <div className="skills__bar skills__mongodb"></div>
            <div>
              <span className="skills__percentage">75%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
