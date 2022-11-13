import React from "react";
import { Accordion } from "react-bootstrap";
import aboutImage from "../../../Images/about-group-image.jpg";

const About = () => {
  return (
    <div>
      <div className="pb-2">
        <h1 className="text-white text-center fw-bold question-title py-4">
          আমাদের সম্পর্কে জানুন
        </h1>
        <div className="row">
          <div className="col-md-6">
            <img className="w-100 rounded-3" src={aboutImage} alt="" />
          </div>
          <div className="col-md-6">
            <p className="text-white" style={{ textAlign: "justify" }}>
              বরেন্দ্র আইটি ৪ এপ্রিল ২০১৭ তারিখে যাত্রা শুরু করে ৬ মাস মেয়াদী
              'অল বেসিক কম্পিউটার' কোর্সের মাধ্যমে।এরপর অটোক্যাড ২ ডি এন্ড ৩ডি,
              গ্রাফিক ডিজাইন কোর্স চালু করে। ২০১৮ থেকে ২০২০ সময়কালে স্কিল
              ডেভেলপমেন্ট প্রজেক্টের আওতায় কম্পিউটার অফিস অ্যাপ্লিকেশন ও গ্রাফিক
              ডিজাইন কোর্স এ ১০০০ জন কে প্রশিক্ষণ প্রদান করে প্রতিষ্ঠানটি। এরপর
              স্কিল এন্ড ক্যারিয়ার ডেভেলপমেন্ট প্রোগ্রাম এর আওতায় কম্পিউটার অফিস
              অ্যাপ্লিকেশন ও গ্রাফিক ডিজাইন উইথ ফ্রিল্যান্সিং গাইড লাইন কোর্সে
              ২০২১ থেকে ২০২২ পর্যন্ত ১০০০ জনের প্রশিক্ষণ এর কার্যক্রম গ্রহণ করে,
              যা সফলতার সাথে চলমান রয়েছে। গত ৪ বছরে মোট ৭ টি সেশনের মধ্যে ৬টি
              সেশনের প্রশিক্ষণ সমাপ্ত হয়েছে এবং জুলাই-ডিসেম্বর ২০২২ সেশনের
              প্রশিক্ষণ চলমান রয়েছে। বর্তমানে আমাদের দুইটি কম্পিউটার ল্যাব
              রয়েছে, যার একটিতে ১৮ জন ও অপরটিতে ১২ জন একই সময়ে প্রশিক্ষণ গ্রহণ
              করতে পারে। এছাড়াও আমাদের একটি সেমিনার কক্ষ রয়েছে যেখানে
              প্রশিক্ষণার্থীরা নিজ নিজ ল্যাপটপ নিয়ে বসে প্রশিক্ষণে অংশগ্রহণ করে।
              বর্তমানে আমাদের প্রতিষ্ঠানে ডিজিটাল মার্কেটিং, ওয়েব ডেভেলপমেন্ট,
              অটোক্যাড, স্পোকেন ইংলিশ সহ ইন্ডাষ্ট্রিয়াল এটাচমেন্ট প্রোগ্রাম
              চলমান রয়েছে, যার মধ্যে কিছু কোর্স অনলাইনেও চলমান। এছাড়াও রাজশাহীর
              নওহাটায় আমাদের আরেকটি শাখা রয়েছে। আমাদের সহযোগী প্রতিষ্ঠান হিসেবে
              নর্থ বেঙ্গল টেক ইন্ডাস্ট্রি এন্ড আইটি (২৩৩১৫) নামের কারিগরি
              শিক্ষাবোর্ড কর্তৃক অনুমোদিত একটি প্রতিষ্ঠান রয়েছে। এছাড়াও বরেন্দ্র
              প্রকাশনী নামের একটি প্রকাশনা প্রতিষ্ঠান আমাদের রয়েছে, যা বাংলাদেশ
              পুস্তক প্রকাশনা ও বিক্রয় সমিতি কর্তৃক নিবন্ধিত ।
            </p>
          </div>
        </div>
      </div>

      <div className="py-5">
        <h1 className="text-white text-center fw-bold question-title my-4">
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
