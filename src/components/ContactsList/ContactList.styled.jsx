import styled from '@emotion/styled';

export const SectionList = styled.ul`
  margin: 0;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

export const SectionLi = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  margin-bottom: 10px;
  /* margin-bottom: 15px; */
`;
export const ContactTitle = styled.h2`
  text-align: left;
  margin: 0;
  min-width: 150px;
`;
export const ContactTel = styled.a`
  text-decoration: none;
  min-width: 150px;

  font-weight: bold;
  color: black;
  transition: color 250ms ease-in, border 250ms ease-in, color 250ms ease-in;
  &:hover,
  &:focus {
    color: tomato;
  }
`;
export const ContactButton = styled.button`
  cursor: pointer;
  width: 100px;
  height: 30px;

  border: 1px solid red;
  border-radius: 5px;

  font-weight: bold;

  transition: background-color 250ms ease-in, border 250ms ease-in,
    color 250ms ease-in;
  &:hover,
  &:focus {
    background-color: tomato;
    border: 2px solid black;
  }
`;
