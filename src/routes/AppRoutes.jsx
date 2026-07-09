import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout.jsx";
import Home from "../pages/Home";
import Buy from "../pages/Buy";
import Rent from "../pages/Rent";
import Agents from "../pages/Agents";
import Locations from "../pages/Locations";

export default function AppRoutes() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/buy" element={<Buy />} />
                <Route path="/rent" element={<Rent />} />
                <Route path="/agents" element={<Agents />} />
                <Route path="/locations" element={<Locations />} />
            </Routes>
        </Layout>
    );
}