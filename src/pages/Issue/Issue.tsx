/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState, useRef } from 'react';
import AppContext from '../../AppContext';
import IssueItem from 'pages/Issue/IssueItem/IssueItem';
import Loading from 'components/Loading';
import { getIssueList } from 'api/issueApi';

let pageNum = 1;

const Issue = () => {
  const appContext = useContext(AppContext);
  const { setIssueListData } = appContext;

  const isScroll = useRef(false);
  const [isLoading, setIsLoading] = useState(true);

  const getRequest = async (pageNum: number) => {
    const response = await getIssueList({
      page: pageNum,
      per_page: 10,
      state: 'open',
      sort: 'comments',
    });

    if (response.status === 200) {
      setTimeout(() => {
        setIsLoading(false);

        // [리팩토링] pageNum이 1일때만 광고 데이터를 넣어줘야 함.
        // 근데 그걸 위해 pageNum을 활용했는데, 그러기보단 true,false를 값으로 가지는 변수를 하나 만들어 flag 처리하는게 좋음
        // 왜냐면, pageNum은 계속 연산되는건데 , 여기서 이렇게 활용되면 뭔가 연산하는건가? 생각되고
        // 별도의 변수를 flag로 사용하면 이 코드의 의미가 명확해지기 때문에
        if (pageNum === 1) {
          const ad = { type: 'ad', id: Date.now() };
          response.data.splice(4, 0, ad);
        }

        setIssueListData(prev => [...prev, ...response.data]);
      }, 1000);
    }
  };

  useEffect(() => {
    if (pageNum !== 1) {
      return;
    }
    getRequest(pageNum);
    pageNum += 1;
  }, []);

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;

    if (isScroll.current === false && window.innerHeight + window.scrollY >= scrollHeight - 50) {
      isScroll.current = true;
      pageNum += 1;

      getRequest(pageNum);
    }

    setTimeout(() => {
      isScroll.current = false;
      setIsLoading(true);
    }, 500);
  };

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
