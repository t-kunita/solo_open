// import React from "react";

import SearchArea from "./SearchArea/SearchArea.jsx";
import OriginalCarousel from "./Carousel/OriginalCarousel.jsx";
import PastReserved from "./PastReserved/PastReserved.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import SearchResult from "./SearchArea/SearchResult.jsx";
import {useState, createContext, useEffect} from "react";
// import Button from "react-bootstrap/Button"; // React BootstrapのButtonコンポーネントをインポート

export const reservationsContext = createContext();

const App = () => {
    const [reservations, setReservations] = useState([])
    useEffect(() => {
        console.log("reservationsが変更されました", reservations);
    }, [reservations]);

    return (
        <>
            <h3 className="text-lg-start mb-4">Office Navi</h3>
            <OriginalCarousel/>
            <reservationsContext.Provider value={[reservations, setReservations]}>
                <SearchArea/>
                {reservations.length === 0 ? <PastReserved/> : <SearchResult/>}
            </reservationsContext.Provider>
        </>
    );
};

export default App;
