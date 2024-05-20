import React from "react";

const Footer = () => {
  return (
    <div className="pb-5 pt-10 md:text-sm text-xs text-slate-500">
      <hr className="border border-slate-800" />
      <div className="flex flex-row justify-between pt-4 px-5">
        <div className="">Anidey</div>
        <div>
          <ul className="flex gap-5">
            <li>Privacy policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
