import { Routes, Route, Navigate } from "react-router-dom";
import { SoundBoard } from "../../pages/SoundBoard";
import { BoardItemsPage } from "../../pages/BoardItemsPage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<SoundBoard />} />
      <Route path="/soundboard/:id" element={<BoardItemsPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
