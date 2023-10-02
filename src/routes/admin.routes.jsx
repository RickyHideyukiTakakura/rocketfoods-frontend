import { Route, Routes } from "react-router-dom";
import { Details } from "../pages/Details";
import { EditDish } from "../pages/EditDish";
import { Home } from "../pages/Home";
import { NewDish } from "../pages/NewDish";

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<NewDish />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/edit/:id" element={<EditDish />} />
    </Routes>
  );
}
