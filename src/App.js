import React, { useState, Fragment } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Summary from "./components/Summary";
import Result from "./components/Result";
import Spinner from "./components/Spinner";

import styled from "@emotion/styled";

const Conteiner = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const FormContainer = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

function App() {
  const [summary, updateSummary] = useState({
    quote: 0,
    fields: {
      brand: "",
      year: "",
      plan: "",
    },
  });

  // manager the spinner
  const [loading, updateLoading] = useState(false);

  // extract fields
  const { fields, quote } = summary;

  return (
    <Conteiner>
      <Header title="Insurange Quote" />
      <FormContainer>
        <Form updateSummary={updateSummary} updateLoading={updateLoading} />
        {loading ? (
          <Spinner />
        ) : (
          <Fragment>
            <Summary fields={fields} />
            <Result quote={quote} />
          </Fragment>
        )}
      </FormContainer>
    </Conteiner>
  );
}

export default App;
