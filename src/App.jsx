import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import MemoriesPage from "./pages/MemoriesPage";
import LetterPage from "./pages/LetterPage";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="memories" element={<MemoriesPage />} />
        <Route path="letter" element={<LetterPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
