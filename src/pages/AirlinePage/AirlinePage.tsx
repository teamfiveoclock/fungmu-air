import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

import { ReactComponent as MainIcon } from '../../assets/airline_logo_main.svg';
import Flex from '../../components/ui/Flex';
import { images } from '../../constants/images';

const BGDiv = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${images.ep1.airline});
  background-size: cover;
  background-position: center;
`;

const BackgroundDim = styled(Flex)`
  position: absolute;
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
`;

const AirlinePage = () => {
  const [zoomed, setZoomed] = useState(false);
  useEffect(() => {
    document.title = '풍무항공';
    window.scrollTo({ top: 0 });
    setZoomed(true);
  }, []);

  return (
    <>
      <BGDiv
        style={{
          transform: zoomed ? 'scale(1.1)' : 'scale(1.0)',
          transition: 'all 5s ease',
        }}
      ></BGDiv>
      <BackgroundDim align='center' justify='center'>
        <MainIcon />
      </BackgroundDim>
    </>
  );
};

export default AirlinePage;
