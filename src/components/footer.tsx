import React from "react";

const Footer = () => {
  return (
    <div className="pb-5 text-sm text-slate-300">
      <hr className="border border-slate-500" />
      <div className="flex flex-row justify-between items-center pt-4 px-5">
        <div className="">© 2024 AniDay. All Rights Reserved.</div>
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
