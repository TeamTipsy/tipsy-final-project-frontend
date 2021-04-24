import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  } from 'react-router-dom';

export default function Cta() {
    return (
      <div className="flex items-center justify-center">
      <ul>
        <li>
        <Link
          to={{ pathname:`/TopRatedVenues/` }}
          className="my-12 align-middle inline-flex justify-center p-10 h-28 text-lg font-medium leading-4 text-white border border-transparent rounded-md shadow-sm w-80 bg-brand-dark-blue hover:bg-brand-yellow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Top Rated Venues
        </Link>
        </li>
        <li><Link
          to={{ pathname:`/TopRatedUsers/` }}
          className="mb-12 inline-flex justify-center p-10 h-28 text-lg font-medium leading-4 text-white border border-transparent rounded-md shadow-sm w-80 bg-brand-dark-blue hover:bg-brand-yellow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Top Rated Users
        </Link>
        </li>
        <li>
        <Link
          type=""
          className="mb-12 inline-flex justify-center p-10 h-28 text-lg font-medium leading-4 text-white border border-transparent rounded-md shadow-sm w-80 bg-brand-dark-blue hover:bg-brand-yellow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          + Venue
        </Link>
        </li>
        
      </ul>
      </div>
    )
  }