import './PastReserved.css'

const PastReserved = () => {
    return (
        <>
            <h5>最近見た会議室</h5>
            <div>
                <img className="searchedConference" src="./image/conferenceRoom/conf1.jpeg"
                     alt="過去の予約"></img>
                <img className="searchedConference" src="./image/conferenceRoom/conf2.jpeg"
                     alt="過去の予約"></img>
                <img className="searchedConference" src="./image/conferenceRoom/conf3.jpeg"
                     alt="過去の予約"></img>
                <img className="searchedConference" src="./image/conferenceRoom/conf4.jpeg"
                     alt="過去の予約"></img>
            </div>
        </>
    )
}

export default PastReserved