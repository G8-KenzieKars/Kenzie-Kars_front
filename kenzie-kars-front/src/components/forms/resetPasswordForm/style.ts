import styled from "styled-components";

export const FormReset = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 92%;
`;

export const ContainerFormReset = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  div {
    display: flex;
    flex-direction: column;
    gap: 20px;
    animation: animationResetPass 1s ease 0s 1 normal forwards;
  }
`;
