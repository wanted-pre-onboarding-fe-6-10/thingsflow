import { useContext, useState, useRef, useEffect } from 'react';
import AppContext from '../../../AppContext';
import styled from 'styled-components';
import { IssueDataType } from '../../../AppContext';
import { Link } from 'react-router-dom';

const IssueItem = () => {
  const appContext = useContext(AppContext);
  const { issueListData } = appContext; // [] , [{},{},{}...]

  //  ✅ 0.무한로딩 필요 변수들
  const [slicedData, setSlicedData] = useState<IssueDataType[]>([]);
  const isScroll = useRef(false);
  let lastId = 7;

  //  ✅ 1.처음 7개 렌더
  useEffect(() => {
    if (issueListData.length === 0) {
      return;
    }
    const DefaultData = issueListData.slice(0, lastId);
    setSlicedData(DefaultData);
  }, [issueListData, lastId]);

  // ✅ 3. 스크롤 이벤트 발생
  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;

    if (isScroll.current === false && window.innerHeight + window.scrollY >= scrollHeight - 200) {
      isScroll.current = true; // [3-1] scroll시 마다 계속 handleScroll함수 호출되면 안되서, 처음 scroll시만 handleScroll 호출되게 하기위해

      lastId += slicedData.length;
      const updateData = issueListData.slice(0, lastId);

      setSlicedData(updateData);

      // [3-3]마지막 데이터면 스크롤 이벤트 발생을 막음
      if (issueListData.length === slicedData.length) {
        isScroll.current = true;
        return;
      }

      // [3-2] 이래야 다음 스크롤때 scroll이벤트 발생 할 때 -> handleScroll 실행되서
      isScroll.current = false;
    }
  };

  // ✅ 2. detail 페이지로 이동할때, 디테일 페이지에서는 scorll 이벤트 빼야되서 remove함
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
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
            <ItemBox key={data.id}>
              <div>{data.number}</div>
              <div>
                <Link to={`${data.number}`}>
                  <Title>{data.title}</Title>
                </Link>
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
