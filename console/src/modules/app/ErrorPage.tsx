import { Error } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

export const ErrorPage: React.FC = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      padding={4}
      gap={2}
    >
      <Error />
      <Typography variant="h6">
        Oops! Looks like something went wrong...
      </Typography>
    </Box>
  );
};
