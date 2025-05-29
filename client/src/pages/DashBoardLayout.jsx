import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useAuth } from '../Auth/AuthContext';

const DashboardLayout = () => {
  const { signOut } = useAuth();

  return (
    <div className="min-h-screen flex">
      <aside className="w-64 bg-gray-800 text-white">
        <div className="p-4 text-xl font-bold">Dashboard</div>
        <nav className="mt-4">
          <Link to="/dashboard" className="block px-4 py-2 hover:bg-gray-700">Home</Link>
          {/* Add more dashboard links here */}
          <button
            onClick={signOut}
            className="w-full text-left px-4 py-2 hover:bg-gray-700"
          >
            Sign Out
          </button>
        </nav>
      </aside>
      <main className="flex-1 bg-gray-100 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
