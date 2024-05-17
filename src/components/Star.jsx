
const Star = ({ stars }) => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => {
        return (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 fill-current ${
              index < stars ? "text-yellow-500" : "text-gray-300"
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 2a1 1 0 0 1 .77.36l2.73 3.52 4.1.6a1 1 0 0 1 .55 1.7l-3.05 2.97.72 4.28a1 1 0 0 1-1.45 1.05L10 14.33l-3.78 1.98a1 1 0 0 1-1.45-1.05l.72-4.28-3.05-2.97a1 1 0 0 1 .55-1.7l4.1-.6 2.73-3.52A1 1 0 0 1 10 2z"
            />
          </svg>
        );
      })}
    </div>
    
  );
};

export default Star;
