// Hooks
import { useEffect, useReducer, createContext } from "react";

// components
import reducer from "./reducer";

// utils
import generateApiUrl from "./generateApiUrl";

// css
import "./App.css";

export const quizContext = createContext(null);

function App() {
  // variables

  const default_value = {
    Amount: 10,
    listOfQuizzes: [],
    category: "all",
    type: "mcqs",
    difficulty: "all",
  };

  const [state, dispatch] = useReducer(reducer, default_value);

  // functions

  async function fetchData() {
    const apiUrl = generateApiUrl(20, "videoGames", "mcqs", "easy");
    const response = await fetch(apiUrl);
    const data = await response.json();

    dispatch({ type: "SET_QUIZZES", payload: data.results });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    // ========================= REFACTOR ==================================
    <quizContext.Provider value={state}>
      <div className="App">
        <h1>Quiz App</h1>
      </div>
    </quizContext.Provider>
  );
}

export default App;
