import React from "react";
import "./Result.css";

const Result = () => {
  return (
    <div className=" result">
      <div className="container">
        <h1 className="text-center py-5">
          আপনাদের রেজাল্ট দেখতে নিচের ফাইল টি ডাউনলোড করুন।
        </h1>
        <div>
          <table className="table table-bordered text-white">
            <thead>
              <tr>
                <th className="text-center">Date</th>
                <th className="text-center">Name</th>
                <th className="text-center">Download Button</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="text-center">26.09.2022</th>
                <td className="pt-2">
                  SCDP JAN-JUN 2022 all Batch Result Sheet
                </td>
                <td className="text-center">
                  <button className="btn btn-primary">
                    <a
                      className="download-btn-link"
                      href="/SCDP Jan-June 2022 Result.pdf"
                      download
                    >
                      Download
                    </a>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Result;
