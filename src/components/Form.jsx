import React, { useState } from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { getDifferenceYear, calcBrand, getPlan } from "../helper";

const Field = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;

const Label = styled.label`
  flex: 0 0 100px;
`;

const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  -webkit-appearance: none;
`;

const InputRadio = styled.input`
  margin: 0 1rem;
`;

const Botton = styled.button`
  background-color: #00838f;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  transition: background-color 0.5s ease-out;
  margin-top: 2rem;

  &:hover {
    cursor: pointer;
    background-color: #26c6da;
  }
`;

const Form = ({ updateSummary, updateLoading }) => {
  // State
  const [fields, updateFields] = useState({
    brand: "",
    year: "",
    plan: "",
  });

  // manager the erros about form
  const [error, updateError] = useState(false);

  // get the values on state
  const { brand, year, plan } = fields;

  // read information about form and set in state
  const handleChage = (e) => {
    updateFields({
      ...fields,
      [e.target.name]: e.target.value,
    });
  };

  // when the user send the informations
  const handleSubmit = (e) => {
    e.preventDefault();
    updateLoading(true);
    // Validate form
    if (brand.trim() === "" || year.trim() === "" || plan.trim() === "") {
      updateError(true);
      return;
    }
    // update without error
    updateError(false);

    // base = 2000
    let result = 2000;

    // get difference of years
    const difference = getDifferenceYear(parseInt(year));

    // by every year rest 3%
    result -= (difference * 3 * result) / 100;

    // Europe 30%
    // American 15%
    // Asian 5%
    result = calcBrand(brand) * result;

    // basic 20%
    // full 50%
    result = getPlan(plan) * result;

    //result = parseFloat(result).toFixed(2);

    setTimeout(() => {
      updateLoading(false);
      // Total
      updateSummary({
        quote: result,
        fields,
      });
    }, 1000);
  };

  const Error = styled.div`
    background-color: red;
    color: white;
    padding: 1rem 0 1rem 0;
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
  `;

  return (
    <form onSubmit={handleSubmit}>
      {error ? <Error>All fields are required</Error> : null}
      <Field>
        <Label>Brand</Label>
        <Select name="brand" value={brand} onChange={handleChage}>
          <option value="">-- Select --</option>
          <option value="american">American</option>
          <option value="european">European</option>
          <option value="asian">Asian</option>
        </Select>
      </Field>

      <Field>
        <Label>Year</Label>
        <Select name="year" value={year} onChange={handleChage}>
          <option value="">-- Select --</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </Select>
      </Field>

      <Field>
        <Label>Plan</Label>
        <InputRadio
          type="radio"
          name="plan"
          value="basic"
          checked={plan === "basic"}
          onChange={handleChage}
        />{" "}
        Basic
        <InputRadio
          type="radio"
          name="plan"
          value="full"
          checked={plan === "full"}
          onChange={handleChage}
        />{" "}
        Full
      </Field>

      <Botton type="submit">Quote</Botton>
    </form>
  );
};

Form.propTypes = {
  updateSummary: PropTypes.func.isRequired,
  updateLoading: PropTypes.func.isRequired,
};

export default Form;
