import React from "react";
import { Container } from "react-bootstrap";

const Confirm = () => {
  return (
    <div className="bg-color text-white">
      <Container>
        <div className="py-5">
          <p style={{ fontSize: "1.3rem", textAlign: "justify" }}>
            যে কোনো প্রয়োজনে যোগাযোগ করতে সরাসরি আমাদের অফিস ভিজিট করতে পারেন।
            তাছাড়া ০১৭৯৭৩৩৬৬০৪ নম্বরে কল করে জেনে নিতে পারেন ট্রেইনিং সংক্রান্ত
            যেকোনো তথ্য। এছাড়াও উল্লেখিত মেইলে কিংবা ফেসবুক ম্যাসেঞ্জারেও নক
            দিতে পারেন।
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Confirm;
