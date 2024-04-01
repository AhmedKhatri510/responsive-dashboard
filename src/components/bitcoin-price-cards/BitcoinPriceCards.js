import React, { useEffect, useState } from "react";

// axios
import axios from "axios";

// components
import { Box, Grid, Typography } from "@mui/material";
import PriceCard from "../price-card/PriceCard";

// tokens
import useInterval from "../../hooks/useInterval";

const BitcoinPriceCards = () => {
  const [bitcoinPrices, setBitcoinPrices] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(
      `https://api.coindesk.com/v1/bpi/currentprice.json`
    );

    const { data } = response;

    const { bpi } = data;

    const bitcoinPrices = Object.values(bpi);

    setBitcoinPrices(bitcoinPrices);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useInterval(fetchData, 5 * 60 * 1000);

  return (
    <Box marginTop="20px">
      <Typography fontSize="24px">Bitcoin rates</Typography>
      <Grid
        container
        gap="20px"
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        style={{ marginLeft: "0", marginTop: "20px", width: "100%" }}
      >
        {bitcoinPrices.map((bitcoinPrice) => (
          <Grid xs={12} sm={12} md={6} lg={3} xl={3}>
            <Box
              width="100%"
              backgroundColor={"rgba(49, 49, 49, 0.222)"}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <PriceCard
                currency={bitcoinPrice.code}
                description={bitcoinPrice.description}
                rate={bitcoinPrice.rate}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BitcoinPriceCards;
