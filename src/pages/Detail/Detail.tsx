import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IssueType } from 'utils/Type';

const Detail = () => {
  const params = useParams();
  const [detail, setDetail] = useState<IssueType>();
  const issueAxios = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
    },
  });
  const getDetail = async () => {
    const res = await issueAxios.get(`/${params.number}`);
    setDetail(res.data);
  };
  useEffect(() => {
    if (detail) return;
    getDetail();
  });

  return (
    <>
      <div>{detail?.number}</div>
      <div>{detail?.title}</div>
      <div>{detail?.user.id}</div>
      <div>{detail?.created_at}</div>
      <div>{detail?.comments}</div>
      <img src={detail?.user.avatar_url} alt="" />
      <div>{detail?.body}</div>
    </>
  );
};

export default Detail;
