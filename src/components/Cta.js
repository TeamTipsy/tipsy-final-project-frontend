
export default function Cta() {
    return (
        <div className="flex items-center justify-center h-screen">
      <ul>
        <li>
        <button
          type="button"
          className="inline-flex items-center content-center px-3 py-2 mb-4 text-sm font-medium leading-4 text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Top Rated Venues
        </button>
        </li>
        <li><button
          type="button"
          className="inline-flex items-center content-center px-3 py-2 mb-4 text-sm font-medium leading-4 text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Top Rated Users
        </button>
        </li>
        <li>
        <button
          type="button"
          className="inline-flex items-center content-center px-3 py-2 mb-4 text-sm font-medium leading-4 text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          + Venue
        </button>
        </li>
        
      </ul>
      </div>
    )
  }