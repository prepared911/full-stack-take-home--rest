import { Phone, Workspaces } from "@mui/icons-material";
import { Box, Chip } from "@mui/material";
import { formatPhoneNumber } from "../utils/formatPhoneNumber";

export type ChatroomTagsProps = {
  natureCode: string;
  callerPhoneNumber: string;
};

export const ChatroomTags: React.FC<ChatroomTagsProps> = ({
  natureCode,
  callerPhoneNumber,
}) => {
  return (
    <Box display="flex" alignItems="center" gap={1}>
      <Chip
        color="default"
        size="small"
        label={formatPhoneNumber(callerPhoneNumber)}
        icon={<Phone sx={{ fontSize: "1em" }} />}
      />
      <Chip
        color="default"
        size="small"
        label={natureCode}
        icon={<Workspaces sx={{ fontSize: "1em" }} />}
      />
    </Box>
  );
};
