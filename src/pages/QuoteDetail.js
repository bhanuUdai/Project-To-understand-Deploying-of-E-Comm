import React from "react";
import { useParams, Route, Link ,useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
const QuoteDetail = () => {
  const params = useParams();
  const match=useRouteMatch()
  const DUMMY_QUOTES = [
    { id: "q1", author: "Bhanu", text: "Life is Good" },
    { id: "q2", author: "Bhanu", text: "Term and Conditions Apply" },
  ];

  const quotes = DUMMY_QUOTES.find((quote) => {
    return quote.id === params.quoteId;
  });

  if (!quotes) {
    return (
      <h2 style={{ display: "flex", justifyContent: "center" }}>
        Sorry..No quote Found
      </h2>
    );
  }

  console.log(match)

  return (
    <React.Fragment>
      <h1>Quote Detail Page</h1>
      <HighlightedQuote text={quotes.text} author={quotes.author} />
      <Route path={`${match.path}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}> 
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </React.Fragment>
  );
};

export default QuoteDetail;

//params.quoteId, this "quoteId" should be same as mentioned in path in route
//Here we used nested route


//Here we are using <Link></Link> which have url same as we given in the path to load comments
// Again we enclose this <link> in the Rute having path , which path of this details page means this link will only visible url is upto this detail page and become invisible when we will load the comment page

//useRouteMatch is similar to useLocation but contain more specific information the useLocation
//   <Link className="btn--flat" to={`/quotes/${parama.quoteId}/comments`}>   TO
//   <Link className="btn--flat" to={`${match.url}/comments`}> 

//    <Route path={`/quotes/${parama.quoteId}/comments`}>    TO
//    <Route path={`${match.path}/comments`}>

// match.path will give path of current page   i.e  path: '/quotes/:quoteId', url: '/quotes/q2', used in <Route>
//match.url give url of current page  i.e  url: '/quotes/q2', used in <Link>