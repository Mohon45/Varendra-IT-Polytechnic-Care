import React from "react";
import { Accordion } from "react-bootstrap";

const About = () => {
  return (
    <div>
      <div className="pb-2">
        <h1 className="text-white text-center fw-bold question-title py-5">
          আমাদের সম্পর্কে জানুন
        </h1>
        <div className="row">
          <div className="col-md-12 about-img">
            <img src="https://i.ibb.co/Vpj0smv/about-final.png" alt="" />
          </div>
        </div>
      </div>

      <div className="py-5">
        <h1 className="text-white text-center fw-bold question-title my-5">
          আমাদের সম্পর্কিত সাধারণ জিজ্ঞাসা
        </h1>
        <div className="row d-flex justify-content-between align-items-center">
          <div className="col-md-5">
            <img
              width="100%"
              src="https://i.ibb.co/MV5s223/question.png"
              alt="about"
            />
          </div>
          <div className="col-md-6 my-5">
            <Accordion>
              <Accordion.Item
                className="single-according-item mb-3"
                eventKey="0"
              >
                <Accordion.Header className="fw-bold">
                  আপনাদের কোর্সসমূহ ?
                </Accordion.Header>
                <Accordion.Body className="text-white">
                  আমাদের কোর্স সমূহ: <br />
                  1. কম্পিউটার অফিস অ্যাপ্লিকেশন <br />
                  2. গ্রাফিক ডিজাইন উইথ ফ্রিল্যান্সিং গাইড লাইন <br />
                  3. ‍অটোক্যাড ২ডি ও ৩ডি <br />
                  4. ডুয়েট প্রিপারেশন + জব কোচিং <br />
                  5. ওয়েব ডিজাইন এন্ড ডেভেলপমেন্ট <br />
                  6. ডিজিটাল মার্কেটিং <br />
                  7. অ্যাপ ডেভেলপমেন্ট <br />
                  8. পলিটেকনিক কোচিং <br />
                  9. স্পোকেন ইংলিশ
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                className="single-according-item mb-3"
                eventKey="1"
              >
                <Accordion.Header className="fw-bold">
                  কোন কোর্স এর কত ফি ?
                </Accordion.Header>
                <Accordion.Body className="text-white">
                  কোর্স ফি সমূহ: <br />
                  1. কম্পিউটার অফিস অ্যাপ্লিকেশন (৩/৬ মাস) - ৩০০০/- <br />
                  2. গ্রাফিক ডিজাইন উইথ ফ্রিল্যান্সিং গাইড লাইন (৪ মাস) - ৬০০০/-{" "}
                  <br />
                  3. ‍অটোক্যাড ২ডি ও ৩ডি (৩/৬ মাস) - ৩০০০/- <br />
                  4. ডুয়েট প্রিপারেশন অ্যান্ড জব কোচিং - খুব শীঘ্রই শুরু হবে।{" "}
                  <br />
                  5. ওয়েব ডিজাইন এন্ড ডেভেলপমেন্ট (৪ মাস) - ৬০০০/- <br />
                  6. ডিজিটাল মার্কেটিং (৪ মাস) - ৬০০০/- <br />
                  7. মোবাইল অ্যাপ ডেভেলপমেন্ট - ৬০০০/- <br />
                  ৮. পলিটেকনিক কোচিং- ২৫০০/- <br />
                  ৯. স্পোকেন ইংলিশ - ১৫০০/- <br />
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                className="single-according-item mb-3"
                eventKey="2"
              >
                <Accordion.Header className="fw-bold">
                  আপনাদের কি কোন ফ্রী কোর্স চলছে ?
                </Accordion.Header>
                <Accordion.Body className="text-white">
                  স্বাধিনতার সুবর্ণ জয়ন্তী উপলক্ষ্যে বর্তমানে আমাদের SCDP
                  প্রজেক্টে এর আওতায় কম্পিউটার অফিস অ্যাপ্লিকেশন এবং গ্রাফিক
                  ডিজাইন কোর্স এ ফ্রী ট্রেনিং প্রদান করা হচ্ছে। এ সুযোগটি গ্রহন
                  করতে পারবেন আগামী ১৪ এপ্রিল ২০২২ পর্যন্ত।
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                className="single-according-item mb-3"
                eventKey="3"
              >
                <Accordion.Header className="fw-bold">
                  ফ্রি কোর্স এ কিভাবে ভর্তি হব ?
                </Accordion.Header>
                <Accordion.Body className="text-white">
                  ১ কপি ছবি ও ১ কপি এস এস সি এর মার্কশীট অথবা সনদপত্রের ফটোকপি
                  নিয়ে আমাদের অফিসে এসে ১০০ টাকা দিয়ে ফরম ফিলাপ করতে হবে। তারপর
                  আমরা আপনার ব্যাচ ও টাইম নির্ধারণ করব। এরপর ‍আপনাকে ৩২০ টাকা
                  প্রদান করে ভর্তি কনফার্ম করে ক্লাস করতে পারবেন। এছাড়া আর কোন
                  টাকা প্রদান করতে হবে না।
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                className="single-according-item mb-3"
                eventKey="4"
              >
                <Accordion.Header className="fw-bold">
                  আপনাদের ঠিকানা কোথায় ?
                </Accordion.Header>
                <Accordion.Body className="text-white">
                  আমাদের ঠিকানা: রাজশাহী পলিটেকনিক এর বিপরীতে, ২য় ও ৪র্থতলা,
                  সপুরা, রাজশাহী। অফিস সময়: সকাল ৮ টা হতে রাত ৮টা পর্যন্ত।
                  মোবাইল নং: 01719132276
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
