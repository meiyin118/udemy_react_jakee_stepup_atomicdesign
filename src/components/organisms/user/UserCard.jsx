import { memo } from "react";
import { Card } from "../../atoms/card/Card";
import { UserIconWithName } from "../../molecules/user/UserIconWithName";
import styled from "styled-components";
export const UserCard = memo((props) => {
  const { user } = props;
  // const { user, isAdmin } = props;
  console.log("UserCard");
  return (
    <Card>
      {/* <UserIconWithName image={user.image} name={user.name} isAdmin={isAdmin} /> */}
      <UserIconWithName image={user.image} name={user.name} />
      <SDl>
        <dt>メール</dt>
        <dd>{user.email}</dd>
        <dt>Tel</dt>
        <dd>{user.tel}</dd>
      </SDl>
    </Card>
  );
});

const SDl = styled.dl`
  text-align: left;
  margin-bottom: 0;
  dt {
    float: left;
  }
  dd {
    padding-left: 32px;
    padding-bottom: 8px;
    overflow-wrap: break-word;
  }
`;
