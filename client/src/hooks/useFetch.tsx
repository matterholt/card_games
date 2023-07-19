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

function useFetch<T = unknown>(URL?: string, options?: any) {
  const [state, dispatch] = useReducer(fetchReducer, initialState);

  const fetchData = async (URL: string, playerKey?: string) => {
    dispatch({ type: "loading" });
    try {
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const incomingData = await response.json();
      // sort out card data,

      if (!state.data) {
        const { deck_id, remaining, cards } = incomingData;
        const deckStack = sortOutDealtCards(cards, 2, options.cardDraw); // need to make dynamic
        dispatch({
          type: "success",
          payload: { deck_id, remaining, cards: deckStack },
        });
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
    fetchData(URL, options);
  }, [URL]);

  return [state, fetchData];
}

export { useFetch };
