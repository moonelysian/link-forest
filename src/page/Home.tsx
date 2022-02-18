import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 50px 10px;
  max-width: 420px;
  margin: 0 auto;
`;
const ProfileArea = styled.div`
  width: 100%;
  text-align: center;
`;
const ContentArea = styled.div`
  width: 85%;
  margin: 30px auto;
`;

const Block = styled.div`
  width: 100%;
  border-radius: 16px;
  background: #fafafa;
  padding: 20px 15px;
  box-shadow: 9px 9px 18px #d5d5d5, -9px -9px 18px #ffffff;

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  &.is-active {
    box-shadow: inset 9px 9px 18px #d5d5d5, inset -9px -9px 18px #ffffff;
  }

  &.vertical {
  }

  &.horizion {
    display: flex;
    align-items: center;
  }
`;

const ContentTitle = styled.div`
  text-align: center;
  margin-bottom: 10px;
  font-weight: 700;
  white-space: pre-wrap;
  word-break: break-word;
`;

const Video = styled.iframe``;

const Home = (): JSX.Element => {
  const activeBlock = (classList: DOMTokenList, link: string) => {
    classList.add('is-active');
    location.assign(link);
  };

  return (
    <Wrapper>
      {/* 프로필 영역 */}
      <ProfileArea>
        <img width="110px" src="https://via.placeholder.com/110" alt="" />
        <div>title</div>
        <div>description</div>
      </ProfileArea>
      {/* 내용 영역 */}
      <ContentArea>
        <ContentTitle>텍스트 텍스트 텍스트 텍스트 텍스트</ContentTitle>
        <Block
          onClick={(e) => {
            activeBlock(e.currentTarget.classList, 'https://www.naver.com/');
          }}
        >
          일반링크
        </Block>
        <Block
          className="horizion"
          onClick={(e) => {
            activeBlock(e.currentTarget.classList, 'https://www.naver.com/');
          }}
        >
          <img
            src="https://via.placeholder.com/80"
            alt=""
            style={{ borderRadius: '16px' }}
          />
          <p style={{ marginLeft: '10px' }}>이미지와 함께하는 블록</p>
        </Block>
        <Block
          onClick={(e) => {
            activeBlock(e.currentTarget.classList, 'https://www.naver.com/');
          }}
        >
          <img
            src="https://via.placeholder.com/400"
            alt=""
            style={{ borderRadius: '16px', width: '100%' }}
          />
          <p style={{ marginTop: '20px' }}>이미지와 함께하는 블록</p>
        </Block>
        <Video
          width="100%"
          height="240px"
          src="https://www.youtube.com/embed/g7c0W-8rNmw"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ borderRadius: '16px' }}
        ></Video>
      </ContentArea>
    </Wrapper>
  );
};

export default Home;
