// ボタン共通のスタイルを定義
import styled from "styled-components";

export const BaseButton = styled.button`
  color: #fff;
  padding: 6px 24px;
  outline: none;
  border: none;
  border-radius: 4px;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
