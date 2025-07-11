import React from "react";

function EventCard({ title, description }) {
  return (
    <div className=" rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 max-w-sm overflow-hidden relative mb-6">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 text-center">
      <div className="mb-4">
        <svg
          className="w-12 h-12 mx-auto text-white/80"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        </div>
      </div>
      <div className="bg-slate-800 p-6 text-white">
      <p className="text-sm text-white/70 mb-2">Prochain événement</p>
      <h3 className="text-lg font-bold mb-2">
        {title}
      </h3>
      <p className="text-white/80 text-sm">
        {description}
      </p>
      </div>
    </div>
  );
}

export default EventCard;
