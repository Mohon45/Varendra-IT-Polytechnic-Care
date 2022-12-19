import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Review.css";

const Review = () => {
  return (
    <div className="my-5">
      <h1 className="fw-bold text-center text-white mb-4">
        শিক্ষার্থীদের ফিডব্যাক
      </h1>
      <Carousel
        className="row"
        autoPlay={true}
        stopOnHover={false}
        infiniteLoop={true}
        showThumbs={false}
        transitionTime={1000}
        showArrows={false}
        showStatus={false}
        // width="500px"
      >
        <div className="row">
          <div className="col-md-4">
            <div className="testimonial-item text-white">
              <p>
                <i className="fa-solid fa-quote-left quote"></i>&nbsp; I would
                like to say about Varendro IT that It's a great Institute for
                the learners who belongs the early stage on computer. The
                authority of the Institute and the trainers are very much
                friendly and intelligent.personally I enjoyed this journey to
                learn the course "office application " very much and caught some
                interesting memory. &nbsp;
                <i className="fa-solid fa-quote-right quote"></i>
              </p>
              <img src="https://i.ibb.co/6B3B7S3/avater-female.png" alt="" />
              <h3>Konika Pk</h3>
              <h4>COA Student</h4>
            </div>
          </div>
          <div className="col-md-4">
            <div className="testimonial-item text-white">
              <p>
                <i className="fa-solid fa-quote-left quote"></i>&nbsp; firstly i
                would like thanks mim vaia to give me a chance to join Varendra
                it family Thank you vaia....secondly hafsha apu and momin vaia
                thanks cause you two people thought me lots of thinks....My
                batchmates really love to being here thanks to you guys to give
                some excitant memories... I love all the time to join regular
                base class. &nbsp;
                <i className="fa-solid fa-quote-right quote"></i>
              </p>
              <img src="https://i.ibb.co/Nt1bMJL/rs-rohul.png" alt="" />
              <h3>Rs Rohul Saikat</h3>
              <h4>COA Student</h4>
            </div>
          </div>
          <div className="col-md-4">
            <div className="testimonial-item text-white">
              <p>
                <i className="fa-solid fa-quote-left quote"></i>&nbsp; Ai khane
                ase ami onek kisu sikhte parci.🤗🤗. Jara Notun computer use
                kora sikhte can ami tader k ai khane ase computer sekhar jnno
                recommend krci👈👈.. Ai khaner protira vaiya onek jotno shokare.
                Computer teach Koran &nbsp;
                <i className="fa-solid fa-quote-right quote"></i>{" "}
                <span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </p>
              <img src="https://i.ibb.co/4R7jhXY/shamiul.png" alt="" />
              <h3>Shamiul kobir</h3>
              <h4>Student</h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="testimonial-item text-white">
              <p>
                <i className="fa-solid fa-quote-left quote"></i>&nbsp; vrandro
                it hlo amr computer shekhr ak onnotomo maddom and
                onupryrona.jekhn thaky ami onk kisu skhikty prce,,,, vit ar
                maddomy olpo tkai onk vlo maner service payce,,,ja onno jaigar
                chay onk vlo,,,,,,vit ar proti ami kritoggo thakbo and ai
                protisthany je vaia apu asn tadr behave onk omaek onno,,tade
                protiw ami onk kritoggo &nbsp;
                <i className="fa-solid fa-quote-right quote"></i>
              </p>
              <img src="https://i.ibb.co/Z1RC5zk/avater-male.png" alt="" />
              <h3>Md. Harun</h3>
              <h4>Student</h4>
            </div>
          </div>
          <div className="col-md-4">
            <div className="testimonial-item text-white">
              <p>
                <i className="fa-solid fa-quote-left quote"></i>&nbsp; ফুল ক্লাস
                করছি! সত্যি ক্লাস করে ভালো লাগছে! ক্লাস করতে কখন ও বিরক্ত বোধ
                করিনি,সবার আচরণ ও অনেক ভালো! অনেক যত্নসহকারে এখানে ক্লাস করানো
                হয়। সমস্যার সমাধান করা হয় খুব দ্রুত ❤️ &nbsp;
                <i className="fa-solid fa-quote-right quote"></i>{" "}
                <span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </p>
              <img src="https://i.ibb.co/6B3B7S3/avater-female.png" alt="" />
              <h3>Umme Tasnim</h3>
              <h4>Student</h4>
            </div>
          </div>
          <div className="col-md-4">
            <div className="testimonial-item text-white">
              <p>
                <i className="fa-solid fa-quote-left quote"></i>&nbsp;
                আলহামদুলিল্লাহ ,,,অনেক ভালো লাগলো আপনাদের ক্লাস করে যেমন
                ভাবছিলাম তার থেকেও অনেক ভালভাবে ক্লাস করিয়েছেন আপনারা &nbsp;
                <i className="fa-solid fa-quote-right quote"></i>{" "}
                <span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </p>
              <img src="https://i.ibb.co/x27K0FG/jahidul.png" alt="" />
              <h3>Md. Jahidul Islam</h3>
              <h4>Student</h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="testimonial-item text-white">
              <p>
                <i className="fa-solid fa-quote-left quote"></i>&nbsp; বরেন্দ্র
                আইটি কম্পিউটার শিক্ষার জন্য একটি আদর্শ প্রতিষ্ঠান। এখানকার
                ক্লাসগুলো খুবই মানসম্মত। এখান থেকে অনেক কিছু শিখেছি। মমিন ভাইয়ার
                ক্লাস গুলো অনেক মিস করবো।। &nbsp;
                <i className="fa-solid fa-quote-right quote"></i>{" "}
                <span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </p>
              <img src="https://i.ibb.co/1fyXdSg/toufiq.png" alt="" />
              <h3>Md. Toufikul Islam</h3>
              <h4>Student</h4>
            </div>
          </div>
          <div className="col-md-4">
            <div className="testimonial-item text-white">
              <p>
                <i className="fa-solid fa-quote-left quote"></i>&nbsp; আসসালামু
                আলাইকুম আমি একজন বরেন্দ্র আই টি এর ছাত্র। আমি মনে করি
                শিক্ষার্থীদের জন্য ভালো একটি প্রতিষ্ঠান বরেন্দ্র আই টি। কারণ
                এখানে ট্রেনিং এর বিষয় গুলো খুব ভালো ভাবে তুলে ধরেছেন। আমি
                বরেন্দ্র টি এর সকল শিক্ষকদের প্রতি কৃতজ্ঞগতা প্রকাশ করছি যে এত
                সুন্দর করে শিখানোর জন্য। &nbsp;
                <i className="fa-solid fa-quote-right quote"></i>{" "}
                <span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </p>
              <img src="https://i.ibb.co/Z1RC5zk/avater-male.png" alt="" />
              <h3>Jafor Ali</h3>
              <h4>Student</h4>
            </div>
          </div>
          <div className="col-md-4">
            <div className="testimonial-item text-white">
              <p>
                <i className="fa-solid fa-quote-left quote"></i>&nbsp; বরেন্দ্র
                আইটিতে অফিস অ্যপলিকেশনের উপর আমি কোস্ করেছি.... তাদের শিখানর
                পদ্ধতি এবং ভাইয়া আপুদের ব্যবহার আমার অনেক ভাল লেগেছে এবং আমাকে
                অনেক মুগ্ধ করেছে &nbsp;
                <i className="fa-solid fa-quote-right quote"></i>{" "}
                <span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </p>
              <img src="https://i.ibb.co/Z1RC5zk/avater-male.png" alt="" />
              <h3>Nehal Mustakim</h3>
              <h4>Student</h4>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Review;
