import styled from '@emotion/styled';
import Flex from '../../components/ui/Flex';
import Typography from '../../components/ui/Typography';
import { ReactComponent as ShareIcon } from '../../assets/share.svg';
import { ReactComponent as MoreIcon } from '../../assets/more_vertical.svg';
import { ReactComponent as RecommentIcon } from '../../assets/recomment.svg';

const Container = styled(Flex)`
  width: 1020px;
  margin: 136px auto 119px auto;
`;

const TitleDiv = styled(Flex)`
  width: 100%;
  border-bottom: 1px solid #d6d7dc;
  padding-bottom: 24px;
`;

const ContentDiv = styled(Flex)`
  width: 100%;
  padding: 31px 0 31px 0;
  border-bottom: 1px solid #d6d7dc;
`;

const ButtonDiv = styled(Flex)`
  width: 100%;
  padding-top: 24px;
`;

const Button = styled(Flex)`
  justify-content: center;
  align-items: center;
  height: 32px;
  border: 1px solid #e3e3e3;
  border-radius: 4px;
  padding: 6px 15px;
  font-size: 14px;
  font-weight: 500;
  color: #5b5b5b;

  span {
    color: #05a4db;
    /* color: #f9d212; */
    margin-left: 4px;
  }
`;

const CommentsDiv = styled(Flex)`
  width: 100%;
`;

const CommentItem = styled(Flex)`
  width: 100%;
  padding: 16px 0;
  border-bottom: 1px solid #d6d7dc;
`;

const RecommentItem = styled(CommentItem)``;

