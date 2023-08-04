import styled from '@emotion/styled';
import Flex from '../../components/ui/Flex';
import Typography from '../../components/ui/Typography';
import { ReactComponent as DownIcon } from '../../assets/down_light.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import { ReactComponent as PrevIcon } from '../../assets/prev.svg';
import { ReactComponent as PrevActiveIcon } from '../../assets/prev_active.svg';
import { ReactComponent as NextIcon } from '../../assets/next.svg';
import { ReactComponent as NextActiveIcon } from '../../assets/next_active.svg';

const Container = styled.div`
  width: 1040px;
  margin: 0 auto 349px auto;
  padding-top: 136px;
  min-height: calc(100vh - 485px);
`;

const StyledTable = styled.table`
  margin-top: 24px;
  width: 1040px;
  border-collapse: collapse;

  th {
    background-color: #fafafa;
    border-top: 1px solid #5b5b5b;
    border-bottom: 1px solid #e3e3e3;
    padding: 10px 24px;
    font-size: 14px;
  }
  td {
    text-align: center;
    height: 40px;
    border-bottom: 1px solid #e3e3e3;
    font-size: 14px;
  }
  .td-start {
    text-align: start;
  }
`;

const Button = styled(Flex)`
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 32px;
  border-radius: 4px;
  font-size: 14px;
  color: #5b5b5b;
  background-color: white;
`;

const PageNum = styled(Flex)`
  color: #5b5b5b;
  cursor: pointer;
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
`;

const CommunityPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const page = Number(searchParams.get('page')) || 1;

  const lists = [
    [
      {
        id: 1910,
        title: '입사 5년차 대리입니다. 고민 상담 해주세요..',
        viewed: 11,
        date: '2023.12.18',
      },
      {
        id: 1909,
        title: '극킹갓엠페러제너럴충무공풍무항공',
        viewed: 384,
        date: '2023.11.15',
      },
      {
        id: 1908,
        title: '승무원 결혼 상대로 솔직히 어때?',
        viewed: 27,
        date: '2023.10.21',
      },
      {
        id: 1907,
        title: '(끌올) 모니터만 보니 눈 나빠짐 ㅜ영양제 추천 받아여',
        viewed: 13,
        date: '2023.10.04',
      },
      {
        id: 1906,
        title: '신입 연봉 얼마 받아?',
        viewed: 67,
        date: '2023.09.30',
      },
    ],
    [
      {
        id: 1905,
        title: '기장 vs 의사',
        viewed: 43,
        date: '2023.09.12',
      },
      {
        id: 1904,
        title: '풍무항공 승무원 진예원, 그녀의 실체를 폭로합니다',
        viewed: 384,
        date: '2023.09.01',
        active: true,
      },
      {
        id: 1903,
        title: '엄마 풍무항공 들어오면 여친생긴다며요 ㅡㅡ',
        viewed: 31,
        date: '2023.07.01',
      },
      {
        id: 1902,
        title: '시니어리티 요즘도 빡세냐사',
        viewed: 19,
        date: '2023.06.29',
      },
      {
        id: 1901,
        title: '나이 많은 후배.. 호칭 정리 어떻게 하셨나요',
        viewed: 23,
        date: '2023.05.14',
      },
    ],
  ];

  return (
    <Container>
      <Flex dir='column' align='start' gap={8}>
        <Typography
          style={{
            color: '#000',
            fontSize: 18,
            fontWeight: 500,
          }}
        >
          최신글 보기
        </Typography>
        <Typography
          style={{
            color: '#5B5B5B',
            fontSize: 14,
            fontWeight: 400,
          }}
        >
          커뮤니티에 올라온 새 글을 모아서 보여드립니다.
        </Typography>
      </Flex>
      <StyledTable>
        <thead>
          <tr>
            <th style={{ width: 88 }}>번호</th>
            <th style={{ width: 760 }}>제목</th>
            <th style={{ width: 96 }}>조회수</th>
            <th style={{ width: 96 }}>등록일</th>
          </tr>
        </thead>
        <tbody>
          {lists[page - 1]?.map(({ id, title, date, viewed, active }) => (
            <tr key={id}>
              <td>{id}</td>
              <td
                className='td-start'
                onClick={() => {
                  if (active) {
                    navigate(`/community/${id}`);
                  }
                }}
                style={{ cursor: 'pointer' }}
              >
                {title}
              </td>
              <td>{viewed}</td>
              <td>{date}</td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
      <Flex
        style={{
          marginTop: 16,
          width: '100%',
          marginBottom: 36,
        }}
        justify='center'
        align='center'
        gap={304}
      >
        <Button
          justify='center'
          align='center'
          style={{ border: '1px solid #E3E3E3' }}
        >
          목록
        </Button>
        <Flex gap={4}>
          {page === 1 ? (
            <PrevIcon style={{ cursor: 'pointer' }} />
          ) : (
            <PrevActiveIcon
              style={{ cursor: 'pointer' }}
              onClick={() => {
                searchParams.set('page', '1');
                navigate('/community?page=1');
              }}
            />
          )}
          <PageNum
            style={{
              backgroundColor: page === 1 ? '#05A4DB' : 'white',
              // backgroundColor: page === 1 ? '#F9D212' : 'white',
              borderRadius: page === 1 ? '4px' : '0px',
              color: page === 1 ? 'white' : '#5b5b5b',
              // color: page === 1 ? '#5B5B5B' : '#5b5b5b',
            }}
            onClick={() => {
              searchParams.set('page', '1');
              navigate('/community?page=1');
            }}
          >
            1
          </PageNum>
          <PageNum
            style={{
              backgroundColor: page === 2 ? '#05A4DB' : 'white',
              // backgroundColor: page === 2 ? '#F9D212' : 'white',
              borderRadius: page === 2 ? '4px' : '0px',
              color: page === 2 ? 'white' : '#5b5b5b',
              // color: page === 2 ? '#5B5B5B' : '#5b5b5b',
            }}
            onClick={() => {
              searchParams.set('page', '2');
              navigate('/community?page=2');
            }}
          >
            2
          </PageNum>
          <PageNum>3</PageNum>
          <PageNum>4</PageNum>
          <PageNum>5</PageNum>
          <PageNum>...</PageNum>
          <PageNum>382</PageNum>
          {
            <NextActiveIcon
              style={{ cursor: 'pointer' }}
              onClick={() => {
                if (page === 1) {
                  searchParams.set('page', '2');
                  navigate('/community?page=2');
                }
              }}
            />
          }
        </Flex>

        <Button
          justify='center'
          align='center'
          style={{
            background: '#05A4DB',
            // background: '#F9D212',
            color: 'white',
            // color: '#5B5B5B',
          }}
        >
          글쓰기
        </Button>
      </Flex>
      <Flex gap={4} style={{ width: '100%' }} justify='center'>
        <Button
          style={{
            color: '#5B5B5B',
            fontWeight: 500,
            border: '1px solid #E3E3E3',
            width: 110,
          }}
        >
          제목+내용
          <DownIcon />
        </Button>
        <Button
          style={{
            width: 200,
            border: '1px solid #E3E3E3',
          }}
        />
        <Button
          style={{
            width: 56,
            border: '1px solid #E3E3E3',
          }}
        >
          검색
        </Button>
      </Flex>
    </Container>
  );
};

export default CommunityPage;
