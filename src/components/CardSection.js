import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Card from "./Card";

const Wrapper = styled.section`
  display: flex;
  overflow: auto;
  grid-area: list;
  width: 100%;

  justify-content: flex-start;
  align-content: flex-start;
`;

const List = styled.div`
  display: flex;
  overflow: auto;
  width: 100%;

  justify-content: flex-start;
  align-items: center;
  align-content: flex-start;
`;

export default function CardSection(props) {
  const { data } = props;
  const keys = Object.keys(data);
  return (
    <Wrapper>
      {keys.length === 0 ? (
        <Card isEmpty />
      ) : (
        <List>
          {keys.map(item => (
            <Card key={item} data={data[item]} />
          ))}
        </List>
      )}
    </Wrapper>
  );
}

CardSection.defaultProps = {
  data: {}
};

CardSection.propTypes = {
  data: PropTypes.objectOf(PropTypes.array)
};
