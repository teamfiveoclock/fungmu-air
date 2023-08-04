import styled from '@emotion/styled';
import { useLocation, useNavigate } from 'react-router-dom';
import palette from '../../constants/palette';
import Flex from '../ui/Flex';
import Typography from '../ui/Typography';
import { ReactComponent as FooterLogoIcon } from '../../assets/airline_logo_footer.svg';

const FooterDiv = styled.footer<{ ismain: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 104px;
  background-color: ${(p) => (p.ismain ? `${palette.ETC_WHITE}` : '#FAFAFA')};
  z-index: 10;
`;

const FooterSpan = styled(Flex)`
  span {
    font-size: 14px;
    color: #222;
  }
`;

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isMain = location.pathname.endsWith('airline');

  return (
    <FooterDiv ismain={isMain}>
      <Flex gap={57} align='center'>
        <FooterLogoIcon
          onClick={() => navigate('/')}
          style={{ cursor: 'pointer' }}
        />
        <FooterSpan gap={8} align='center'>
          <span>회사소개</span>
          <span>|</span>
          <span>개인정보처리방침</span>
          <span>|</span>
          <span>이용약관</span>
          <span>|</span>
          <span>기타안내</span>
        </FooterSpan>
      </Flex>
      <Typography
        style={{
          fontSize: 12,
          fontWeight: 400,
          color: palette.GRAY90,
          opacity: 0.5,
        }}
        gutter={{ left: 346 }}
      >
        Copyright ⓒ 2023 풍무항공 All Right Reserved
      </Typography>
    </FooterDiv>
  );
};

export default Footer;
