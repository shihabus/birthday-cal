import React from "react";
import styled from "styled-components";

const HeaderText = styled.div`
  grid-area: header;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  font-size: 2.5rem;
  color: #677580;
`;

export default function Header(props) {
  return <HeaderText>{props.header}</HeaderText>;
}
