import styled from 'styled-components';
export const UserIconWithName = (props) => {
    const { image, name } = props;
    return(
        <SIconImageSet>
            <SImage
            src={image}
            alt={`${name}のプロフィール写真`}
            width={160}
            height={160}
            />
            <SName>{name}</SName>
        </SIconImageSet>
    )
};

const SIconImageSet = styled.div`
    text-align:center;
`;

const SImage = styled.img`
    border-radius: 50%;
`;

const SName = styled.p`
    margin: 0;
    color: #222;
    font-weight: bold;
    font-size: 18px;
`;