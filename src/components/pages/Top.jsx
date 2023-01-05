import styled from "styled-components";
export const Top = () => {
  return (
    <SContainer>
      <h2>Top</h2>
      <p>
        React動画チュートリアルで作ったサイトです。
        <br />
        Atomic Designの練習をしました。
      </p>
    </SContainer>
  );
};
const SContainer = styled.div`
  text-align: center;
`;
