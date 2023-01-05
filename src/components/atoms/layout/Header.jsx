import { Link } from "react-router-dom";
import styled from "styled-components";
export const Header = () => {
  return (
    <SHeader>
      <SLink to="/">Home</SLink>/<SLink to="/users">Users</SLink>
    </SHeader>
  );
};

const SHeader = styled.header`
  padding: 8px;
  background-color: #222;
  color: #fff;
  text-align: center;
  a {
    text-decoration: none;
    color: #fff;
    &:hover {
      color: #9ed2c6;
      text-decoration: underline;
    }
  }
`;

// 既存のコンポーネントを拡張するときは、styled(コンポーネント名)にする
const SLink = styled(Link)`
  display: inline-block;
  &:not(:last-of-type) {
    margin-right: 4px;
  }
  &:not(:first-of-type) {
    margin-left: 4px;
  }
`;
