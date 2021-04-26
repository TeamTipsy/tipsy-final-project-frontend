import React from 'react';
import QueryFromSearch from './QueryFromSearch.js';
import { useState, useEffect } from 'react'
import Search from './search.js';


export default function SearchResults(props) {
    const search = props.location.state.search
    const searchResults = props.location.state.searchResults
    console.log(searchResults)

    return (
        <>
        
        <div className="list-of-results mt-5">
        <Search/>
            <div className="center text-4xl mt-3 text-brand-dark-blue">Results:</div>
            <ul className="divide-y divide-gray-200 text-brand-dark-blue h-28">
            {searchResults.map((result)=> (
                <li className="py-4">
                    <div className="flex space-x-3">
                    <img src={result.prof_pic} className="w-10 h-10 rounded-full"/>
                    <div className="text-2xl">{result.venue_name}</div>
                    <div>{result.venue_type}</div>
                    <div>{result.phone_num}</div>
                    <p>{result.street_address}, {result.city}, {result.state}</p>
                    <div>{result.web_url}</div>
                    </div>
                </li>
            ))}
            </ul>
        </div>
        </>
    );
}
// city: "Cary"
// email: "INFO@BONDBROTHERSBEER.COM"
// fb_link: "https://www.facebook.com/BondBrosBeer"
// followers_list: []
// hours_of_operation: "M-T: 2-10PM F-SAT: 12PM-12AM SUN: 12PM-10PM"
// insta_handle: null
// is_authenticated: false
// join_date: "2021-04-24T23:08:56.103154-04:00"
// phone_num: "919-459-2670"
// posted_to_venue: []
// prof_pic: "https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_677,q_85,w_1280/v1/clients/raleigh/Bond_Brothers_credit_Duffy_Healey_0a5c9d64-cc01-48ab-9bb7-c42aaa8f249d.jpg"
// state: "NC"
// street_address: "202 E Cedar St"
// tags: "1"
// twitter_handle: null
// venue_added_by: "tipsyadmin"
// venue_id: "6806b83b-4521-4803-9dc7-1a1df2da0021"
// venue_name: "Bond Brothers"
// venue_type: "brewery"
// web_url: "https://www.bondbrothersbeer.com/"
// zip: "27511"
