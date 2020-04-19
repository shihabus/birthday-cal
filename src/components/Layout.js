import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100%;
  padding: 5vh;
  background: #eaf0f2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 5vh 40vh calc(100% - (45vh + 4vh));
  grid-row-gap: 2vh;
  grid-template-areas: "header header" "list list" "viewer search";
`;

export default function Layout(props) {
  return <Wrapper>{props.children}</Wrapper>;
}

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node)
};
