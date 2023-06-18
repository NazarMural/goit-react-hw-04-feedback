import styled from '@emotion/styled';

const Table = styled.table`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 30px;
`;

const Th = styled.th`
  border: 1px solid black;
`;

const Td = styled.td`
  border: 1px solid black;
  text-align: center;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: end;
`;

const Button = styled.button`
  border: 0;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  background-color: red;
  color: white;

  padding: 10px 20px;
`;

export { Table, Th, Td, ButtonBox, Button };
