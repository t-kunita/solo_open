import {useState, useContext, createContext, useEffect} from "react";
import {Container, Row, Col, Form, Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import DropdownArea from './DropdownArea.jsx'
import DropdownGenre from './DropdownGenre.jsx'
import DropdownBuilding from "./DropdownBuilding.jsx";
import Dropdownfloor from "./Dropdownfloor.jsx";
import {
    // faMapMarkerAlt,
    faUserFriends,
    faClock,
} from "@fortawesome/free-solid-svg-icons";
import "./SearchArea.css";
import {reservationsContext} from "../App.jsx";
import {getTargetData, getBuildingData, getFloorData} from "./initialize.js";

export const areaContext = createContext();
export const genreContext = createContext();
export const buildingContext = createContext();
export const floorContext = createContext();
export const areaListContext = createContext();
export const genreListContext = createContext()
export const floorListContext = createContext()

export const buildingListContext = createContext();
export const targetDataContext = createContext();
export const buildingDataContext = createContext();
export const floorDataContext = createContext();

function SearchArea() {
    const [area, setArea] = useState("");
    const [genre, setGenre] = useState("");
    const [building, setBuilding] = useState("");
    const [floor, setFloor] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [usehours, setUsehours] = useState("");
    const [people, setPeople] = useState(1);
    const [, setReservations] = useContext(reservationsContext);

    const [areaList, setAreaList] = useState([]);
    const [genreList, setGenreList] = useState([]);
    const [buildingList, setBuildingList] = useState([]);
    const [floorList, setFloorList] = useState([]);
    const [targetData, setTargetData] = useState([]);
    const [buildingData, setBuildingData] = useState([]);
    const [floorData, setFloorData] = useState([]);

    useEffect(() => {
        const initialiser = async () => {
            const targets = await getTargetData()
            setTargetData(targets)
            setAreaList([...new Set(targets.map(el => el.area))])
            const buildings = await getBuildingData()
            setBuildingData(buildings)
            const floors = await getFloorData()
            setFloorData(floors)
        }
        initialiser()
    }, []);


    // 検索する処理
    const getReservation = async () => {
        try {
            const searchDate = new Date(`${date} ${time}`)
            searchDate.setHours(searchDate.getHours() - 9)    //9時間前に変更
            const formattedDate = `${searchDate.getFullYear()}-${String(searchDate.getMonth() + 1).padStart(2, '0')}-${String(searchDate.getDate()).padStart(2, '0')}T${String(searchDate.getHours()).padStart(2, '0')}:${String(searchDate.getMinutes()).padStart(2, '0')}:${String(searchDate.getSeconds()).padStart(2, '0')}.0000000`;

            const queryParams = new URLSearchParams({
                area,
                genre, building, floor,
                date: formattedDate,
                people
            });
            const res = await fetch(`/conferences?${queryParams.toString()}`, {method: 'GET', cache: 'no-cache'})
            const result = await res.json();
            setReservations(result.data)

        } catch (error) {
            console.error("Error fetching conferences:", error);
        }

    };
    return (
        <Container className="py-5">
            <Form>
                <Row className="mb-3 g-0">
                    <buildingListContext.Provider value={[buildingList, setBuildingList]}>
                        <buildingDataContext.Provider value={[buildingData, setBuildingData]}>
                            <floorDataContext.Provider value={[floorData, setFloorData]}>
                                <areaListContext.Provider value={[areaList, setAreaList]}>
                                    <targetDataContext.Provider value={[targetData, setTargetData]}>
                                        <genreListContext.Provider value={[genreList, setGenreList]}>
                                            <floorListContext.Provider value={[floorList, setFloorList]}>
                                                <floorContext.Provider value={[floor, setFloor]}>
                                                    <buildingContext.Provider value={[building, setBuilding]}>
                                                        <genreContext.Provider value={[genre, setGenre]}>
                                                            <areaContext.Provider value={[area, setArea]}>
                                                                <DropdownArea/>
                                                                <DropdownGenre/>
                                                                <DropdownBuilding/>
                                                                <Dropdownfloor/>
                                                            </areaContext.Provider>
                                                        </genreContext.Provider>
                                                    </buildingContext.Provider>
                                                </floorContext.Provider>
                                            </floorListContext.Provider>
                                        </genreListContext.Provider>
                                    </targetDataContext.Provider>
                                </areaListContext.Provider>
                            </floorDataContext.Provider>
                        </buildingDataContext.Provider>
                    </buildingListContext.Provider>

                    <Col xs={6} lg={3} className="input-container">
                        <Form.Group controlId="date">
                            <Form.Label>日付</Form.Label>
                            <Form.Control
                                type="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </Form.Group>
                    </Col>

                    <Col xs={6} lg={3} className="input-container">
                        <Form.Group controlId="time">
                            <Form.Label>開始時間</Form.Label>
                            <Form.Control
                                type="time"
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                            />
                        </Form.Group>
                    </Col>

                    <Col xs={6} lg={2} className="input-container">
                        <Form.Group controlId="usehours">
                            <Form.Label>利用時間</Form.Label>
                            <span className="icon-left">
                                <FontAwesomeIcon icon={faClock}/>
                            </span>
                            <Form.Select
                                value={usehours}
                                onChange={(e) => setUsehours(e.target.value)}
                            >
                                <option value="">選択ください</option>
                                <option value="30min">30分</option>
                                <option value="60min">1時間</option>
                                <option value="90min">1時間30分</option>
                                <option value="120min">2時間</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>

                    <Col xs={6} lg={2} className="input-container">
                        <Form.Group controlId="people">
                            <Form.Label>人数</Form.Label>
                            <span className="icon-left">
                                <FontAwesomeIcon icon={faUserFriends}/>
                            </span>
                            <Form.Control
                                type="number"
                                value={people}
                                onChange={(e) => setPeople(e.target.value)}
                                min="1"
                            />
                        </Form.Group>
                    </Col>

                    {/* 検索ボタンを同じ行に追加 */}
                    <Col xs={12} lg={2} className="d-flex align-items-end">
                        <Button
                            variant="danger"
                            size="lg"
                            onClick={getReservation}
                            className="w-100 search-button"
                        >
                            検索
                        </Button>
                    </Col>
                </Row>
            </Form>

        </Container>
    );
}

export default SearchArea;
