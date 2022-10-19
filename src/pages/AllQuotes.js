import React from "react";
import QuoteList from "../components/quotes/QuoteList";
const DUMMY_QUOTES=[
    {id:'q1', author:"Bhanu", text:"Life is Good"},
    {id:'q2',author:"Bhanu", text:"Term and Conditions Apply"}
]

const AllQuotes=()=>
{
    return(<React.Fragment>
       <h1>All Quote Page</h1>
    <QuoteList quotes={DUMMY_QUOTES}></QuoteList>
    </React.Fragment>)
}

export default AllQuotes