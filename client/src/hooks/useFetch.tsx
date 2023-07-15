import { useEffect, useReducer, useRef, useState, useCallback } from "react";

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
  const [state, dispatch] = useReducer(fetchReducer, initialState);

  const fetchData = async (URL: string) => {
    dispatch({ type: "loading" });
    try {
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const incomingData = await response.json();
      // sort out card data,
      const { success, deck_id, cards } = incomingData;

      // call total amount of cards
      // create a stack
      // pop off into number of players
      // just like dealing

      const dealersCards = [cards[1], cards[4]];

      console.log(incomingData);

      if (!state.data) {
        dispatch({ type: "success", payload: incomingData });
        return;
      }
      const additionCards = [...state.data.cards, ...incomingData.cards];
      const updatesOnState = { ...incomingData, ...{ cards: additionCards } };

      dispatch({ type: "success", payload: updatesOnState });
    } catch (err) {
      dispatch({ type: "error", payload: err as Error });
    }
  };

  useEffect(() => {
    // debating on removing useEffect
    fetchData(URL);
  }, [URL]);

  return [state, fetchData];
}

export { useFetch };
