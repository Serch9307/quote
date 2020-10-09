import React from "react";
import PropTypes from "prop-types";
import { firstUppercase } from "../helper";
import styled from "@emotion/styled";

const SummaryContainer = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #00838f;
  color: #fff;
  margin-top: 1rem;
`;

const Summary = ({ fields }) => {
  //extract from fields
  const { brand, year, plan } = fields;

  if (brand === "" || year === "" || fields === "") {
    return null;
  }
  return (
    <SummaryContainer>
      <h2>Quote Summary</h2>
      <ul>
        <li>Brand:{firstUppercase(brand)}</li>
        <li>Plan:{firstUppercase(plan)}</li>
        <li>Car Year:{year}</li>
      </ul>
    </SummaryContainer>
  );
};

Summary.propTypes = {
  fields: PropTypes.object.isRequired,
};
export default Summary;
