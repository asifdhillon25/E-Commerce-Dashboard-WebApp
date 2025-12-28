import React, { useContext } from "react";
import ThemeContext from "../../theme/ThemeContext";
import { FaBell, FaUserCircle } from "react-icons/fa";

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className="
        w-full flex items-center justify-between
        rounded-xl
        px-6 py-3
        bg-light-surface dark:bg-dark-surface
        border border-light-border dark:border-dark-border
        shadow-soft
        sticky top-0 z-20
      "
    >
      {/* Left side: Page Title or Breadcrumb */}
      <div className="flex items-center gap-4">
        <h2 className="text-lg font-semibold text-light-textPrimary dark:text-dark-textPrimary">
          Dashboard
        </h2>
        {/* Example breadcrumb */}
        <span className="text-sm text-light-textSecondary dark:text-dark-textSecondary">
          / Overview
        </span>
      </div>

      {/* Right side: Actions & Theme Toggle */}
      <div className="flex items-center gap-4">
        {/* Search bar */}
        <input
          type="text"
          placeholder="Search..."
          className="
            px-3 py-2
            rounded-lg
            border border-light-border dark:border-dark-border
            bg-light-surfaceMuted dark:bg-dark-surfaceMuted
            text-light-textPrimary dark:text-dark-textPrimary
            placeholder:text-light-textSecondary dark:placeholder:text-dark-textSecondary
            focus:outline-none focus:ring-2 focus:ring-primary
            transition-all duration-250
          "
        />

        {/* Notification Icon */}
        <button className="
          p-2 rounded-lg
          bg-light-surfaceMuted dark:bg-dark-surfaceMuted
          text-light-textPrimary dark:text-dark-textPrimary
          hover:bg-light-accentSoft dark:hover:bg-dark-accentSoft
          transition-colors duration-250
        " aria-label="Notifications">
          <FaBell className="text-lg" />
        </button>

        {/* User Avatar */}
        <button className="
          w-9 h-9 rounded-full
          bg-primary text-white
          flex items-center justify-center
          font-bold
          hover:scale-105
          transition-transform duration-250
        " aria-label="User profile">
          A
        </button>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="
            h-9 w-9 flex items-center justify-center
            rounded-lg
            bg-light-surfaceMuted dark:bg-dark-surfaceMuted
            border border-light-border dark:border-dark-border
            text-light-textPrimary dark:text-dark-textPrimary
            hover:bg-light-accentSoft dark:hover:bg-dark-accentSoft
            transition-colors duration-normal ease-smooth
          "
          aria-label="Toggle theme"
        >
          {theme === "dark" ? "🌙" : "☀️"}
        </button>
      </div>
    </div>
  );
}

export default Header;
