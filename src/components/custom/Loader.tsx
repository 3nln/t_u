
const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <svg
        className="animate-spin -ml-1 mr-3 h-24 w-24 text-gray-600"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          strokeWidth="4"
          fill="none"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v2a6 6 0 100 12v2a8 8 0 01-8-8z"
        />
      </svg>
    </div>
  )
}

export default Loader
