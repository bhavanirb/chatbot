import React from "react";
import "./info.css";

export default function Info(props) {
  const { className } = props;
  return (
    <div className="mt-24 ml-10">
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-6 text-white">
          PESITM Chatbot - College Info 
        </h1>

        <div className="text-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold font-bol mb-4">About PESITM Shivamogga </h2>
          <p>
            Prerana Education Society's Institute of Technology, Management,
            PESITM is a prestigious institution located in Shivamogga. PESITM
            offers a wide range of programs in various disciplines, including
            engineering, management, and research.
          </p>
        </div>

        <div className="text-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">
            Chatbot Features &#128172;
          </h2>
          <ul className="list-disc list-inside">
            <li>Instant answers to basic program queries &#128161;</li>
            <li>Customizable responses tailored to PESITM requirements &#128187;</li>
            <li>User-friendly interface for easy interaction &#128526;</li>
            <li>Natural Language Processing for better understanding &#128161;</li>
          </ul>
        </div>

        <div className="text-white py-4 text-center mt-6">
          <p>
            &#169; {new Date().getFullYear()} Prerana  Education Society's Institute
            of Technology, Management,&#E74C3C;
          </p>
        </div>
      </div>
    </div>
  );
}
