import { useState, useEffect, Suspense } from "react";

//https://usehooks-ts.com/react-hook/use-fetch

// use update the status and make that how fetch the data, then able to pass in options

// 1. convert to reducer
/**
 *  Actions
 * 1. new deck
 * 2. deal [numb]
 * 3. draw 1
 *
 */

function useFetch() {
  const [fetchedData, setFetchData] = useState({});
  const [status, setStatus] = useState("waiting");
  const [message, setMessage] = useState();

  let options = { deck: "new", cardCount: 2 };
  const _URL = `https://deckofcardsapi.com/api/deck/${options.deck}/draw/?count=${options.cardCount}`;

  async function sending() {
    try {
      setStatus("dealing");
      const response = await fetch(_URL);
      const resData = await response.json();

      if (resData.success) {
        setFetchData(resData);
        setStatus("gameOn");
      } else {
        console.log("error");
        setFetchData(resData.error);
        setStatus("error");
      }
    } catch (error) {
      // need to get a erro boundry
      console.log(error);
      throw new Error(error);
    }
  }
  return { fetchedData, status, sending };
}
export default useFetch;
