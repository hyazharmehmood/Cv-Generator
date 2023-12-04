import React from "react";

const Minimalist = (props) => {
  return (
    <div
      style={{
        boxSizing: "border-box",
        margin: "0 auto",
        width: "8.5in",
        height: "11in",
        backgroundColor: "#fff",
        boxShadow: "0 3px 8px -3px rgba(0, 0, 0, 0.7)",
      }}
    >
        <header style={{backgroundColor: `${props.headerColor}`, color: `${props.headerTextColor}`}} className="flex gap-10 items-center font-sans w-full h-1/6">
          <div className="flex flex-col  w-[46rem] px-2">
            <div className="text-2xl">{props.user.name}</div>
            <div className="text-lg pt-3">{props.user.wantedJobTitle}</div>
          </div>
          <div className="flex flex-col w-[40rem]  px-5">
            <div className="text-md">
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
                  strokeWidth={1}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>{" "}
              {props.user.phone}
            </div>
            <div className="text-md pt-3">
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
                  strokeWidth={1}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>{" "}
              {props.user.email}
            </div>
            <div className="text-md pt-3">
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
                  strokeWidth={1}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>{" "}
              {props.user.location}
            </div>
          </div>
        </header>
        <section className="flex flex-col font-sans text-white w-full mb-5 pl-2 pr-5">
          <div className="text-md text-gray-800 pt-3 border-b border-gray-dark tracking-widest">
            SUMMARY
          </div>
          {!props.user.summary || 0 === props.user.summary.length ? "" : <div className="text-sm pt-3 text-black">
                {props.user.summary}
              </div>}
        </section>
        <section className="flex flex-col font-sans text-white w-full mb-5 pl-2 pr-5">
          <div className="text-md text-gray-800 border-b pb-2 border-gray-dark tracking-widest">SKILLS</div>
          <div>
            {props.user.skills == null
              ? ""
              : props.user.skills
                  .split(",")
                  .map((skill) => (
                    <div className="inline-block px-1 mt-3 mx-1  text-sm text-gray-600" key={skill}>
                      {skill}
                    </div>
                  ))}
          </div>
        </section>
        <section className="flex flex-col font-sans text-white w-full mb-5 pl-2 pr-5">
          <div className="text-md text-gray-800 border-b border-gray-dark tracking-widest">
            PROFESSIONAL EXPERIENCE
          </div>
          {[...Array(props.empCount)].map((e, i) => (
            <div className="flex flex-col" key={`emp${i}`}>
              <div className="flex justify-between">
                <div className="text-sm pt-3 text-gray-800">
                  <li>{props.employment.jobTitles[`jobTitle${i + 1}`]}</li>
                </div>
                <div>
                  <div className="inline-block text-sm pt-3 text-gray-800">
                    {props.employment.jobStartDate[`jobStartDate${i + 1}`]}{" "}
                    -
                  </div>
                  <div className="inline-block text-sm pt-3 pl-3 text-gray-800">
                    {props.employment.jobEndDate[`jobEndDate${i + 1}`] ===
                    undefined
                      ? "Present"
                      : props.employment.jobEndDate[`jobEndDate${i + 1}`]}
                  </div>
                </div>
              </div>
              <div className="text-sm pt-3 text-gray-800">
                {props.employment.emp[`emp${i + 1}`]}
              </div>
              <div className="text-sm pt-3 text-gray-800">
                {props.employment.jobDesc[`jobDesc${i + 1}`]}
              </div>
            </div>
          ))}
        </section>
        <section className="flex flex-col font-sans text-white w-full mb-5 pl-2 pr-5">
          <div className="text-md text-gray-800 border-b border-gray-dark tracking-widest">
            PROJECTS
          </div>
          {[...Array(props.projectCount)].map((e, i) => (
            <div className="flex flex-col" key={`emp${i}`}>
              <div className="flex justify-between">
                <div className="text-sm pt-3 text-gray-800">
                  <li>
                    {props.project.projectTitles[`projectTitle${i + 1}`]}
                  </li>
                </div>
                <div>
                  <div className="inline-block text-sm pt-3 text-gray-800">
                    {
                      props.project.projectStartDate[
                        `projectStartDate${i + 1}`
                      ]
                    }{" "}
                    -
                  </div>
                  <div className="inline-block text-sm pt-3 pl-3 text-gray-800">
                    {props.project.projectEndDate[
                      `projectEndDate${i + 1}`
                    ] === undefined
                      ? "Present"
                      : props.project.projectEndDate[
                          `projectEndDate${i + 1}`
                        ]}
                  </div>
                </div>
              </div>
              <div className="text-sm pt-3 text-gray-800">
                {props.project.projectDesc[`projectDesc${i + 1}`]}
              </div>
            </div>
          ))}
        </section>
        <section className="flex flex-col font-sans text-white w-full mb-5 pl-2 pr-5">
          <div className="text-md text-gray-800 border-b pb-2 border-gray-dark tracking-widest">
            EDUCATION
          </div>
          {[...Array(props.eduCount)].map((e, i) => (
            <div className="flex flex-col" key={`emp${i}`}>
              <div className="flex justify-between">
                <div className="text-sm pt-3 text-gray-800">
                  <li>{props.education.qual[`qual${i + 1}`]}</li>
                </div>
                <div>
                  <div className="inline-block text-sm pt-3 text-gray-800">
                    {props.education.eduStartDate[`eduStartDate${i + 1}`]}{" "}
                    -
                  </div>
                  <div className="inline-block text-sm pt-3 pl-3 text-gray-800">
                    {props.education.eduEndDate[`eduEndDate${i + 1}`] ===
                    undefined
                      ? "Present"
                      : props.education.eduEndDate[`eduEndDate${i + 1}`]}
                  </div>
                </div>
              </div>
              <div className="text-sm pt-3 text-gray-800">
                {props.education.edu[`educ${i + 1}`]}
              </div>
              <div className="text-sm pt-3 text-gray-800">
                {props.education.eduDesc[`eduDesc${i + 1}`]}
              </div>
            </div>
          ))}
        </section>
    </div>
  );
};

export default Minimalist;
