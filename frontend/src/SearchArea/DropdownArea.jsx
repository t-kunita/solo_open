import {Col, Form} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";
import {
    areaListContext,
    genreListContext,
    areaContext,
    targetDataContext,
    buildingDataContext,
    buildingListContext
} from './SearchArea.jsx'
import {useContext, useEffect, useState} from "react";

const DropdownArea = () => {
    const [area, setArea] = useContext(areaContext);
    const [areaList] = useContext(areaListContext);
    const [genreList, setGenreList] = useContext(genreListContext);
    const [targetData, setTargetData] = useContext(targetDataContext);
    const [buildingList, setBuildingList] = useContext(buildingListContext);
    const [buildingData, setBuildingData] = useContext(buildingDataContext);

    useEffect(() => {
        console.log("Updated genreList:", genreList);
    }, [genreList]);

    return (
        <Col xs={6} lg={3} className="input-container">
            <Form.Group controlId="area">
                <Form.Label>エリア</Form.Label>
                <span className="icon-left">
                            <FontAwesomeIcon icon={faMapMarkerAlt}/>
                            </span>
                <Form.Select
                    value={area}
                    onChange={(e) => {
                        setArea(e.target.value)
                        const genre = [...new Set(targetData.filter(el => el.area === e.target.value).map(el => el.genre))]
                        setGenreList(genre)
                        const building = [...new Set(buildingData.filter(el => el.area === e.target.value).map(el => el.building))]
                        setBuildingList(building)
                    }
                    }
                >
                    <option value="">選択ください</option>
                    {areaList.map((el, i) => (
                        <option key={i} value={el}>{el}</option>
                    ))}
                </Form.Select>
            </Form.Group>
        </Col>
    );
};

export default DropdownArea;
