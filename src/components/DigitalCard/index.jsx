import React from 'react';
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Globe,
  Pinterest,
} from 'lucide-react';

const DigitalCard = ({
  name = 'Your Name',
  title = 'Your Title',
  company = 'Company Name',
  profileImage,
  companyLogo,
  companyWhiteLogo,
  socialLinks = []
}) => {
  return (
    <div className="w-[430px] mx-auto bg-white shadow-lg overflow-hidden relative">
      {/* Image container with mask */}
      <div
        className="relative h-[350px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${profileImage})`,
          WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)"
        }}
      />

      {/* Top curve separator */}
      <div className="relative h-24 -mt-12">
        <svg
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 440 131"
          preserveAspectRatio="none"
        >
          <path
            d="M441.394 130.862C441.394 130.862 424.655 76.4078 371.618 78.0152H78.0882C78.0882 78.0152 -0.39023 81.0731 0.0409704 0C3.09857 34.46 26.0698 56.9628 60.4482 59.1582C92.4354 61.1968 124.54 60.648 156.606 61.1184C227.989 62.2161 299.372 63.0002 370.716 64.4507C406.623 65.1956 426.772 76.5647 435.984 103.105C438.728 110.985 440.492 120.198 441.394 130.862Z"
            fill="#019766"
          />
        </svg>
      </div>

      {/* Content section with vertical line */}
      <div className="px-8 -mt-4">
        <div className="flex items-center">
          <div className="flex">
            {/* Vertical line - increased height further */}
            <div className="w-0.5 bg-gray-300 self-start h-32 mr-4"></div>
            {/* Name and titles */}
            <div>
              <h1 className="text-3xl font-bold text-gray-800">{name}</h1>
              <p className="text-xl text-gray-600">{title}</p>
              <p className="text-lg text-gray-500">{company}</p>
            </div>
          </div>
          <img
            src={companyLogo}
            alt={`${company} logo`}
            className="h-10 ml-auto pr-2"
          />
        </div>
      </div>

      <div className="px-8 py-8">
        <div className="grid grid-cols-4 gap-6">
          {socialLinks.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="flex flex-col items-center group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="p-4 rounded-full transition-colors duration-200"
                style={{ backgroundColor: '#019766' }}
              >
                {React.createElement(item.icon, {
                  className: "w-7 h-7 text-white"
                })}
              </div>
              <span className="mt-2 text-sm text-gray-500">{item.name}</span>
              <span className="text-[10px] text-gray-400 -mt-1">{item.type || 'work'}</span>
            </a>
          ))}
        </div>

        {/* Adjusted Save Contact button positioning */}
        <div className="mt-10 mb-16"> {/* Added margin bottom for spacing */}
          <button
            className="w-full py-3 rounded-full text-white text-lg font-medium transition-colors duration-200"
            style={{ backgroundColor: '#019766' }}
          >
            SAVE CONTACT
          </button>
        </div>
      </div>

      {/* Bottom curve section with company white logo */}
      <div className="absolute bottom-0 left-0 right-0 overflow-visible">
        <div className="relative">
          <svg
            width="100%"
            height="80"
            viewBox="0 0 440 80"
            preserveAspectRatio="none"
          >
            <path
              d="M0.23697 81.971C6.86177 41.6693 26.3442 31.2412 72.5218 30.3395C143.356 28.889 215.406 32.3389 286.24 31.2412C318.071 30.7316 349.94 31.2804 381.653 29.281C415.757 27.1248 438.571 14.7787 441.629 0.59314V81.971H1.09937H0.23697Z"
              fill="#019766"
            />
          </svg>

          {/* Adjusted company white logo positioning */}
          <div className="absolute inset-0 flex items-end justify-center pb-4">
            <img src={companyWhiteLogo} alt="Company Logo" className="h-7" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalCard;