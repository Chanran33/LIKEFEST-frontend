import React, { useEffect, useState, useCallback } from "react";
import BoardItem from "./BoardItem";
import styles from "../css/Board.module.css";

const BoardList = ({ texts }) => {
  const [datalist, setDatalist] = useState([]);
  console.log("datalist의 개수 : " + datalist.length);

  //자를 길이
  const DATA_SIZE = 20;

  const [count, setCount] = useState(1);

  const fetchMoreData = useCallback(() => {
    setDatalist(texts.slice(-DATA_SIZE * count));
  }, [count, texts]);

  const handleScroll = useCallback(() => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (datalist.length < texts.length) {
      if (scrollTop + clientHeight + 250 >= scrollHeight) {
        fetchMoreData();
        setCount((count) => count + 1);
      }
    }
  }, [datalist.length, fetchMoreData, texts.length]);

  useEffect(() => {
    setDatalist(texts.slice(-DATA_SIZE));
  }, [texts]);

  useEffect(() => {
    // scroll event listener 등록
    window.addEventListener("scroll", handleScroll);

    return () => {
      // scroll event listener 해제
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className={styles.scrollcontent}>
      {datalist
        .slice()
        .reverse()
        .map((text) => (
          <BoardItem text={text} key={text.id} />
        ))}
    </div>
  );
};

export default BoardList;
