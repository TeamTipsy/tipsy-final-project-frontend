import React from 'react';
import QueryFromSearch from './QueryFromSearch.js';
import Search from './search.js';


export default function SearchResults({ search, testsearchResults }) {
    // let searchResults = <Search />
    console.log('search1', search)
    // if(search && search.length) {
    //     searchResults.map(venue => <QueryFromSearch key={venue.id} />);
    // }

    return (
        <div className="list-of-results">
            {testsearchResults.map((item) => (
                <div>{item.city}</div>
        ))}
            {/* {testsearchResults.map((result) => {
                {result.city}
            })} */}
        </div>
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
