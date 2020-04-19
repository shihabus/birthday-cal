import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { fromEpoch } from "../utils/dateUtils";

const Container = styled.div`
  grid-area: viewer;
  height: 100%;
  overflow: auto;
  color: #6a6a6a;
  background-color: white;
  padding: 20px 10px;
`;

const ListItem = styled.pre`
  margin-left: 40px;
  color: #000;
  color: #6a6a6a;
`;

export default function JSONViewer(props) {
  return (
    <Container>
      {"["}
      {[
        props.data.map(person => (
          <section
            data-id={person.id}
            key={person.id}
            style={{ fontSize: "14px" }}
          >
            <pre> {" {"}</pre>
            <ListItem> name : {person.name}</ListItem>
            <ListItem> birthday : {fromEpoch(person.birthday)}</ListItem>
            <pre> {" },"}</pre>
          </section>
        ))
      ]}
      {"]"}
    </Container>
  );
}

JSONViewer.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
};
