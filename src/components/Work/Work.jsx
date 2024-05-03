import React from "react";

function Work() {
  return (
    <section className="work section" id="work">
      {/* <!--===== WORK =====--> */}
      <h2 className="section-title mb-5">Work</h2>

      <div className="work__container bd-grid  gap-y-8 gap-x-8">
        <div className="lg:grid grid-cols-2 grid-flow-col  ">
          <div
            className="justify-items-center items-center"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom">
            <a
              href="https://www.mbitindia.com/"
              className="work__img "
              target="_blank">
              <img
                src="https://res.cloudinary.com/dewfjhlh5/image/upload/v1708601782/ud0obqzbxhvukmtkgmbx.png"
                className="my-3 mx-auto"
                alt=""
              />
            </a>
          </div>

          <div
            className="my-auto text-center"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500">
            <h1 className="text-4xl font-semibold m-3">Software Engineer</h1>
            <p>(2022-2023)</p>
          </div>
        </div>

        <div className="lg:grid grid-cols-2 grid-flow-col">
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            className="justify-items-center items-center">
            <a
              href="https://www.sparkinfratech.com/"
              className="work__img "
              target="_blank">
              <img
                src="https://res.cloudinary.com/dewfjhlh5/image/upload/v1708600786/ajehzyprmikmjn4adof8.jpg"
                alt=""
                className="my-3 mx-auto"
              />
            </a>
          </div>

          <div
            className="my-auto text-center"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500">
            <h1 className="text-4xl font-semibold m-3">Junior Engineer</h1>
            <p>(2018-2021)</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
