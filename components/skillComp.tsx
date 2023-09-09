import React from "react";

const SkillComp = ({ title = "", percentage = "" }) => {
  return (
    <div>
      <h1 className="mb-2 font-medium max-md:text-sm w-full flex">
        {title}
        <span className="ml-auto block">{percentage}%</span>
      </h1>
      <div className="bg-[#e9ecef] w-full h-2 rounded-lg">
        <div
          style={{
            width: `${percentage}%`,
          }}
          className={`bg-customPrimary h-2 rounded-l-lg`}
        ></div>
      </div>
    </div>
  );
};

export default SkillComp;
