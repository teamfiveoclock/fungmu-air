import styled from '@emotion/styled';
import Flex from '../../components/ui/Flex';
import Typography from '../../components/ui/Typography';
import { ReactComponent as DownIcon } from '../../assets/down_line.svg';
import { ReactComponent as UpIcon } from '../../assets/up_line.svg';

const Container = styled(Flex)`
  width: 100%;
  height: 1256px;
  padding: 133px 200px 0 200px;
`;

const ContentDiv = styled(Flex)`
  width: 100%;
  margin-top: 56px;
  border-top: 1px solid #5b5b5b;
  padding: 24px 0;
  border-bottom: 1px solid #d6d7dc;
`;

const TitleDiv = styled(Flex)``;

const Button = styled(Flex)`
  width: 200px;
  height: 56px;
  background-color: #05a4db;
  /* background-color: #f9d212; */
  border-radius: 4px;
  color: white;
  /* color: #5b5b5b; */
  font-size: 18px;
  font-weight: 400;
  padding: 16px 82px;
  margin: 32px 0 80px 0;
`;

const ListItem = styled(Flex)`
  padding: 23px 47px;
  border-top: 1px solid #d6d7dc;
  border-bottom: 1px solid #d6d7dc;
  width: 100%;
`;

const InfoPage = () => {
  return (
    <Container dir='column' align='center'>
      <Typography
        style={{
          fontSize: 34,
          fontWeight: 600,
          color: '#222',
        }}
      >
        INFO
      </Typography>
      <ContentDiv dir='column' align='start'>
        <TitleDiv gap={8} dir='column'>
          <Typography
            style={{
              fontSize: 24,
              fontWeight: 600,
              color: '#222',
            }}
          >
            [공지] 징계처분 결정 통지
          </Typography>
          <Flex gap={4} align='center'>
            <Typography style={{ fontWeight: 500, fontSize: 14 }}>
              풍무항공 징계위원회
            </Typography>
            <Typography
              style={{
                fontWeight: 400,
                fontSize: 12,
                color: '#979797',
              }}
            >
              2023.09.10 16:30
            </Typography>
          </Flex>
        </TitleDiv>
        <Flex
          style={{
            padding: '32px 0 0 0',
            width: '100%',
          }}
          dir='column'
        >
          <Typography>
            안녕하십니까, 풍무항공 징계위원회입니다.
            <br />
            2023년 9월 1일 자로 사내 게시판에 올라온 사원 안비행의 게시글은 진상
            조사 결과,
            <br />
            대리 진예원에 대한 내용 대부분이 사실무근으로 밝혀졌음을 알리는
            바입니다.
            <br />
            이에 따라 위원회 5조 5항에 의거하여 아래와 같이 결정하였기에 통보해
            드립니다.
          </Typography>
          <p
            style={{
              whiteSpace: 'pre',
              margin: '32px auto',
            }}
          >
            {`-  아     래  -`}
          </p>
          <p
            style={{
              whiteSpace: 'pre',
            }}
          >
            {`-    이      름 :   안비행

-    직      급 :   사원

-    징계처분 :   감봉 1월 처분

-    이      유 :   허위 사실 유포`}
          </p>
        </Flex>
      </ContentDiv>
      <Button align='center' justify='center'>
        목록
      </Button>
      <ListItem align='center'>
        <Flex align='center' style={{ marginRight: 56 }} gap={16}>
          <UpIcon />
          <Typography>다음글</Typography>
        </Flex>
        <Typography
          style={{
            fontSize: 18,
            fontWeight: 600,
            color: '#222',
          }}
        >
          [안내] 풍무항공 이달의 우수 직원 발표
        </Typography>
      </ListItem>
      <ListItem align='center' style={{ borderTop: 'none' }}>
        <Flex align='center' gap={16} style={{ marginRight: 56 }}>
          <DownIcon />
          <Typography>이전글</Typography>
        </Flex>
        <Typography
          style={{
            fontSize: 18,
            fontWeight: 600,
            color: '#222',
          }}
        >
          [채용] 하반기 신입 객실승무원 모집 안내
        </Typography>
      </ListItem>
    </Container>
  );
};

export default InfoPage;
