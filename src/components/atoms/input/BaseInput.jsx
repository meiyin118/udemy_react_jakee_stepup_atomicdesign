import styled from "styled-components";
export const BaseInput = (props) => {
  const { placeholder = "" } = props;
  return <SInput type="text" placeholder={placeholder} />;
};
const SInput = styled.input`
  display: inline-block;
  border: 1px solid #666;
  padding: 8px 16px;
  border-radius: 4px;
`;
