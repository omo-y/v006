import styled from "styled-components";
import { Card } from "../../atoms/card/Card";
export const UserCard = (props) => {
  const { user } = props;
  return (
    <Card>
      <img height={120} width={150} src={user.image} alt={user.name} />
      <SDL>
        <p>{user.name}</p>
        <dl>
          <dt>email</dt>
          <dd>{user.email}</dd>
          <dt>TEL</dt>
          <dd>{user.phone}</dd>
          <dt>会社名</dt>
          <dd>{user.company.name}</dd>
          <dt>webアドレス</dt>
          <dd>{user.website}</dd>
        </dl>
      </SDL>
    </Card>
  );
};
const SDL = styled.dl`
text-align:left;
dt {
 float: left;
}
dd{
  padding-left: 32px;
  padding-bottom 8px;
}
`;
