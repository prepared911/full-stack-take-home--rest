import styled from "@emotion/styled";
import { LocalPolice as LocalPoliceIcon } from "@mui/icons-material";
import { Box, useTheme } from "@mui/material";

const LogoText = styled.span`
  font-family: Jura;
  font-weight: 700;
  font-size: 1.25rem;
  text-transform: uppercase;
`;

export const Logo: React.FC = () => {
  const theme = useTheme();

  return (
    <Box display="inline-flex" alignItems="center" gap={0.5}>
      <LocalPoliceIcon
        htmlColor={theme.palette.primary.main}
        sx={{ fontSize: "1em" }}
      />
      <LogoText>PREPARED</LogoText>
    </Box>
  );
};
