import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import colorGenerator from "../utils/colorGenerator";
import extractInitials from "../utils/textUtils";

const Wrapper = styled.div`
  width: ${props => props.len};
  height: ${props => props.len};
  background: red;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.bgColor};
  color: white;
  font-size: 1.5em;
`;

export default function Square(props) {
  const { isEmpty, name } = props;
  return (
    <Wrapper {...props} bgColor={isEmpty ? "#DEE4E6" : colorGenerator()}>
      {isEmpty ? (
        <span aria-label="sad emoji" role="img" style={{ fontSize: "4rem" }}>
          😔
        </span>
      ) : (
        extractInitials(name || "")
      )}
    </Wrapper>
  );
}

Square.propTypes = {
  name: PropTypes.string,
  isEmpty: PropTypes.bool
};
