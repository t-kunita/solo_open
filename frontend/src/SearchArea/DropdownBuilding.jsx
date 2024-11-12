import {useState, useEffect, useContext} from 'react';
import {Form} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";
import {targetDataContext, buildingContext, buildingListContext} from "./SearchArea.jsx";

const DropdownBuilding = () => {
    // const [targetData, setTargetData] = useContext(targetDataContext);
    // const [area] = useContext(areaContext);
    const [building, setBuilding] = useContext(buildingContext);
    const [buildingList] = useContext(buildingListContext);

    return (
        <Form.Group controlId="building">
            <Form.Label>建屋</Form.Label>
            <span className="icon-left">
                <FontAwesomeIcon icon={faMapMarkerAlt}/>
            </span>
            <Form.Select
                value={building}
                onChange={(e) => setBuilding(e.target.value)}
            >
                <option value="">選択ください</option>
                {buildingList ? (buildingList.map((el, i) => (
                    <option key={i} value={el}>{el}</option>
                ))) : []}
            </Form.Select>
        </Form.Group>

    );
};

export default DropdownBuilding;