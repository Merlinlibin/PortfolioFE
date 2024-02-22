import React from "react";
import AnimatedPage from "../AnimatedPage";

function Work() {
  return (
    <AnimatedPage>
      <section className="work section" id="work">
        {/* <!--===== WORK =====--> */}
        <h2 className="section-title">Work</h2>

        <div className="work__container bd-grid  gap-y-8 gap-x-8">
          <div className="lg:flex justify-around items-center">
            <div className="text-center">
              <a
                href="https://www.mbitindia.com/index.html"
                className="work__img "
                target="_blank">
                <img
                  src="https://res.cloudinary.com/dewfjhlh5/image/upload/v1708601782/ud0obqzbxhvukmtkgmbx.png"
                  className="my-3 mx-auto"
                  alt=""
                />
              </a>
            </div>
            <div className="m-3 text-center">
              <h1 className="text-4xl font-semibold m-3">Software Engineer</h1>
              <p>(2022-2023)</p>
            </div>
          </div>

          <div className="lg:flex justify-around items-center">
            <div>
              <a
                href="https://www.sparkinfratech.com/"
                className="work__img"
                target="_blank">
                <img
                  src="https://res.cloudinary.com/dewfjhlh5/image/upload/v1708600786/ajehzyprmikmjn4adof8.jpg"
                  alt=""
                  className="my-3 mx-auto"
                />
              </a>
            </div>
            <div className="m-3 text-center">
              <h1 className="text-4xl font-semibold m-3">Junior Engineer</h1>
              <p>(2018-2021)</p>
            </div>
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
}

export default Work;
