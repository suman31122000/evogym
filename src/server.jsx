import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from './registraton'; 
import Base from "./base";

const Server = () => {
    return (
        <BrowserRouter>
            <Routes>
                 <Route path="/" element={<Base />} />
                <Route path="/signin" element={<Register />} />

            </Routes>
        </BrowserRouter>
    );
}

export default Server;
