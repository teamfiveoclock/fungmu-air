import styled from '@emotion/styled';
import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import Header from '../../components/AirlinePage/Header';
import Footer from '../../components/AirlinePage/Footer';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const AirlinePageTemplate = () => {
  const { pathname } = useLocation();

  const isMain = pathname === '/';

  const getActiveTab = () => {
    if (pathname === '/') return 'main';
    if (pathname.startsWith('/info')) return 'info';
    if (pathname.startsWith('/community')) return 'community';

    return 'main';
  };

  useEffect(() => {
    document.title = '풍무항공';
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <Container>
      <Header isMain={isMain} activeTab={getActiveTab()} />
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <Outlet />
        <Footer />
      </div>
    </Container>
  );
};

export default AirlinePageTemplate;
