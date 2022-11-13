import React from "react";
import { Container } from "react-bootstrap";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Contact = () => {
  const defaultProps = {
    center: {
      lat: 24.37914369879049,
      lng: 88.60630810260774,
    },
    zoom: 14,
  };

  return (
    <div className="bg-color">
      <Container className="text-white">
        <div className="py-4">
          <p style={{ fontSize: "1.3rem", textAlign: "justify" }}>
            যে কোনো প্রয়োজনে যোগাযোগ করতে সরাসরি আমাদের অফিস ভিজিট করতে পারেন।
            তাছাড়া ০১৭৯৭৩৩৬৬০৪ নম্বরে কল করে জেনে নিতে পারেন ট্রেইনিং সংক্রান্ত
            যেকোনো তথ্য। এছাড়াও উল্লেখিত মেইলে কিংবা ফেসবুক ম্যাসেঞ্জারেও নক
            দিতে পারেন।
          </p>
          <div className="row py-3">
            <div className="col-md-6 mt-5">
              <div style={{ height: "15rem", width: "100%" }}>
                <GoogleMapReact
                  bootstrapURLKeys={{ key: "" }}
                  defaultCenter={defaultProps.center}
                  defaultZoom={defaultProps.zoom}
                >
                  <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text="My Marker"
                  />
                </GoogleMapReact>
              </div>
            </div>
            <div className="col-md-6 ">
              <div className="my-4">
                <h3 className="fw-bold">হেড অফিস</h3>
                <p>বিউটি প্লাজা ২য় ও ৪র্থ তলা সপুরা, বোয়ালিয়া, রাজশাহী</p>
                <p>মোবাইল নং ঃ 01797336604</p>
              </div>
              <div className="my-4">
                <h3 className="fw-bold">নওহাটা ব্রাঞ্চ</h3>
                <p>মোবাইল নং ঃ 01718820744</p>
              </div>
              <div style={{ lineHeight: "10px" }}>
                <h3 className="fw-bold">অফিস ভিজিটের সময়</h3>
                <p className="mt-3">শনিবার - বৃহস্পতিবার</p>
                <p>সকাল ৮ টা থেকে রাত ৭ টা</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
