import {useState, useEffect, useContext} from 'react';
import {Form} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";
import {areasContext} from './SearchArea.jsx'

const DropdownArea = () => {
    const [areasDropdownList, setAreasDromDownList] = useState([]);
    const [area, setArea] = useContext(areasContext);

    const getAreaData = async () => {
        try {
            const result = await fetch('/areas') // サーバのエンドポイントを指定
            if (!result.ok) {
                throw new Error(`error! status: ${result.status}`);
            }
            const data = await result.json()
            setAreasDromDownList(data);

        } catch (error) {
            console.error('Error:', error)
        }
    }
    useEffect(() => {
        getAreaData()
    }, []);  // 空の依存配列で初回のみ実行

    return (
        <Form.Group controlId="area">
            <Form.Label>エリア</Form.Label>
            <span className="icon-left">
                            <FontAwesomeIcon icon={faMapMarkerAlt}/>
                            </span>
            <Form.Select
                value={area}
                onChange={(e) => setArea(e.target.value)}
            >
                <option value="">選択ください</option>
                {areasDropdownList ? (areasDropdownList.map((el, i) => (
                    <option key={i} value={el}>{el}</option>
                ))) : []}
            </Form.Select>
        </Form.Group>

    );
};

export default DropdownArea;
