import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";
// import { useLocation } from "react-router-dom";

// User Cardに渡す情報
const users = [...Array(6).keys()].map((val, index) => {
  return {
    id: val,
    image: "https://source.unsplash.com/HlI03bNHhBI",
    name: `はる${index + 1}`,
    email: "example@examle.com",
    tel: "090-XXXX-XXXX"
  };
});

export const Users = () => {
  // バケツリレーが必要な場合：前ページのstateを受け取り確認
  // const { state } = useLocation();
  // console.log(state);
  // const isAdmin = state ? state.isAdmin : false;

  return (
    <SContainer>
      <h2>Users</h2>
      <SearchInput />
      <SUserArea>
        {users.map((user) => (
          // <UserCard key={user.id} user={user} isAdmin={isAdmin} />
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};
const SContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 36px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
