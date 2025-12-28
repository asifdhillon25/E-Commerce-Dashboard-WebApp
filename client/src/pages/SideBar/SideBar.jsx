import React from "react";
import { FaHome, FaChartLine, FaBoxOpen, FaUsers, FaCog, FaShoppingCart } from "react-icons/fa";

function SideBar() {
  const navLinks = [
    { name: "Dashboard", icon: <FaHome /> },
    { name: "Sales", icon: <FaChartLine /> },
    { name: "Products", icon: <FaBoxOpen /> },
    { name: "Orders", icon: <FaShoppingCart /> },
    { name: "Customers", icon: <FaUsers /> },
  ];

  const settingsLink = { name: "Settings", icon: <FaCog /> };

  return (
    <div className="flex flex-col h-full bg-light-surface dark:bg-dark-surface border-r border-light-border dark:border-dark-border">

     {/* Sidebar Header / User Info */}
<div className="h-24 flex flex-col justify-center px-6">
  <div className="flex items-center space-x-3 bg-light-surfaceMuted dark:bg-dark-surfaceMuted p-3 rounded-xl shadow-soft">
    
    {/* User Avatar */}
    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg
                    shadow-lg ring-2 ring-primaryHover">
      A
    </div>

    {/* User Name / Role */}
    <div className="flex flex-col">
      <span className="font-semibold text-light-textPrimary dark:text-dark-textPrimary">Asif Dhillon</span>
      <span className="text-xs text-light-textSecondary dark:text-dark-textSecondary">Admin Panel</span>
    </div>
  </div>
</div>


      {/* Navigation Links */}
      <div className="flex-1 px-4 py-4">
        <div className="flex flex-col space-y-3">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="
                flex items-center space-x-3
                px-4 py-3
                rounded-xl
                shadow-soft
                cursor-pointer
                transition-colors duration-250
                bg-light-surfaceMuted dark:bg-dark-surfaceMuted
                text-light-textPrimary dark:text-dark-textPrimary
                hover:bg-light-primaryHover dark:hover:bg-dark-primaryHover
                hover:text-light-textPrimary dark:hover:text-dark-textPrimary
              "
            >
              <span className="text-lg">{link.icon}</span>
              <span className="font-medium">{link.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar Footer / Settings */}
      <div className="px-4 pb-4">
        {/* Settings Link */}
        <div
          className="
            flex items-center space-x-3
            px-4 py-3
            rounded-xl
            shadow-soft
            cursor-pointer
            transition-colors duration-250
            bg-light-surfaceMuted dark:bg-dark-surfaceMuted
            text-light-textPrimary dark:text-dark-textPrimary
            hover:bg-light-primaryHover dark:hover:bg-dark-primaryHover
            hover:text-light-textPrimary dark:hover:text-dark-textPrimary
            mb-3
          "
        >
          <span className="text-lg">{settingsLink.icon}</span>
          <span className="font-medium">{settingsLink.name}</span>
        </div>

        {/* Footer Info */}
        <div className="w-full rounded-xl bg-light-surfaceMuted dark:bg-dark-surfaceMuted px-4 py-3 text-center text-sm text-light-textSecondary dark:text-dark-textSecondary shadow-soft">
          © 2025 Admin Dashboard
        </div>
      </div>
    </div>
  );
}

export default SideBar;
