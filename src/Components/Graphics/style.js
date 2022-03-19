import styled from "styled-components";

export const ContainerGraphics = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 28px;
  margin-top: 45px;
`;

export const CardGraphics = styled.div`
  width: 680px;
  height: 359px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
`;

export const ViweGraphics1 = styled.div`
  width: 603px;
  height: 290px;
  margin: 14px 0 14px 39px;

  & div.apexcharts-toolbar{
     fill: #5d405c;
  }
`;

export const ViweGraphics2 = styled.div`
  width: 603px;
  height: 290px;
  margin: 7px 0 14px 39px;
`;

export const ContainerInfos = styled.div`
  display: flex;
  align-items: center;
  width: 500px;
  height: 30px;
  margin: 21px 0 0 23px;

  p:first-child {
    width: 55px;
    height: 20px;
    color: #5d405c;
    font-family: Montserrat;
    font-size: 16px;
    line-height: 20px;
    font-weight: 700;
    font-style: bold;
  }
  & :nth-child(2) {
    margin-left: 16px;
  }
`;
