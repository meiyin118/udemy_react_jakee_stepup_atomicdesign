import { Link } from "react-router-dom";
import styled from "styled-components";
export const Header = () => {
  return (
    <SHeader>
      <SLink to="/">Home</SLink>
      <SLink to="/users">Users</SLink>
    </SHeader>
  );
};

const SHeader = styled.header`
    padding: 8px;
    background-color: #000;
    color: #fff;
    text-align: center;
    a {
        color: #fff;
        &:hover {
            color: red;
        }
    }
`;

// 既存のコンポーネントを拡張するときは、styled(コンポーネント名)にする
const SLink = styled(Link)`
display: inline-block;
    &:not(:first-of-type) {
        margin-left: 4px;
    }
`;