/* 정보입력 */

const TourItem = ({ article }) => {
    const {
        MAIN_TITLE,/* 콘텐츠명 */
        TITLE,/* 제목 */
        HOMEPAGE_URL, /* 홈페이지URL */
        MAIN_IMG_NORMAL, /* 이미지URL */
        ADDR1

    } = article;

    return (
        <div className="item">

            <div className="title">
                <h5>{MAIN_TITLE}</h5>
               
            </div> {/* title end */}
            <img src={MAIN_IMG_NORMAL} alt={TITLE} />
           
            <h4>{TITLE}</h4>
            <p>{ADDR1}</p>

            {/* noreferrer :해당 페이지로 넘어가기 위해 http에게 요청함*/ }
            {HOMEPAGE_URL && <a href={HOMEPAGE_URL} target="_blank">더 알아보기</a>}

        </div> /*.item end*/
    )
}

export default TourItem;