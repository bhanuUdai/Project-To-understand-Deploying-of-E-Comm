import React ,{useEffect} from "react";
import QuoteList from "../components/quotes/QuoteList";
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
// const DUMMY_QUOTES=[
//     {id:'q1', author:"Bhanu", text:"Life is Good"},
//     {id:'q2',author:"Bhanu", text:"Term and Conditions Apply"}
// ]

const AllQuotes=()=>
{

    const {sendRequest, status, data:loadedQuotes, error}=useHttp(getAllQuotes,true)
   
    useEffect(()=>
    {
        sendRequest();
    },[sendRequest])


    if(status==='pending')
    {
        return(
            <div className="centered">
                <LoadingSpinner/>
            </div>
        )
    }

    if(error)
    {
        return <p className="centered focused">{error}</p>
    }

    if(status==='completed' && (!loadedQuotes || loadedQuotes.length===0))
    {
        return(<NoQuotesFound/>)
    }

   return(<React.Fragment>
       <h1>All Quote Page</h1>
    <QuoteList quotes={loadedQuotes}></QuoteList>
    </React.Fragment>)
}

export default AllQuotes