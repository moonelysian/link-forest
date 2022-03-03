import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 50px 10px;
  width: 420px;
  margin: 0 auto;
  background: rgba(232, 232, 232, 0.1);

  [data-rbd-draggable-context-id] {
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
`;
export const ProfileArea = styled.div`
  width: 100%;
  text-align: center;
`;
export const ContentArea = styled.div`
  width: 85%;
  margin: 30px auto;
`;

export const Block = styled.div`
  width: 100%;
  border-radius: 16px;
  background: #fafafa;
  padding: 20px 15px;
  box-shadow: 9px 9px 18px #d5d5d5, -9px -9px 18px #ffffff;
  position: relative;

  &.is-active {
    box-shadow: inset 9px 9px 18px #d5d5d5, inset -9px -9px 18px #ffffff;
  }

  &.horizion {
    display: flex;
    align-items: center;
  }
`;

export const ContentTitle = styled.div`
  text-align: center;
  margin-bottom: 10px;
  font-weight: 700;
  white-space: pre-wrap;
  word-break: break-word;
`;

export const Video = styled.iframe`
  border-radius: 16px;
  width: 100%;
  height: 240px;
`;
