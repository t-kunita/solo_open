import {useContext} from 'react';
import {Col, Form} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";
import {areaContext, floorContext, floorListContext} from './SearchArea.jsx'

const DropdownArea = () => {
    // const [areasDropdownList, setAreasDromDownList] = useState([]);
    // const [area, setArea] = useContext(areaContext);
    const [floorList, setFloorList] = useContext(floorListContext);
    const [floor, setFloor] = useContext(floorContext);


    return (
        <Col xs={6} lg={3} className="input-container">
            <Form.Group controlId="floor">
                <Form.Label>フロア</Form.Label>
                <span className="icon-left">
                            <FontAwesomeIcon icon={faMapMarkerAlt}/>
                            </span>
                <Form.Select
                    value={floor}
                    onChange={(e) => setFloor(e.target.value)}
                >
                    <option value="">選択ください</option>
                    {floorList ? (floorList.map((el, i) => (
                        <option key={i} value={el}>{el}</option>
                    ))) : []}
                </Form.Select>
            </Form.Group>

            {/*<option value="">選択ください</option>*/}
            {/*        <option value="15F">15F</option>*/}
            {/*        <option value="13F">13F</option>*/}
            {/*        <option value="12F">12F</option>*/}
            {/*        <option value="11F">11F</option>*/}
            {/*        <option value="10F">10F</option>*/}
            {/*        <option value="9F">９F</option>*/}
            {/*        <option value="8F">８F</option>*/}
            {/*        <option value="7F">７F</option>*/}
            {/*        <option value="6F">６F</option>*/}
            {/*        <option value="5F">５F</option>*/}
            {/*        <option value="3F">３F</option>*/}
            {/*    </Form.Select>*/}
            {/*</Form.Group>*/}
        </Col>
    );
};

export default DropdownArea;
