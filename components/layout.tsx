import React from "react";

const Layout = ({
  children,
  transparent = true,
  id
}: {
  children: any;
  transparent?: any;
  id?:string
}) => {
  return (
    <section
    id={id}
      className={`py-[72px] px-[60px] max-sm:py-[48px] max-sm:px-[28px] min-h-screen max-md:min-h-0
      flex flex-col justify-center
      ${!transparent ? "bg-[#f8f9fa]" : null}`}
    >
      {children}
    </section>
  );
};

export default Layout;
