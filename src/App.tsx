import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./containers/home/home";
import { PokeList } from "./containers/pokeList/pokeList";

import { AppWrapper } from "./components/AppWrapper";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <AppWrapper>
              <Home />
            </AppWrapper>
          }
        />
        <Route
          path="/list"
          element={
            <AppWrapper>
              <PokeList />
            </AppWrapper>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
