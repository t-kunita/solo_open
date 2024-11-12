import {useContext} from "react";
import {reservationsContext} from "../App.jsx";
import './SearchResult.css'

const SearchResult = () => {
    const [reservations] = useContext(reservationsContext);

    // 画像のパスを取得
    const getImagePath = (reservationName) => {
        return `/image/conferenceRoom/${reservationName}.jpeg`;
    };

    if (!reservations) {
        return (<p>該当データは存在しませんでした</p>);
    }
    return (
        <div className="reservation-container">
            {/* 左側：設備選択エリア（PC画面のみ表示） */}
            <div className="options-container">
                <h3>設備選択</h3>
                <label><input type="checkbox"/> モニタ</label>
                <label><input type="checkbox"/> Webカメラ</label>
                <label><input type="checkbox"/> マイクスピーカー</label>
                <label><input type="checkbox"/> RoomKit</label>
                <label><input type="checkbox"/> 天吊りプロジェクター</label>
            </div>

            {/* 右側：予約リストエリア */}
            <div className="reservation-result-container">
                {reservations.map((el, index) => (
                    <div key={index} className="reservation-list">
                        <div className="reservation-result">
                            <h2>{el.conferenceName}</h2>
                            <img className="roomImage"
                                 src={getImagePath(el.conferenceName)}
                                 alt={el.conferenceName}
                            />
                            <div>
                                <p>{el.building} - {el.floor}</p>
                                <p>定員 {el.capacity} 人</p>
                            </div>
                        </div>
                        <div className="start-button">
                            {el.startTime.map((startEl, i) => (
                                <button key={i}>
                                    {startEl}
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default SearchResult;