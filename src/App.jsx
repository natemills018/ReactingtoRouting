import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Home from "./components/Home";
import AboutPage from "./components/About Us";
import ContactPage from "./components/ContactUs";
import UserDetails from "./components/UserDetails";

const App = () => {

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/aboutus" element={<AboutPage />}/>
                <Route path="/contactus" element={< ContactPage/>}/>
                <Route path="/users/:userid" element={<UserDetails />} />
                <Route path="*" element={<h1>404 Not Found</h1>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;