import { Card } from "../../atoms/card/Card";
import styled from "styled-components";
export const UserCard = (props) => {
  const { user } = props;
  return (
    <Card>
      <img
        src={user.image}
        alt={`${user.image}のプロフィール写真`}
        width={160}
        height={160}
      />
      <p>{user.name}</p>
      <SDl>
        <dt>メール</dt>
        <dd>{user.email}</dd>
        <dt>Tel</dt>
        <dd>{user.tel}</dd>
      </SDl>
    </Card>
  );
};

const SDl = styled.dl`
  text-align: left;
  margin-bottom: 0;
  dt {
    float: left;
  }
  dd {
    padding-left: 32px;
    padding-bottom: 8px;
  }
`;
