// components/layout/Header.tsx
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="flex justify-between items-center">
        <div className="font-bold text-2xl">Logo</div>
        <div className="space-x-4">
          <button>Sign In</button>
          <button>Sign Up</button>
        </div>
      </div>
      <div className="mt-4">
        <input type="text" placeholder="Search..." className="p-2 rounded" />
      </div>
    </header>
  );
};

export default Header;
