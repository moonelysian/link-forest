import styled from 'styled-components';

export const Wrapper = styled.div<{ background: string }>`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  margin-top: -20px;
  background: ${(props) => props.background};
  border-radius: 100%;
  height: 36px;
  width: 36px;
  z-index: 100;
  cursor: pointer;
`;

interface Props {
  background: string;
}

const DeleteMark = ({ background }: Props): JSX.Element => {
  return (
    <Wrapper background={background}>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ margin: 'auto' }}
      >
        <path d="M2 2L14 14" stroke="black" strokeWidth="1.5" />
        <path d="M2 14L14 2" stroke="black" strokeWidth="1.5" />
      </svg>
    </Wrapper>
  );
};

export default DeleteMark;
