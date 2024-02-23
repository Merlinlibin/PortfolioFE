import React from "react";
import AnimatedPage from "../AnimatedPage";
import AnimatedPage2 from "../AnimatedPage2";

function Work() {
  return (
    <section className="work section" id="work">
      {/* <!--===== WORK =====--> */}
      <h2 className="section-title">Work</h2>

      <div className="work__container bd-grid  gap-y-8 gap-x-8">
        <div className="lg:flex justify-around items-center">
          <AnimatedPage2>
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
          </AnimatedPage2>
          <AnimatedPage>
            <div className="m-3 text-center">
              <h1 className="text-4xl font-semibold m-3">Software Engineer</h1>
              <p>(2022-2023)</p>
            </div>
          </AnimatedPage>
        </div>

        <div className="lg:flex justify-around items-center">
          <AnimatedPage2>
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
          </AnimatedPage2>
          <AnimatedPage>
            <div className="m-3 text-center">
              <h1 className="text-4xl font-semibold m-3">Junior Engineer</h1>
              <p>(2018-2021)</p>
            </div>
          </AnimatedPage>
        </div>
      </div>
    </section>
  );
}

export default Work;
