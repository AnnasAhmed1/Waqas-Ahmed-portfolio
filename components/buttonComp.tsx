import React, { JSXElementConstructor } from "react";
// interface ButtonProps {
//   text: string;
//   // Add more props here if needed
// }

const ButtonComp = ({
  text = "",
  transparent = false,
  center = false,
  color = "customPrimary",
  icon = <div />,
  onClick = (e?: any) => {},
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`
      ${
        !transparent
          ? `bg-${color} text-customLight  hover:bg-[#1baa80] hover:border-none hover:shadow-2xl `
          : `text-${color} border-2 border-customPrimary hover:bg-customPrimary  hover:text-customLight`
      }
      ${center ? "mx-auto" : null}
      text-base
      max-md:text-sm
      mx-auto
      flex
      justify-center
      items-center
      gap-1
      hover:gap-2
      transition-all ease-linear duration-[0.5s]
      py-[0.8rem]
      px-[2.6rem]
      max-md:py-[0.4rem]
      max-md:px-[1.3rem]
      rounded-[50rem]
      font-medium
      
      ${className}
    `}
    >
      {text}
      {icon}
    </button>
  );
};
// ButtonComp.defaultProps = {
//   text: "Default Text",
// };

export default ButtonComp;
