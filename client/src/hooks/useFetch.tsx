import { useEffect, useReducer, useRef, useState, useCallback } from "react";
import { sortOutDealtCards } from "../helpers/";
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

      if (!state.data) {
        const { success, deck_id, remaining, cards } = incomingData;
        const deckStack = sortOutDealtCards(cards, 2);
        console.log({ success, deck_id, remaining, cards: deckStack });
        dispatch({
          type: "success",
          payload: { success, deck_id, remaining, cards: deckStack },
        });
        return;
      }

      const playersCards = state?.cards;

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
