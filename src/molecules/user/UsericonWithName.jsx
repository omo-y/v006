import styled from "styled-components";
export const UserIconWithName = (props) => {
  const { image, name } = props;
  return (
    <SContenar>
      <img height={120} width={150} src={image} alt={name} />
      <p>{name}</p>
    </SContenar>
  );
};
const SContenar = styled.div`
  text-align: center;
`;
