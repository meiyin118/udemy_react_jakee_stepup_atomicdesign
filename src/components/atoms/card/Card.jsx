import styled from "styled-components";
export const Card = (props) => {
  const { children } = props;
  return <SCard>{children}</SCard>;
};

// 箱の大きさは呼ぶ側で指定する運用にすることで、使い回しが効きやすくなる
const SCard = styled.div`
  padding: 16px;
  background-color: #fff;
  box-shadow: #e9dac1 0 0 10px 2px;
  border-radius: 8px;
  font-size: 14px;
`;
