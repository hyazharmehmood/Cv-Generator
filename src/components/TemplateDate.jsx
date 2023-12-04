import React, { useState } from "react";

import Resume from "./Resume";
import Nav from "./Nav";

const TemplateData = () => {
  const [data, setData] = useState({});
  const [type, setType] = useState("two-column");
  const [headerColor, setHeaderColor] = useState("#7F1D1D");
  const [headerTextColor, setHeaderTextColor] = useState("#ffffff");
  const [empTemplate, setEmpTemplate] = useState([]);
  const [eduTemplate, setEduTemplate] = useState([]);
  const [projectTemplate, setProjectTemplate] = useState([]);
  const [empCount, setEmpCount] = useState(0);
  const [eduCount, setEduCount] = useState(0);
  const [projectCount, setProjectCount] = useState(0);
  const [employment, setEmployment] = useState({
    jobTitles: {},
    emp: {},
    jobDesc: {},
    jobStartDate: {},
    jobEndDate: {},
  });
  const [education, setEducation] = useState({
    qual: {},
    edu: {},
    eduDesc: {},
    eduStartDate: {},
    eduEndDate: {},
  });
  const [project, setProject] = useState({
    projectTitles: {},
    projectDesc: {},
    projectStartDate: {},
    projectEndDate: {},
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    // Create copies of the state to avoid directly mutating state
    let updatedData = { ...data };
    let updatedEmployment = { ...employment };
    let updatedEducation = { ...education };
    let updatedProject = { ...project };
  
    if (name === "templates") {
      setType(value);
      const newHeaderColor = value === "minimalist" ? "#F3F4F6" : "#7F1D1D";
      const newHeaderTextColor = value === "minimalist" ? "#1F2937" : "#ffffff";
      setHeaderColor(newHeaderColor);
      setHeaderTextColor(newHeaderTextColor);
    } else if (name === "headerColor") {
      setHeaderColor(value);
    } else if (name === "headerTextColor") {
      setHeaderTextColor(value);
    } else if (name.includes("jobTitle")) {
      updatedEmployment.jobTitles[name] = value;
    } else if (name.includes("emp")) {
      updatedEmployment.emp[name] = value;
    } else if (name.includes("jobDesc")) {
      updatedEmployment.jobDesc[name] = value;
    } else if (name.includes("jobStartDate")) {
      updatedEmployment.jobStartDate[name] = value;
    } else if (name.includes("jobEndDate")) {
      updatedEmployment.jobEndDate[name] = value;
    } else if (name.includes("qual")) {
      updatedEducation.qual[name] = value;
    } else if (name.includes("educ")) {
      updatedEducation.edu[name] = value;
    } else if (name.includes("eduDesc")) {
      updatedEducation.eduDesc[name] = value;
    } else if (name.includes("eduStartDate")) {
      updatedEducation.eduStartDate[name] = value;
    } else if (name.includes("eduEndDate")) {
      updatedEducation.eduEndDate[name] = value;
    } else if (name.includes("projectTitle")) {
      updatedProject.projectTitles[name] = value;
    } else if (name.includes("projectDesc")) {
      updatedProject.projectDesc[name] = value;
    } else if (name.includes("projectStartDate")) {
      updatedProject.projectStartDate[name] = value;
    } else if (name.includes("projectEndDate")) {
      updatedProject.projectEndDate[name] = value;
    } else {
      updatedData[name] = value;
    }
  
    // Update the state
    setData(updatedData);
    setEmployment(updatedEmployment);
    setEducation(updatedEducation);
    setProject(updatedProject);
    console.log(data);
    console.log(education);
  };
  
  const handleEmpClick = (e) => {
    e.preventDefault();
    const i = empCount + 1;
    setEmpCount(i);

    const handleEmpDelete = (index) => {
      const updatedEmpTemplate = empTemplate.filter((_, i) => i !== index - 1);
      setEmpTemplate(updatedEmpTemplate);
      setEmpCount((count) => count - 1);
    }; 

    const template = (
      <div className="w-4/5 m-2" key={`empKey${i}`}>
      <button
        className="w-4/5 rounded bg-red-400 text-white m-2 p-2 text-center"
        onClick={() => handleEmpDelete(i)}
      >
        Delete Employment
      </button>
      
    
        <div className="p-2 m-2" key={`empKey${i}`}>
        <div className="w-full flex-col justify-center items-center">
          <label className="p-2" htmlFor="startDate1">
            Start
          </label>
          <input
            className="w-full pl-0.5 m-2 rounded"
            type="month"
            id={`jobStartDate${i}`}
            name={`jobStartDate${i}`}
            onChange={handleChange}
          />
          <label className="p-2" htmlFor="endDate1">
            End
          </label>
          <input
            className="w-full pl-0.5 m-2 rounded"
            type="month"
            id={`jobEndDate${i}`}
            name={`jobEndDate${i}`}
            onChange={handleChange}
          />
        </div>
        <input
          className="w-full p-2 m-2 rounded"
          type="text"
          id={`jobTitle${i}`}
          name={`jobTitle${i}`}
          placeholder="Job Title"
          onChange={handleChange}
        />
        <input
          className="w-full p-2 m-2 rounded"
          type="text"
          id={`emp${i}`}
          name={`emp${i}`}
          placeholder="Employer"
          onChange={handleChange}
        />
        <textarea
          className="w-full p-2 m-2 rounded"
          name={`jobDesc${i}`}
          placeholder="Description"
          rows="5"
          cols="15"
          onChange={handleChange}
        />
      </div>
      </div>
    );

    setEmpTemplate([...empTemplate, template]);
  };

  const handleProjectClick = (e) => {
    e.preventDefault();
    const i = projectCount + 1;
    setProjectCount(i);

    const handleProjectDelete = (index) => {
      const updatedProjectTemplate = projectTemplate.filter((_, i) => i !== index - 1);
      setProjectTemplate(updatedProjectTemplate);
      setProjectCount((count) => count - 1);
    };
    
    const template = (
      <div className="w-4/5 m-2" key={`projKey${i}`}>
      <button
        className="w-4/5 rounded bg-red-400 text-white m-2 p-2 text-center"
        onClick={() => handleProjectDelete(i)}
      >
        Delete Project
      </button>
      
        <div className="p-2 m-2" key={`projKey${i}`}>
        <div className="w-full flex-col justify-center items-center">
          <label className="p-2" htmlFor="startDate1">
            Start
          </label>
          <input
            className="w-full pl-0.5 m-2 rounded"
            type="month"
            id={`projectStartDate${i}`}
            name={`projectStartDate${i}`}
            onChange={handleChange}
          />
          <label className="p-2" htmlFor="endDate1">
            End
          </label>
          <input
            className="w-full pl-0.5 m-2 rounded"
            type="month"
            id={`projectEndDate${i}`}
            name={`projectEndDate${i}`}
            onChange={handleChange}
          />
        </div>
        <input
          className="w-full p-2 m-2 rounded"
          type="text"
          id={`projectTitle${i}`}
          name={`projectTitle${i}`}
          placeholder="Project Title"
          onChange={handleChange}
        />
        <textarea
          className="w-full p-2 m-2 rounded"
          name={`projectDesc${i}`}
          placeholder="Description"
          rows="5"
          cols="15"
          onChange={handleChange}
        />
      </div>
      </div>
    );

    setProjectTemplate([...projectTemplate, template]);
  };

  const handleEduClick = (e) => {
    e.preventDefault();
    const i = eduCount + 1;
    setEduCount(i);

    const handleEduDelete = (index) => {
      const updatedEduTemplate = eduTemplate.filter((_, i) => i !== index - 1);
      setEduTemplate(updatedEduTemplate);
      setEduCount((count) => count - 1);
    };
    
    const template = (
      <div className=" w-5/6  m-2" key={`eduKey${i}`}>
      <button
        className="w-4/5 rounded bg-red-400 text-white m-2 p-2 text-center"
        onClick={() => handleEduDelete(i)}
      >
        Delete Education
      </button>
     
        <div className="  p-2 m-2" key={`eduKey${i}`}>
        <div className="w-full flex-col justify-center items-center">
          <label className="p-2" htmlFor="startDate1">
            Start
          </label>
          <input
            className="w-full pl-0.5 m-2 rounded"
            type="month"
            id={`eduStartDate${i}`}
            name={`eduStartDate${i}`}
            onChange={handleChange}
          />
          <label className="p-2" htmlFor="endDate1">
            End
          </label>
          <input
            className="w-full pl-0.5 m-2 rounded"
            type="month"
            id={`eduEndDate${i}`}
            name={`eduEndDate${i}`}
            onChange={handleChange}
          />
        </div>
        <input
          className="w-full p-2 m-2 rounded"
          type="text"
          id={`qual${i}`}
          name={`qual${i}`}
          placeholder="Qualification"
          onChange={handleChange}
        />
        <input
          className="w-full p-2 m-2 rounded"
          type="text"
          id={`educ${i}`}
          name={`educ${i}`}
          placeholder="School/College"
          onChange={handleChange}
        />
        <textarea
          className="w-full p-2 m-2 rounded"
          name={`eduDesc${i}`}
          placeholder="Description"
          rows="5"
          cols="15"
          onChange={handleChange}
        />
      </div>
      </div>
    );

    setEduTemplate([...eduTemplate, template]);
  };

  return (
    <div className="w-full mx-auto h-full bg-gray-100 text-gray-900 font-sans">
        <div className="flex p-3 print:p-0">
          <form className="w-2/5 flex flex-col justify-evenly print:hidden">
            <h3 className="w-4/5 m-2 text-xl">Template Type</h3>
            <select
              className="w-4/5 p-2 m-2 rounded"
              name="templates"
              id="templates"
              onChange={handleChange}
              value={type}
            >
              <option value="two-column">Two-Column</option>
              <option value="minimalist">Minimalist</option>
              <option value="Column">Column</option>
            </select>
            <div className="w-4/5">
              <label className="m-2 text-xl block" htmlFor="header">
                Header Color
              </label>
              <input
                className="mx-2 border-2 border-white rounded"
                type="color"
                id="headerColor"
                name="headerColor"
                onChange={handleChange}
                value={headerColor}
              />
            </div>
            <div className="w-4/5">
              <label className="m-2 text-xl block" htmlFor="header">
                Header-Text Color
              </label>
              <input
                className="mx-2 border-2 border-white rounded"
                type="color"
                id="headerTextColor"
                name="headerTextColor"
                onChange={handleChange}
                value={headerTextColor}
              />
            </div>
            <h3 className="w-4/5 m-2 text-xl">Personal Details</h3>
            <input
              className="w-4/5 p-2 m-2 rounded"
              type="text"
              id="name"
              name="name"
              value={data.name}
              onChange={handleChange}
              placeholder="Name"
            />
            <input
              className="w-4/5 p-2 m-2 rounded"
              type="email"
              id="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              placeholder="E-mail ID"
            />
            <input
              className="w-4/5 p-2 m-2 rounded"
              type="tel"
              id="phone"
              name="phone"
              value={data.phone}
              onChange={handleChange}
              placeholder="Phone"
            />
            <input
              className="w-4/5 p-2 m-2 rounded"
              type="text"
              id="location"
              name="location"
              value={data.location}
              onChange={handleChange}
              placeholder="City, Country"
            />
            <h3 className="w-4/5 m-2 text-xl">Professional Details</h3>
            <input
              className="w-4/5 p-2 m-2 rounded"
              type="text"
              id="wantedJobTitle"
              name="wantedJobTitle"
              value={data.wantedJobTitle}
              onChange={handleChange}
              placeholder="Wanted Job Title"
            />
            <textarea
              className="w-4/5 p-2 m-2 rounded"
              name="summary"
              placeholder="Professional Summary"
              rows="5"
              cols="15"
              value={data.summary}
              onChange={handleChange}
            />
            <input
              className="w-4/5 p-2 m-2 rounded"
              type="text"
              id="skills"
              name="skills"
              value={data.skills}
              onChange={handleChange}
              placeholder="Skills"
            />
            <button
              className="w-4/5 rounded bg-blue-400 text-white m-2 p-2 text-center"
              onClick={handleEmpClick}
            >
              Add Employment
            </button>
            {empTemplate.map((el) => el)}
            <button
              className="w-4/5 rounded bg-blue-400 text-white m-2 p-2 text-center"
              onClick={handleProjectClick}
            >
              Add Project
            </button>
            {projectTemplate.map((el) => el)}
            <h3 className="w-4/5  m-2 text-xl">Educational Background</h3>
            <button
              className="w-4/5 rounded bg-blue-400 text-white m-2 p-2 text-center"
              onClick={handleEduClick}
            >
              Add Education
            </button>
            {eduTemplate.map((el) => el)}
          </form>
          <Resume
            userData={data}
            empData={employment}
            empCount={empCount}
            eduData={education}
            eduCount={eduCount}
            projectData={project}
            projectCount={projectCount}
            type={type}
            headerColor={headerColor}
            headerTextColor={headerTextColor}
          />
        </div>
      </div>
  );
};

export default TemplateData;