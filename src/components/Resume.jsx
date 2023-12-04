import React from "react";
import Minimalist from "./templates/Minimalist";
import TwoColumn from "./templates/TwoColumn";
import ThreeColumn from "./templates/ThreeColumn";

const Resume = ({
  type,
  userData,
  empData,
  empCount,
  eduData,
  eduCount,
  projectData,
  projectCount,
  headerColor,
  headerTextColor,
}) => {
  return (
    <React.Fragment>
      {type === "minimalist" ? (
        <Minimalist
          user={userData}
          employment={empData}
          empCount={empCount}
          education={eduData}
          eduCount={eduCount}
          project={projectData}
          projectCount={projectCount}
          headerColor={headerColor}
          headerTextColor={headerTextColor}
        />
      ) :type === "Column" ?(
        <ThreeColumn
          user={userData}
          employment={empData}
          empCount={empCount}
          education={eduData}
          eduCount={eduCount}
          project={projectData}
          projectCount={projectCount}
          headerColor={headerColor}
          headerTextColor={headerTextColor}
        />
      ): (
        <TwoColumn
          user={userData}
          employment={empData}
          empCount={empCount}
          education={eduData}
          eduCount={eduCount}
          project={projectData}
          projectCount={projectCount}
          headerColor={headerColor}
          headerTextColor={headerTextColor}
        />
      )}
    </React.Fragment>
  );
};

export default Resume;
