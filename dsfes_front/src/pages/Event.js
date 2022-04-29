import React, { useState } from "react";
import SuccessModal from "../components/SuccessModal";
import styles from "../css/Event.module.css";
import step1 from "../img/find_duksae/image_step1.png";
import step2 from "../img/find_duksae/image_step2.png";
import step3 from "../img/find_duksae/image_step3.png";
import step4 from "../img/find_duksae/image_step4.png";
import step5 from "../img/find_duksae/image_step5.png";

const Event = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
// event 페이지의 body 역할인 큰 틀의 div
    <div>
{/* 정답 입력 input과 button을 묶은 div */}
      <div>
        <input className={styles.eventinput} type="text" placeholder=" 정답을 입력해주세요"/>
        <button
          className={styles.button}
          type="submit"
          onClick={() => {
            setOpenModal(true);
          }}
        >확인하기</button>
      </div>

      {/* 참여 방법 */}
          <p className={styles.jointext}>참여 방법</p>

      {/* 참여 방법 step 1 */}
      <div className={styles.container}>
        {/* step 01 박스 */}
        <p className={styles.stepbox}>STEP 01</p>
        {/* 이미지 */}
        <img className={styles.stepimg} src={step1} />
        {/* 설명글 */}
        <p className={styles.steptext}>
          학교 곳곳에 있는 새로워진 덕새를 찾아주세요.
        </p>
      </div>

      {/* 참여 방법 step 2 */}
      <div className={styles.container}>
        {/* step 02 박스 */}
        <p className={styles.stepbox}>STEP 02</p>
        {/* 이미지 */}
        <img className={styles.stepimg} src={step2} />
        {/* 설명글 */}
        <p className={styles.steptext}>
          덕새 손에 있는 QR코드를 찍어 주세요.
        </p>
      </div>

      {/* 참여 방법 step 3 */}
      <div className={styles.containerbig}>
        {/* step 03 박스 */}
        <p className={styles.stepbox}>STEP 03</p>
        {/* 이미지 */}
        <img className={styles.stepimg} src={step3} />
        {/* 설명글 */}
        <p className={styles.steptext}>
          5개의 QR코드 속 이미지를 조합하여 문장을 만들어 주세요.
        </p>
      </div>

      {/* 참여 방법 step 4 */}
      <div className={styles.containerbig}>
        {/* step 04 박스 */}
        <p className={styles.stepbox}>STEP 04</p>
        {/* 이미지 */}
        <img className={styles.stepimg} src={step4} />
        {/* 설명글 */}
        <p className={styles.steptext}>
          문장이 완성되었으면 입력칸에 문장을 입력해주세요.
        </p>
      </div>

      {/* 참여 방법 step 5 */}
      <div className={styles.containerbig}>
        {/* step 05 박스 */}
        <p className={styles.stepbox}>STEP 05</p>
        {/* 이미지 */}
        <img className={styles.stepimg} src={step5} />
        {/* 설명글 */}
        <p className={styles.steptext}>
          정답인 경우, 팝업창을 캡처해 중앙본부로 방문해 주세요!
        </p>
      </div>
{/* 
      function InputAnswer() { 
        let answer = '자세히 보아야 예쁘고, 오래 보아야 사랑스럽다. 너도 그렇다.';

        return ( 
          {answer === eventinput ? openModal && <SuccessModal closeModal = {setOpenModal} /> : <FalseModal closeModal = {setOpenModal}/>}
        )
      }  */}

      {openModal && <SuccessModal closeModal={setOpenModal} />} 

      eventinput
      {/* 삼항 연산자로 만든 다음, false에서 정답과 비교해서 유동적으로 만든 후 맞으면 success 모달이 뜨게끔, 틀리면 false 모달이 뜨게끔 */}
    </div>
  );
};
export default Event;
