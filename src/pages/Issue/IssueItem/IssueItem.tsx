import { useContext, useState, useRef, useEffect } from 'react';
import AppContext from '../../../AppContext';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { IssueDataType } from '../../../AppContext';

const IssueItem = () => {
  const appContext = useContext(AppContext);
  const issueListData = appContext.issueListData; // [] , [{},{},{}...]

  const navigator = useNavigate();

  //  ✅ 0.무한로딩 필요 변수들
  const [slicedData, setSlicedData] = useState<IssueDataType[]>([]);
  const isLoading = useRef(false);
  let lastId = 7;

  //  ✅ 1.처음 7개 렌더
  useEffect(() => {
    if (issueListData.length === 0) {
      return;
    }
    const DefaultData = issueListData.slice(0, lastId); // 7개씩
    setSlicedData(DefaultData);
  }, [issueListData, lastId]);

  // ✅ 3. 스크롤 이벤트 발생
  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;

    if (isLoading.current === false && window.innerHeight + window.scrollY >= scrollHeight - 200) {
      isLoading.current = true;

      lastId += slicedData.length;
      const updateData = issueListData.slice(0, lastId);

      setSlicedData(updateData);

      // 마지막 데이터면 스크롤 이벤트 발생x
      if (issueListData.length === slicedData.length) {
        isLoading.current = true;
        return;
      }
      isLoading.current = false;
    }
  };

  // ✅ 2.처음 스크롤 이벤트 발생시만 handleScroll 실행되도록
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slicedData]);

  return (
    <ItemWrapper>
      {slicedData[0] &&
        slicedData.map(data => {
          if (data.type === 'ad') {
            return (
              <a
                href="https://thingsflow.com/ko/home"
                target="_blank"
                key={data.id}
                rel="noreferrer"
              >
                <AdBox>
                  <LogoImg src="/띵스플로우.png" alt="img" />
                </AdBox>
              </a>
            );
          }

          return (
            <ItemBox key={data.id} onClick={() => navigator(`${data.number}`)}>
              <div>{data.number}</div>

              <div>
                <Title>{data.title}</Title>
                <p>
                  <span>작성자 : {data.user.login} , </span>
                  <span> 작성일 : {new Date(data.created_at).toLocaleString()}</span>
                </p>
              </div>

              <div>코멘트 : {data.comments}</div>
            </ItemBox>
          );
        })}
    </ItemWrapper>
  );
};

export default IssueItem;

const ItemWrapper = styled.div`
  width: 70%;
  margin: 2rem auto;
`;

const AdBox = styled.div`
  height: 6rem;
  margin: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: aliceblue;
`;

const LogoImg = styled.img`
  height: inherit;
`;

const ItemBox = styled.div`
  display: grid;
  grid-template-columns: 10% 80% 10%;
  grid-template-rows: 1fr;
  border-bottom: 1px solid black;

  padding: 1.5rem 0;
`;

const Title = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  padding-right: 1.5rem;
`;