const CommunityDetailPage = () => {
  const comments = [
    {
      id: 1,
      name: '김*수',
      date: '2023.09.01',
      content: '에고 힘내세요ㅠㅠ',
    },
    {
      id: 2,
      name: '이*현',
      date: '2023.09.01',
      content: '그동안 마음 고생 심하셨겠어요 후배님🙏',
    },
    {
      id: 3,
      name: '김*황',
      date: '2023.09.01',
      content: '무슨일이람.. 너무 힘들었겠네요ㅠㅠ',
    },
    {
      id: 4,
      name: '정*의',
      date: '2023.09.01',
      content: '여러분 이거 다 주작입니다.',
      recomments: [
        {
          id: 5,
          name: '김*수',
          date: '2023.09.01',
          content: '헉 주작이라구여?! 🤔',
        },
        {
          id: 6,
          name: '정*의',
          date: '2023.09.02',
          content: '으.. 주작냄새! 그냥 죽어라!!!',
        },
      ],
    },
    {
      id: 7,
      name: '김*림',
      date: '2023.09.02',
      content: '와... 안비행?? 극혐이다',
    },
    {
      id: 8,
      name: '박*중',
      date: '2023.09.03',
      content: '선동글 최악이네;;;',
    },
    {
      id: 9,
      name: '목*성',
      date: '2023.09.04',
      content: '안비행 꺼져라!!!!',
    },
    {
      id: 10,
      name: '박*희',
      date: '2023.09.04',
      content: '왕따 각이네요. 이 사람이랑 얘기도 하지 맙시다ㅡㅡ',
    },
    {
      id: 11,
      name: '이*민',
      date: '2023.09.05',
      content: '허언증 쩌네! 안비행 이 사람 짤라야 할 듯!?!',
    },
    {
      id: 12,
      name: '김*이',
      date: '2023.09.05',
      content: '소름돋네.. 그냥 나가 뒤지세요~',
    },
  ];
  return (
    <Container dir='column'>
      <TitleDiv dir='column' justify='start'>
        <Flex
          align='center'
          justify='space-between'
          style={{ width: '100%' }}
          gap={8}
        >
          <Typography style={{ fontWeight: 600, fontSize: 24 }}>
            풍무항공 승무원 진예원, 그녀의 실체를 폭로합니다
          </Typography>
          <Flex align='center' gap={16}>
            <ShareIcon />
            <MoreIcon />
          </Flex>
        </Flex>
        <Flex align='center' gap={8}>
          <Typography style={{ fontWeight: 500, fontSize: 14 }}>
            안비행
          </Typography>
          <Typography
            style={{
              fontWeight: 400,
              fontSize: 12,
              color: '#979797',
            }}
          >
            2023.09.01 10:00
          </Typography>
        </Flex>
      </TitleDiv>
      <ContentDiv>
        악마 같은 승무원 진예원의 악행을 고발합니다.
        <br />
        <br />
        1. 비행 전 출근 시간에 맞춰서 모닝콜 해달라고 하기 (1분이라도 늦으면
        뺨을 때립니다)
        <br />
        2. 쇼핑할 때 내 카드로 명품 결제시키고 짐까지 들게하기 (걸음이 늦으면
        정강이를 걷어찹니다)
        <br />
        3. 차가운 칠러에 가둬놓고 바깥에서 잠가버리기 (감기와 각종 합병증을 달고
        삽니다)
        <br />
        4. 갤리에서 숟가락 집어 던지기, 포크로 정수리 찍어대기
        <br />
        5. 악의적으로 인사 평가 때 모든 항목 최하 점수 주기
        <br />
        <br />그 외에도 “그따구로 일할 거면 월급 나한테 반납해", “가정교육
        독학했니?” 등<br />
        인신공격과 제 부모님까지 욕보이는 언행도 서슴지 않았습니다.
        <br />
        <br />이 지옥에서 해방되고 싶습니다.
        <br />
        제발 이 폭로글로 조치가 되기를 바랍니다.
      </ContentDiv>
      <ButtonDiv justify='space-between'>
        <Flex gap={8}>
          <Button>
            댓글 <span> 10</span>
          </Button>
          <Button>
            추천해요 <span> 3</span>
          </Button>
        </Flex>
        <Button>
          스크랩 <span> 3</span>
        </Button>
      </ButtonDiv>
      <Flex
        style={{
          padding: 16,
          width: '100%',
          height: 80,
          border: '1px solid #E3E3E3',
          borderRadius: 4,
        }}
        justify='space-between'
        gutter={{ top: 16 }}
      >
        <Typography style={{ color: '#C6C6C6', fontSize: 14 }}>
          댓글을 남겨보세요.
        </Typography>
        <Flex
          align='center'
          justify='center'
          style={{
            width: 56,
            height: 32,
            borderRadius: 4,
            background: '#05A4DB',
            // background: '#f9d212',
            color: '#fff',
            alignSelf: 'flex-end',
            fontSize: 14,
            fontWeight: 500,
          }}
        >
          등록
        </Flex>
      </Flex>
      <CommentsDiv dir='column'>
        {comments.map(({ id, name, date, content, recomments }) => (
          <CommentItem key={id} dir='column' gap={5}>
            <Flex gap={8} align='center'>
              <Typography
                style={{
                  fontSize: 14,
                  fontWeight: 400,
                }}
              >
                {name}
              </Typography>
              <Typography
                style={{
                  fontWeight: 400,
                  fontSize: 12,
                  color: '#979797',
                }}
              >
                {date}
              </Typography>
            </Flex>
            <Flex style={{ fontSize: 14, fontWeight: 400 }}>{content}</Flex>
            {recomments?.map(({ id, name, date, content }) => (
              <RecommentItem
                key={id}
                style={{
                  marginTop: 12,
                  paddingLeft: 32,
                  paddingBottom: 0,
                  borderBottom: 'none',
                  borderTop: '1px solid #d6d7dc',
                }}
                gap={8}
              >
                <RecommentIcon />
                <Flex dir='column' gap={4}>
                  <Flex gap={8} align='center'>
                    <Typography
                      style={{
                        fontSize: 14,
                        fontWeight: 400,
                      }}
                    >
                      {name}
                    </Typography>
                    <Typography
                      style={{
                        fontWeight: 400,
                        fontSize: 12,
                        color: '#979797',
                      }}
                    >
                      {date}
                    </Typography>
                  </Flex>
                  <Flex
                    style={{
                      fontSize: 14,
                      fontWeight: 400,
                    }}
                  >
                    {content}
                  </Flex>
                </Flex>
              </RecommentItem>
            ))}
          </CommentItem>
        ))}
      </CommentsDiv>
    </Container>
  );
};

export default CommunityDetailPage;
