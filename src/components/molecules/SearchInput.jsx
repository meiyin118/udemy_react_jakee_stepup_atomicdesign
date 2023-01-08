import { memo } from "react";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { BaseInput } from "../atoms/input/BaseInput";
import styled from "styled-components";
export const SearchInput = memo(() => {
  console.log("SearchInput");
  return (
    <SContainer>
      <BaseInput placeholder="検索条件を入力" />
      <SButtonWrapper>
        <PrimaryButton>検索</PrimaryButton>
      </SButtonWrapper>
    </SContainer>
  );
});

const SContainer = styled.div`
  display: flex;
  align-items: center;
`;
const SButtonWrapper = styled.div`
  padding-left: 8px;
`;
