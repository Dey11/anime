import React from "react";

const Footer = () => {
  return (
    <footer className="pb-5 pt-10 text-xs text-slate-500 md:text-sm">
      <hr className="border border-slate-800" />
      <div className="flex flex-row justify-between px-5 pt-4">
        <div className="">Anidey</div>
        <div>
          <ul className="flex gap-5">
            <li>Privacy policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
