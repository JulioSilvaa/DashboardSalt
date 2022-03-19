import styled from "styled-components";

export const ContainerGraphics = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 28px;
  margin-top: 45px;
  background: #e5e5e5;
`;

export const CardGraphics = styled.div`
  max-width: 680px;
  height: 359px;
  margin-top: 30px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);

  @media (max-width: 715px) {
    width: 400px;
  }
  @media (max-width: 415px) {
    width: 300px;
    margin-top: 10px ;
  }
`;

export const ViweGraphics1 = styled.div`
  width: 603px;
  height: 290px;
  margin: 14px 38px 14px 39px;
  @media (max-width: 715px) {
    width: 300px;
  }
  @media (max-width: 415px) {
    width: 200px;
  }
`;

export const ViweGraphics2 = styled.div`
  width: 603px;
  height: 290px;
  margin: 7px 38px 14px 39px;
  @media (max-width: 715px) {
    width: 300px;
  }
  @media (max-width: 415px) {
    width: 200px;
  }
`;

export const ContainerInfos = styled.div`
  display: flex;
  align-items: flex-end;
  width: 200px;
  height: 20px;
  margin: 31px 0 0 0px;

  p:first-child {
    width: 55px;
    height: 20px;
    color: #5d405c;
    font-family: "Montserrat";
    font-size: 16px;
    line-height: 20px;
    font-weight: 700;
    font-style: bold;
  }
  & :nth-child(2) {
    margin-left: 10px;
  }
`;
