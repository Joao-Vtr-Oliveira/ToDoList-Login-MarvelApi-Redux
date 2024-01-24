import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import LoginPage from "./pages/Login/Login";
import TodoList from "./pages/Todo/TodoList";
import NotFound from "./pages/NotFound/NotFound";
import { ChakraProvider } from "@chakra-ui/react";
import Marvel from "./pages/Marvel/Marvel";
import Home from "./pages/Home/Home";
import CharacterPage from "./pages/Marvel/CharacterPage";

function App() {
  return (
    <ChakraProvider>
        <BrowserRouter>
          <div className="h-screen flex flex-col justify-center items-center">
            <Header />
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/home" element={<Home />} />
              <Route path="/todo" element={<TodoList />} />
              <Route path="/marvel" element={<Marvel />} />
              <Route path="/marvel/:character" element={<CharacterPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;