import styled from "styled-components";

// コンテキストの値を参照するには、useContext
import React, { useContext, memo } from "react";
import { UserContext } from "../../../providers/userProvider";

export const UserIconWithName = memo((props) => {
  // const { image, name, isAdmin } = props;
  // UserContextというコンテキストを呼ぶ
  // const context = useContext(UserContext);
  console.log("UserIconWithName");
  // バケツリレー不要になった
  const { image, name } = props;
  const { userInfo } = useContext(UserContext);
  const isAdmin = userInfo ? userInfo.isAdmin : false;
  return (
    <SIconImageSet>
      <SImage
        src={image}
        alt={`${name}のプロフィール写真`}
        width={160}
        height={160}
      />
      <SName>{name}</SName>
      {isAdmin && <SEdit>編集</SEdit>}
    </SIconImageSet>
  );
});

const SIconImageSet = styled.div`
  text-align: center;
`;

const SImage = styled.img`
  border-radius: 50%;
`;

const SName = styled.p`
  margin: 0;
  color: #222;
  font-weight: bold;
  font-size: 18px;
`;

const SEdit = styled.span`
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
`;
