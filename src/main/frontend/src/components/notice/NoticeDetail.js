import React from "react";
import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from "../../app-config";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";

const NoticeDetail = () => {
  const { noticeId } = useParams();
  const [notice, setNotice] = useState({});
  const [prev, setPrev] = useState(undefined);
  const [next, setNext] = useState(undefined);
  useEffect(() => {
    axios.get(`${API_BASE_URL}/cs/${noticeId}`).then((response) => {
      setNotice(response.data.notice);
    });
  }, [noticeId]);

  return (
    <>
      {Object.keys(notice).length !== 0 ? (
        <div className="noticeDetailMainDiv">
          <div className="noticeDetaildiv">
            <strong>{notice.noticeTitle}</strong>
            <p>{notice.noticeDate}</p>
          </div>
          <div
            className="noticeContent"
            dangerouslySetInnerHTML={{ __html: notice.noticeContent }}
          ></div>
          <div className="noticeDetailDivB">
            {prev === undefined ? null : (
              <div>
                <p>이전글</p>
                <Link className="otherNotice" to={`/cs/${prev.id}`}>
                  {prev.noticeTitle}
                </Link>
              </div>
            )}
            {next === undefined ? null : (
              <div>
                <p>다음글</p>
                <Link className="otherNotice" to={`/cs/${next.id}`}>
                  {next.noticeTitle}
                </Link>
              </div>
            )}
          </div>
        </div>
      ) : null}

      <div
        className="noticeBottom"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Link to="/cs" className="detailListBtn">
          목록 보기
        </Link>
      </div>
    </>
  );
};

export default NoticeDetail;
