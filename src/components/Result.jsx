import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const ResultContainer = styled.p`
  color: #00838f;
  padding: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
`;

const ResultQutoe = styled.div`
  text-align: center;
  padding: 0.5rem;
  border: 1px solid #26c6da;
  background-color: rgb(127, 224, 237);
  margin-top: 1rem;
  position: relative;
`;

const SelectInformation = styled.p`
  text-align: center;
  font-style: italic;
`;

const Result = ({ quote }) => {
  return quote === 0 ? (
    <SelectInformation>Select brand, year and insurance type</SelectInformation>
  ) : (
    <ResultQutoe>
      <TransitionGroup component="span" className="resultado">
        <CSSTransition
          classNames="resultado"
          key={quote}
          timeout={{ enter: 500, exit: 500 }}
        >
          <ResultContainer>
            Quote: $ <span>{quote}</span>{" "}
          </ResultContainer>
        </CSSTransition>
      </TransitionGroup>
    </ResultQutoe>
  );
};

Result.propTypes = {
  quote: PropTypes.number.isRequired,
};

export default Result;
