import { Fragment } from "react";
import { useHistory, useLocation } from "react-router-dom";
import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();
  console.log('LOCATION',location)
  //new URLSearchParams() , is basically a class defined in JS which is used to serach url in particular parameter

  const queryParams = new URLSearchParams(location.search); //it returns object of key value pair of queryParameter, because location.search contains url of queryParameter
  const isSortAscending = queryParams.get("sort") === "asc";

  const sortedQuotes = sortQuotes(props.quotes, isSortAscending);

  const changeSortHandler = () => {
    
    history.push({
      pathname:location.pathname,
      search:`?sort=${(isSortAscending ? "desc" : "asc")}`
    })

    //  history.push(`${location.pathname}?sort=` + (isSortAscending ? "desc" : "asc"));  this queryParmeter is too long therefor can be written as above
  };

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortHandler}>
          {isSortAscending ? "Sort Descending" : "Sort Ascending"}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;



// history.push("/quotes?sort=" + (isSortAscending ? "desc" : "asc"));
//TO  
//history.push(`${location.pathname}?sort=` + (isSortAscending ? "desc" : "asc"));
//TO
// history.push({
//   pathname:location.pathname,
//   search:`?sort=${(isSortAscending ? "desc" : "asc")}`
// })