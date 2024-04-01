import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { formatPrice } from "../../helper/utils";

const PriceCard = ({ currency, description, rate }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" m="0 30px" p="12px 0">
      <Box display="flex" justifyContent="space-between">
        <Box>
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            {currency}
          </Typography>
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        gap="3px"
        mt="2px"
      >
        <Typography variant="h5" sx={{ color: colors.green["neon"] }}>
          {description}
        </Typography>
        <Typography variant="h5" fontStyle="italic" sx={{ color: "white" }}>
          {formatPrice(currency, rate)}
        </Typography>
      </Box>
    </Box>
  );
};

export default PriceCard;
