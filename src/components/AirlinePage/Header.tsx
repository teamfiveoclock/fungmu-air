import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { ReactComponent as DownIcon } from '../../assets/down_line.svg';
import { ReactComponent as DownWhiteIcon } from '../../assets/down_white.svg';
import Flex from '../ui/Flex';
import Typography from '../ui/Typography';
import palette from '../../constants/palette';
import { ReactComponent as LogoBlue } from '../../assets/airline_logo_blue.svg';
import { ReactComponent as LogoWhite } from '../../assets/airline_logo_white.svg';

const Container = styled(Flex)<{
  $mainpage: boolean;
  isHeaderChanged: boolean;
}>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  z-index: 10;
  transition: all 0.5s ease;

  background-color: ${(p) => (p.$mainpage ? 'transparent' : 'white')};
  border-bottom: ${(p) => (p.$mainpage ? 'none' : '1px solid #d6d7dc')};

  ${({ $mainpage, isHeaderChanged }) =>
    (!$mainpage || isHeaderChanged) &&
    css`
      background-color: white;
      border-bottom: 1px solid #d6d7dc;
    `}
`;

const MenuLink = styled(Link)`
  position: relative;
  font-size: 18px;
  font-weight: 500;
  text-decoration: none;
  color: ${palette.GRAY90};
  cursor: pointer;
  display: flex;
  height: 80px;
  align-items: center;
  transition: all 0.5s ease;
  /* border-bottom: 2px solid transparent;
  border-top: 2px solid transparent; */

  &::after {
    position: absolute;
    content: '';
    bottom: 0;
    height: 2px;
    width: 0;
    background-color: #05a4db;
    left: 50%;
    transform: translateX(-50%);
    transition: all 0.3s ease;
  }

  &:hover {
    &::after {
      width: 100%;
    }
  }
`;

const LinkDiv = styled.div<{
  isMain: boolean;
  isTarget: boolean;
}>`
  ${({ isMain }) =>
    isMain &&
    css`
      a {
        color: ${palette.ETC_WHITE};
      }
    `};

  ${({ isTarget }) =>
    isTarget &&
    css`
      a {
        color: #05a4db;
        /* border-bottom: 2px solid #05a4db; */

        &::after {
          position: absolute;
          content: '';
          bottom: 0;
          height: 2px;
          width: 100%;
          background-color: #05a4db;
          left: 50%;
          transform: translateX(-50%);
          transition: all 0.3s ease;
        }
      }
    `};
`;

const Header = ({
  isMain,
  activeTab,
}: {
  isMain: boolean;
  activeTab: string;
}) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isHover, setIsHover] = useState<string>();
  const [isHeaderHover, setIsHeaderHover] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const isHeaderChanged =
    isHover !== undefined || scrollPosition > 20 || isHeaderHover;

  const menus = [
    {
      title: 'HOME',
      to: pathname,
      activeName: 'home',
    },
    {
      title: 'About Us',
      to: pathname,
      activeName: 'about-us',
    },
    {
      title: 'INFO',
      to: '/info/1',
      activeName: 'info',
    },
    {
      title: 'Community',
      to: '/community',
      activeName: 'community',
    },
  ];

  // 스크롤 이벤트 핸들러
  const handleScroll = () => {
    // window.scrollY를 사용하여 스크롤 위치를 가져옴
    const position = window.scrollY;
    setScrollPosition(position);
  };

  // 컴포넌트가 마운트되거나 업데이트 될 때마다 스크롤 이벤트 리스너 등록
  useEffect(() => {
    if (isMain) {
      window.addEventListener('scroll', handleScroll);
    }
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMain]);

  return (
    <Container
      align='center'
      justify='center'
      // gap={112}
      $mainpage={isMain}
      isHeaderChanged={isHeaderChanged}
      onMouseOver={() => setIsHeaderHover(true)}
      onMouseLeave={() => setIsHeaderHover(false)}
    >
      {isMain && !isHeaderChanged ? (
        <LogoWhite
          onClick={() => navigate('/')}
          style={{ cursor: 'pointer' }}
        />
      ) : (
        <LogoBlue onClick={() => navigate('/')} style={{ cursor: 'pointer' }} />
      )}
      <Flex gap={60} gutter={{ left: 183 }}>
        {menus.map(({ to, title, activeName }) => (
          <LinkDiv
            key={title}
            isMain={isMain && !isHeaderChanged}
            isTarget={isHover === activeName || activeTab === activeName}
            onMouseOver={() => {
              setIsHover(activeName);
            }}
            onMouseLeave={() => {
              setIsHover(undefined);
            }}
          >
            <MenuLink to={to}>{title}</MenuLink>
          </LinkDiv>
        ))}
      </Flex>
      <Flex
        gap={40}
        gutter={{ left: 112 }}
        style={{
          color:
            !isMain || isHeaderChanged ? palette.GRAY90 : palette.ETC_WHITE,
          cursor: 'pointer',
        }}
      >
        <Typography style={{ fontSize: 14 }}>로그인</Typography>
        <Flex align='center' gap={4}>
          <Typography style={{ fontSize: 14 }}>한국어</Typography>
          {!isMain || isHeaderChanged ? <DownIcon /> : <DownWhiteIcon />}
        </Flex>
      </Flex>
    </Container>
  );
};

export default Header;
