import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from './registraton'; 
import Base from "./base";
import Paid from "./paid";

const Server = () => {
    return (
        <BrowserRouter>
            <Routes>
                 <Route path="/" element={<Base />} />
                <Route path="/signin" element={<Register />} />
                <Route path="/membership" element={<Paid />} />

            </Routes>
        </BrowserRouter>
    );
}

export default Server;
