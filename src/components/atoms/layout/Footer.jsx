import styled from "styled-components";

export const Footer = () => {
  return (
    <SFooter>
      <small>&copy; 2023 hogehoge Inc</small>
    </SFooter>
  );
};

const SFooter = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 8px;
  background-color: #666;
  color: #fff;
  text-align: center;
`;
