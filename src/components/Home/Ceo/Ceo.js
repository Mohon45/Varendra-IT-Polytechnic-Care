import React from "react";

const Ceo = () => {
  return (
    <div>
      <div className="pb-2">
        <h1 className="text-white text-center fw-bold question-title py-5">
          বরেন্দ্র আইটির প্রতিষ্ঠাতা ও সিইও
        </h1>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-4 ceo-img">
            <img
              className="rounded"
              src="https://i.ibb.co/rfYL8jP/ceo.jpg"
              alt="ceo"
            />
          </div>
          <div className="col-md-4 ceo-desc text-white">
            <p className="text-align-justify">
              As one of the leading IT solution providers of Bangladesh, we are
              working with the vision of making the nation proficient in the
              Global IT village by building a platform which serves business
              owners as well as freelancers with comprehensive training for IT
              skills and professional enterprise solutions
            </p>
            <i className="fw-bold">Sarwar Mim</i>
            <p>Founder & CEO</p>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Ceo;
