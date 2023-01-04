import styled from "styled-components";
import { BaseButton } from "./BaseButton";
// コンポーネント分割大事：コンポーネントの役割を考える
// 実際に表示するラベルはpropsで受け取って設定し汎用的にさせる
export const PrimaryButton = (props) => {
  // <PrimaryButton>あああ</PrimaryButton>の形で使用する
  const { children } = props;
  return <SButton>{children}</SButton>;
};

// 差分だけ書く
const SButton = styled(BaseButton)`
  background-color: black;
  &:hover {
    background-color: gray;
  }
`;

// const SButton = styled.button`
//   background-color: black;
//   color: #fff;
//   padding: 6px 24px;
//   outline: none;
//   border: none;
//   border-radius: 4px;
//   &:hover {
//     cursor: pointer;
//     opacity: 0.8;
//     background-color: gray;
//   }
// `;
