import {useContext} from 'react';
import {Col, Form} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBriefcase, faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";
import {targetDataContext, areaContext, genreListContext, genreContext} from "./SearchArea.jsx";

const DropdownGenre = () => {
    const [genreList] = useContext(genreListContext);
    const [genre, setGenre] = useContext(genreContext);
    const [targetData, setTargetData] = useContext(targetDataContext);
    const [area] = useContext(areaContext);

    return (
        <Col xs={6} lg={3} className="input-container">
            <Form.Group controlId="genre">
                <Form.Label>ジャンル</Form.Label>
                <span className="icon-left">
                            <FontAwesomeIcon icon={faBriefcase}/>
                            </span>
                <Form.Select
                    value={genre}
                    onChange={(e) => {
                        setGenre(e.target.value)
                        const target = targetData.filter(el => el.area === area && el.genre === e.target.value)
                        console.log("target", target)
                        if (target[0].url && target[0].url !== "Outlook") {
                            window.location.href = target[0].url;
                        }
                    }}
                >
                    <option value="">選択ください</option>
                    {
                        genreList ? (genreList.map((el, i) => (
                            <option key={i} value={el}>{el}</option>
                        ))) : []}
                </Form.Select>
            </Form.Group>
        </Col>


    )
        ;
};

export default DropdownGenre;
