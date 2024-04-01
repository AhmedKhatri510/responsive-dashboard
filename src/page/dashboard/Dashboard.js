// tokens
import { tokens } from "../../theme";

// components
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import LineChart from "../../components/line-chart/LineChart";
import BitcoinPriceCards from "../../components/bitcoin-price-cards/BitcoinPriceCards";
const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid
          xs={12}
          sm={12}
          md={8}
          lg={8}
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid xs={12}>
            <Box backgroundColor={"rgba(49, 49, 49, 0.222)"}>
              <Box
                mt="25px"
                p="0 30px"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box>
                  <Typography
                    variant="h5"
                    fontWeight="600"
                    color={colors.grey[100]}
                  >
                    Population
                  </Typography>
                </Box>
                <Box>
                  <IconButton>
                    <DownloadOutlinedIcon
                      sx={{ fontSize: "26px", color: colors.green["neon"] }}
                    />
                  </IconButton>
                </Box>
              </Box>
              <Box height="250px" m="-20px 0 0 0">
                <LineChart isDashboard={true} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <BitcoinPriceCards />
    </Box>
  );
};

export default Dashboard;
