import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Square from "./Square";
import get from "lodash/get";
import { fromEpochToDay } from "../utils/dateUtils";

const Container = styled.div`
  height: 350px;
  width: 300px;
  box-shadow: 1px 1px 20px #e6e6e6;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin: 10px;
  cursor: pointer;
`;

const Title = styled.div`
  height: 50px;
  background: #aba0ec;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0px 1.5rem;
  color: white;
  font-size: 1.5rem;
`;

const SquareGrid = styled.section`
  display: flex;
  height: 300px;
  width: 300px;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
  overflow: auto;
  background-color: #dee4e6;
`;

const widthFinder = count => {
  let _count = Number(count);
  if (_count === 1) {
    return "300px";
  }

  if (2 <= _count && _count <= 4) {
    return "150px";
  }

  if (_count % 3 === 0) {
    return "100px";
  }
  return "75px";
};

export default function Card(props) {
  const len = get(props, "data.length", 1);
  const { isEmpty, data } = props;

  return (
    <Container>
      <Title>
        {fromEpochToDay(get(props, "data[0].birthday", new Date())) || ""}
      </Title>
      <SquareGrid>
        {!isEmpty &&
          data.map(birthday => (
            <Square key={birthday.id} len={widthFinder(len)} {...birthday} />
          ))}
        {isEmpty && <Square len="300px" isEmpty={isEmpty} />}
      </SquareGrid>
    </Container>
  );
}

Card.defaultProps = {
  data: [],
  isEmpty: false
};

Card.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  isEmpty: PropTypes.bool
};
