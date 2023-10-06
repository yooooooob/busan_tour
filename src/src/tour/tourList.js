import axios from "axios";
import { useState, useEffect } from "react";
import TourItem from "./tourItem";

const TourList = () => {

    const key = 'wZeUZ%2FgZ5NhsFo0K8jkOXzFSj7EGpzIcpkyrin3fjDAj3G1Zx87yjwq8UvfcP2rM%2B9tHF%2FOYfERVHUZXWpz2gw%3D%3D'
    const [tour, setTour] = useState([]);

    useEffect(() => {
        //비동기 작업시 사용하는 키워드
        //async 
        //await

        const tourData = async () => {

            /* try,catch
            //에러가 발생 할 때, 스크립트 중단 후,콘솔에 출력📩
            //에러가 없다면 try안에 코드 실행
            //에러가 있다면 catch 값으로 넘어감*/
            try {
                const response = await axios.get(`http://apis.data.go.kr/6260000/AttractionService/getAttractionKr?serviceKey=${key}&numOfRows=10&pageNo=1&resultType=json`)
                setTour(response.data.getAttractionKr.item)

            } catch (error) {
                console.log(error)
            }
        };

        tourData();
    }, []);

    return (
        <div className="list">
            <h3>Busan Tour</h3>
            <div className="main_list">
                {tour.map((tourMap) => (
                    <TourItem article={tourMap}/>
                ))}
            </div >
        </div>
    )
}

export default TourList;

