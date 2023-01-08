import React, { useContext } from "react";
import styled from "styled-components";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { useHistory } from "react-router-dom";

import { UserContext } from "../../providers/userProvider";

export const Top = () => {
  // ユーザー一覧遷移時にstateを渡す
  const history = useHistory();
  // コンテキストから更新関数を取り出す
  const { setUserInfo } = useContext(UserContext);

  const onClickAdmin = () => {
    // history.push({ pathname: "/users", state: { isAdmin: true } });
    setUserInfo({ isAdmin: true });
    history.push("/users");
  };
  const onClickGeneral = () => {
    // history.push({ pathname: "/users", state: { isAdmin: false } });
    setUserInfo({ isAdmin: false });
    history.push("/users");
  };

  return (
    <SContainer>
      <h2>Top</h2>
      <p>
        React動画チュートリアルで作ったサイトです。
        <br />
        Atomic Designの練習をしました。
      </p>
      <SecondaryButton onClick={onClickAdmin}>管理者ユーザー</SecondaryButton>
      <br />
      <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
    </SContainer>
  );
};
const SContainer = styled.div`
  text-align: center;
`;
