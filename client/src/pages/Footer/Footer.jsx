import React from "react";

function Footer() {
  return (
    <div
      className="
        w-full flex justify-center items-center
        rounded-xl
        px-4 py-2
        bg-light-surface
        dark:bg-dark-surface
        text-sm text-light-textSecondary
        dark:text-dark-textSecondary
        border-t border-light-border
        dark:border-dark-border
        shadow-soft
      "
    >
      © 2025 Your App
    </div>
  );
}

export default Footer;
