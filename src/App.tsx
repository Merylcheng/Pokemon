import { Route, Routes } from "react-router-dom";
import PokemonList from "./pages/PokemonList";
import PokemonPage from "./pages/PokemonPage";

function App() {
  return (
    <>
      <h1>Pokemon</h1>
      <form
        onSubmit={(event) => {
          const formData = new FormData(event.currentTarget);
          const data = Object.fromEntries(formData);
          console.log(data.name);
        }}
      >
        <input name="company" />
      </form>
      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path="/:id" element={<PokemonPage />} />
      </Routes>
    </>
  );
}

export default App;
