import React from 'react';
import QueryFromSearch from './QueryFromSearch.js';
import { useState, useEffect } from 'react'
import Search from './search.js';


export default function SearchResults(props) {
    const search = props.location.state.search
    const searchResults = props.location.state.searchResults
    const endpoint = props.location.state.endpoint
    console.log(searchResults)

    function ContentRenderer() {
        if (endpoint === 'venues') {
            return <div className="mt-5 mx-10 ">
                        <Search/>
                            <div className="center text-4xl mt-3 text-brand-dark-blue">Results:</div>
                            <ul className="divide-y divide-gray-200 text-brand-dark-blue h-28">
                            {searchResults.map((result)=> (
                                <li className="py-8 w-full">
                                    <div className="flex space-x-3">
                                    <img src={result.prof_pic} className="h-10 w-12 rounded-full"/>
                                    <div className="text-2xl"><a className="hover:text-brand-red">{result.venue_name}</a><div className="text-sm">{result.venue_type}</div></div>
                                    <div className="py-4 pl-36">
                                    <div>{result.phone_num}</div>
                                    <p>{result.street_address}, {result.city}, {result.state}</p>
                                    <a className="hover:text-brand-red" href={result.web_url}>{result.web_url}</a>
                                    </div>
                                    </div>
                                </li>
                            ))}
                            </ul>
                        </div>
        } else if (endpoint === 'users') {
            return <div className="mt-5 mx-10 ">
                        <Search/>
                        <div className="center text-4xl mt-3 text-brand-dark-blue">Results:</div>
                        <ul className="divide-y divide-gray-200 text-brand-dark-blue h-28">
                        {searchResults.map((result)=> (
                            <li className="py-8 w-full">
                                <div className="flex space-x-3">
                                <img src={result.prof_pic} className="h-10 w-12 rounded-full"/>
                                <div className="text-2xl"><a className="hover:text-brand-red">{result.username}</a><div className="text-sm">{result.venue_type}</div></div>
                                <div className="py-4 pl-36">
                                
                                <p>{result.city}, {result.state}</p>
                                <a className="hover:text-brand-red" href={result.web_url}>{result.web_url}</a>
                                </div>
                                </div>
                            </li>
                        ))}
                        </ul>
                </div>
        }
    }

    return (
        <>
            <ContentRenderer/>
        </>
    );
}



