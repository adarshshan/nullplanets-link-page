import React from "react";

interface LinkCardProps {
  href: string;
  icon: React.ComponentType<any>;
  label: string;
  platform: string;
  iconColor?: string;
}

const LinkCard: React.FC<LinkCardProps> = ({
  href,
  icon: Icon,
  label,
  platform,
  iconColor,
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center w-full p-4 mb-4 transition-all duration-300 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 hover:border-indigo-300 hover:shadow-lg"
    >
      <div
        className={`flex items-center justify-center w-12 h-12 mr-4 transition-colors duration-300 bg-gray-100 rounded-lg group-hover:bg-white`}
        style={{ color: iconColor }}
      >
        <Icon size={24} />
      </div>
      <div className="flex flex-col">
        <span className="text-sm font-medium text-gray-500">{platform}</span>
        <span className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
          {label}
        </span>
      </div>
      <div className="absolute right-4 opacity-0 transform translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
        <svg
          className="w-5 h-5 text-indigo-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </a>
  );
};

export default LinkCard;
