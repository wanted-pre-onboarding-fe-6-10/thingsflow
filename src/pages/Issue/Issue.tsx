/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState, useRef } from 'react';
import AppContext from '../../AppContext';
import IssueItem from './IssueItem/IssueItem';
import Loading from 'components/Loading';
import { getIssueList } from '../../api/issueApi';

let itemNum = 7;

const Issue = () => {
  const appContext = useContext(AppContext);
  const { setIssueListData } = appContext;

  const isScroll = useRef(false); // 무한로딩 실행여부 컨드롤
  const [isLoading, setIsLoading] = useState(true); // 로딩화면 보여줄지 여부

  const getRequest = async (itemNum: number) => {
    const response = await getIssueList({
      page: '1',
      per_page: itemNum,
      state: 'open',
      sort: 'comments',
    });

    const response1 = await getIssueList({
      page: '1',
      per_page: 7,
      state: 'open',
      sort: 'comments',
    });

    const response2 = await getIssueList({
      page: '2',
      per_page: 7,
      state: 'open',
      sort: 'comments',
    });

    const response3 = await getIssueList({
      page: '1',
      per_page: 14,
      state: 'open',
      sort: 'comments',
    });

    console.log(response1.data);
    console.log(response2.data);
    console.log(response3.data);

    // if (response.status === 200) {
    //   setTimeout(() => {
    //     setIsLoading(false);

    //     const ad = { type: 'ad', id: Date.now() };
    //     response.data.splice(4, 0, ad);

    //     setIssueListData(response.data);
    //   }, 1000);
    // }
  };

  // ✅1. 처음에 데이터 호출 후 렌더함
  useEffect(() => {
    getRequest(itemNum);
  }, []);

  // ✅ 3. 스크롤 이벤트 발생
  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;

    if (isScroll.current === false && window.innerHeight + window.scrollY >= scrollHeight - 50) {
      isScroll.current = true; // [3-1] scroll시 마다 계속 handleScroll함수 호출되면 안되서, 처음 scroll시만 handleScroll 호출되게 하기위해
      itemNum += 7;

      getRequest(itemNum);
    }

    // [3-2] 이래야 다음 스크롤때 scroll이벤트 발생 할 때 -> handleScroll 실행되서
    setTimeout(() => {
      isScroll.current = false;
      setIsLoading(true);
    }, 500);
  };

  // ✅ 2. detail 페이지로 이동할때, 디테일 페이지에서는 scorll 이벤트 빼야되서 remove함
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <IssueItem />
      <div style={{ height: '8rem' }}>{isLoading && <Loading />}</div>
    </div>
  );
};

export default Issue;
