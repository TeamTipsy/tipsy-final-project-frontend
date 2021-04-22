
export default function Cta() {
    return (
      <div className="flex items-center justify-center h-screen">
      <ul>
        <li>
        <button
          type="text-center justify-center pt-12"
          className="inline-flex items-center content-center justify-center px-3 py-2 pb-8 mb-4 text-lg font-medium leading-4 text-center text-white border border-transparent rounded-md shadow-sm w-80 bg-brand-dark-blue hover:bg-brand-yellow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Top Rated Venues
        </button>
        </li>
        <li><button
          type="content-evenly text-center justify-center pt-12"
          className="inline-flex items-center content-center justify-center px-3 py-2 pb-12 mb-4 text-lg font-medium leading-4 text-center text-white border border-transparent rounded-md shadow-sm w-80 bg-brand-dark-blue hover:bg-brand-yellow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Top Rated Users
        </button>
        </li>
        <li>
        <button
          type="text-center justify-center pt-12"
          className="inline-flex items-center content-center justify-center px-3 py-2 pb-12 mb-4 text-lg font-medium leading-4 text-center text-white border border-transparent rounded-md shadow-sm w-80 bg-brand-yellow hover:bg-brand-beau-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          + Venue
        </button>
        </li>
        
      </ul>
      </div>
    )
  }