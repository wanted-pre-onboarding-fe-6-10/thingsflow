import { getIssueList } from 'api/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IssueType } from 'src/type/type';

const Detail = () => {
  const { number } = useParams();
  const issueURL = `/issues/`;
  const [issueDetail, setIssueDetail] = useState<IssueType | undefined>();
  const getIssueDetail = async () => {
    const response = await getIssueList(issueURL + number);
    setIssueDetail(response);
  };

  useEffect(() => {
    getIssueDetail();
  }, []);

  return (
    <div>
      <>{issueDetail?.user.login}</>
      <>{issueDetail?.created_at}</>
      <>{issueDetail?.number}</>
      <>{issueDetail?.title}</>
      <>{issueDetail?.comments}</>
      <>{issueDetail?.user.avatar_url}</>
      <>{issueDetail?.body}</>
    </div>
  );
};

export default Detail;
