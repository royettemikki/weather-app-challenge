import Home from "./pages/Home";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import AuthChecker from "./components/hoc/AuthChecker";
import Weather from "./pages/Weather";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={
            <AuthChecker>
              <Home />
            </AuthChecker>
          }
        />
        <Route
          path="/:slug"
          element={
            <AuthChecker>
              <Weather />
            </AuthChecker>
          }
        />
      </Routes>
    </>
  );
}

export default App;
