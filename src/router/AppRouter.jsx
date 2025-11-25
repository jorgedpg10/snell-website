import { Route, Routes } from "react-router-dom";
import { Home } from "../snell/Home";


export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/about" element={<About />} /> */}
    </Routes>
  );
}
