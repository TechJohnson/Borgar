import React, { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "./redux/blockchain/blockchainActions";
import { fetchData } from "./redux/data/dataActions";
import * as s from "./styles/globalStyles";
import styled from "styled-components";
// import { create } from "ipfs-http-client";

export const StyledButton = styled.button`
    font-family: 'Open Sans', sans-serif;
    background: $white;
    border: none;
    color: #241347;
    font-size: 1.125rem;
    font-weight: 700;
    text-decoration: none;
    border-radius: 5px;
    padding: 15px 50px;
    margin: 0 0 0 40px;
    cursor: pointer;
`;

function App() {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);

  useEffect(() => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
// eslint-disable-next-line
}, [blockchain.smartContract, dispatch]);

  return (
    <s.Screen>
      {blockchain.account === "" || blockchain.smartContract === null ? (
        <s.Container flex={1} ai={"center"} jc={"center"}>
          <StyledButton className="mint-button"
            onClick={(e) => {
              e.preventDefault();
              dispatch(connect());
            }}
          >
            Mint Me!
          </StyledButton>
          {blockchain.errorMsg !== "" ? (
            <s.TextDescription>{blockchain.errorMsg}</s.TextDescription>
          ) : null}
        </s.Container>
      ) : (
        <s.Container flex={1} ai={"center"} style={{ padding: 24 }}>
          <s.TextTitle style={{ textAlign: "center" }}>
            Name: {data.name}.
          </s.TextTitle>
        </s.Container>
      )}
    </s.Screen>
  );
}

console.log("Site created by @TechJohnson www.techjohnson.com");

export default App;
