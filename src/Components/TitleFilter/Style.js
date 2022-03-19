import styled from "styled-components";

export const ContainerSection = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 0 28px;
  margin-top: 33px;
  @media (max-width: 420px) {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Title = styled.h3`
  margin-top: 33px;
  width: 161px;
  color: #5d405c;
  font-family: "Montserrat", sans-serif;
  font-size: 28px;
  font-style: bold;
  line-height: 34px;
`;

export const Caption = styled.p`
  margin-top: 8px;
  color: #828282;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  font-style: medium;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: 0.3px;
  @media (max-width: 420px) {
    margin: 10px auto;
  }
`;
export const ContainerButton = styled.div`
  margin-top: 8px;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;
