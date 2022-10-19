import React from "react";
import QuoteForm from "../components/quotes/QuoteForm";
import { useHistory } from "react-router-dom";
const NewQuotes=(prop)=>
{
    const history=useHistory()
    const onAddQuoteHandler=(data)=>
    {
        console.log(data)
        history.push('/quotes')
    }

    return(<React.Fragment>
       <h1>New Quote Page</h1>
       <QuoteForm onAddQuote={onAddQuoteHandler} ></QuoteForm>
       </React.Fragment>)
}

export default NewQuotes;

