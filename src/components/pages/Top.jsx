import styled from "styled-components";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
export const Top = () => {
  return (
    <SContainer>
      <h2>Top</h2>
      <p>
        React動画チュートリアルで作ったサイトです。
        <br />
        Atomic Designの練習をしました。
      </p>
      <SecondaryButton>管理者ユーザー</SecondaryButton>
      <SecondaryButton>一般ユーザー</SecondaryButton>
    </SContainer>
  );
};
const SContainer = styled.div`
  text-align: center;
`;
