import { Outlet } from "react-router-dom";
import Header from "../pages/Header/Header";
import SideBar from "../pages/SideBar/SideBar";
import Footer from "../pages/Footer/Footer";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function MainLayout() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-[16rem_1fr] bg-light-background dark:bg-dark-background text-light-textPrimary dark:text-dark-textPrimary">

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col bg-light-surface dark:bg-dark-surface border-r border-light-border dark:border-dark-border h-screen sticky top-0">
        <SideBar />
      </aside>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-30 flex">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/40"
            onClick={() => setSidebarOpen(false)}
          ></div>

          {/* Sidebar */}
          <div className="relative w-64 bg-light-surface dark:bg-dark-surface shadow-lg transition-transform duration-300 transform translate-x-0">
            <div className="absolute top-4 right-4">
              <button
                onClick={() => setSidebarOpen(false)}
                className="p-2 rounded-md text-light-textPrimary dark:text-dark-textPrimary hover:bg-light-accentSoft dark:hover:bg-dark-accentSoft transition-colors"
              >
                <FaTimes />
              </button>
            </div>
            <SideBar />
          </div>
        </div>
      )}

      {/* Main content */}
      <div className="flex flex-col min-h-screen">
        {/* Header */}
        <header className="h-20 flex items-center px-6 bg-light-surface dark:bg-dark-surface border-b border-light-border dark:border-dark-border sticky top-0 z-20">
          {/* Hamburger button for mobile */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="md:hidden p-2 rounded-md text-light-textPrimary dark:text-dark-textPrimary hover:bg-light-accentSoft dark:hover:bg-dark-accentSoft transition-colors mr-4"
          >
            <FaBars />
          </button>

          <Header />
        </header>

        {/* Page content */}
        <main className="flex-1 p-6 overflow-y-auto bg-light-background dark:bg-dark-surface">
          <Outlet />
        </main>

        {/* Footer */}
        <footer className="h-12 flex items-center justify-center text-sm bg-light-surface dark:bg-dark-surface border-t border-light-border dark:border-dark-border text-light-textSecondary dark:text-dark-textSecondary sticky bottom-0">
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default MainLayout;
