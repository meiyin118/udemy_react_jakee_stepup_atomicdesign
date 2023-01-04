import styled from "styled-components";
export const SecondaryButton = (props) => {
  const { children } = props;
  return <SButton>{children}</SButton>;
};
const SButton = styled.button`
  background-color: red;
  color: #fff;
  padding: 6px 24px;
  outline: none;
  border: none;
  border-radius: 4px;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
    background-color: gray;
  }
`;
