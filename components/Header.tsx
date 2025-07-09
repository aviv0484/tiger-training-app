
import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="flex items-center">
        <div className="text-red-600 text-3xl font-bold tracking-wider me-3">
          <span className="text-4xl">י</span>ותר
          <span className="text-4xl"> מ</span>חוג
        </div>
        <div className="w-12 h-12">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <path d="M 50,10 C 20,20 20,80 50,90 S 80,80 80,50 S 20,20 50,10" fill="none" stroke="red" strokeWidth="3"/>
                <path d="M 50,10 C 60,15 70,25 75,35" fill="none" stroke="red" strokeWidth="2"/>
                <circle cx="50" cy="50" r="10" fill="red"/>
                <circle cx="50" cy="50" r="5" fill="white"/>
            </svg>
        </div>
      </div>
      <h1 className="text-2xl font-bold text-gray-800">יומן למידה למדריך</h1>
    </header>
  );
};

export default Header;
