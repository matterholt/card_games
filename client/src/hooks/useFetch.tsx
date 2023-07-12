import { useEffect, useReducer, useRef, useState } from "react";

// loading, error, success

const initialState = {
  status: "idle",
  error: undefined,
  data: undefined,
};

const fetchReducer = (state: any, action: any) => {
  switch (action.type) {
    case "loading":
      return { ...initialState, status: "loading" };
    case "error":
      return { ...initialState, status: "error", error: action.payload };
    case "success":
      return { ...initialState, status: "success", data: action.payload };
    default:
      return state;
  }
};

function useFetch(URL: string) {
  // const [URL, setURL] = useState(
  //   () => "https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
  // );
  const [state, dispatch] = useReducer(fetchReducer, initialState);

  const fetchData = async (URL: string) => {
    dispatch({ type: "loading" });
    try {
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();

      dispatch({ type: "success", payload: data });
    } catch (err) {
      dispatch({ type: "error", payload: err as Error });
    }
  };

  function callForCard(deckID, cardCount) {
    console.log("fetch another card from the API");
  }

  useEffect(() => {
    fetchData(URL);
  }, [URL]);

  return [state, callForCard];
}

export { useFetch };
