import {useContext, useEffect} from 'react';
import {Form, Col} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";
import {
    // targetDataContext,
    buildingContext,
    buildingListContext,
    floorListContext,
    floorDataContext
} from "./SearchArea.jsx";

const DropdownBuilding = () => {
    const [building, setBuilding] = useContext(buildingContext);
    const [buildingList] = useContext(buildingListContext);
    const [floorList, setFloorList] = useContext(floorListContext);
    const [floorData, setFloorData] = useContext(floorDataContext)

    useEffect(() => {
        // console.log("Updated floorList:", floorList);
    }, [floorList]);

    return (
        <Col xs={6} lg={3} className="input-container">
            <Form.Group controlId="building">
                <Form.Label>建屋</Form.Label>
                <span className="icon-left">
                <FontAwesomeIcon icon={faMapMarkerAlt}/>
            </span>
                <Form.Select
                    value={building}
                    onChange={(e) => {
                        setBuilding(e.target.value)
                        const floor = [...new Set(floorData.filter(el => el.building === e.target.value).map(el => el.floor))]
                        setFloorList(floor)
                    }}
                >
                    <option value="">選択ください</option>
                    {buildingList ? (buildingList.map((el, i) => (
                        <option key={i} value={el}>{el}</option>
                    ))) : []}
                </Form.Select>
            </Form.Group>
        </Col>
    );
};

export default DropdownBuilding;
