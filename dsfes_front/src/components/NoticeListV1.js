import React, { useState, useEffect } from "react";
import axios from "axios";
import NoticeItem from "./NoticeItem";

const NoticeListV1 = () => {
  const [contents, setContents] = useState([]);
  // 데이터 불러오기
  useEffect(() => {
    axios
      .get("http://localhost:3001/notice")
      .then((res) => {
        const filtering = [];
        for (var i = 0; i < res.data.length; i++) {
          if (res.data[i].noTag === 1) {
            filtering.push(res.data[i]);
          }
        }
        setContents(filtering);
      })
      .catch((error) => console.log("Network Error : ", error));
  }, []);

  return (
    <div style={{ marginTop: "25px" }}>
      {contents.reverse().map((content) => (
        <NoticeItem content={content} key={content.id} />
      ))}
    </div>
  );
};

export default NoticeListV1;
