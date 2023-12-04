import React from "react";
import logo from "../components/templates/img/logo.png"
import { Link } from "react-router-dom";

const Nav = ({ showDownloadBtn }) => {
  return (
    <div className="flex  items-center justify-between bg-slate-900 mx-auto px-4 py-0 print:hidden">
      <a href="/">
        <img className="w-16 logo"  src={logo} alt="tech-resume-logo" />
      </a>
      <div className="flex gap-4 items-center">
        <Link to="/view-template"
          className="z-10 rounded bg-blue-500 text-white m-2 p-2 text-center print:hidden">
          View Template
        </Link>
      {showDownloadBtn ? (
        <button
          className="z-10 rounded bg-blue-500 text-white m-2 p-2 text-center print:hidden"
          onClick={(e) => {
            e.preventDefault();
            window.print();
          }}
        >
          <svg
            className="w-5 inline-block"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>{" "}
          Download PDF
        </button>
      ) : (
        ""
      )}
    </div>
      </div>
  );
};

export default Nav;
