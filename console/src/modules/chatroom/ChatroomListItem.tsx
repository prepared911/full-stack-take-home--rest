import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import {
  Box,
  Card,
  CardProps,
  Collapse,
  IconButton,
  Typography,
  styled,
} from "@mui/material";
import { useState } from "react";

import { ChatroomTags } from "./ChatroomTags";

const ChatroomCard = styled(Card)<CardProps>(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
  padding: theme.spacing(2),
}));

export type ChatroomListItemProps = {
  chatroom: Chatroom;
};

export const ChatroomListItem: React.FC<ChatroomListItemProps> = ({
  chatroom,
}) => {
  const [showDetails, setShowDetails] = useState(false);

  const natureCodeName = chatroom.nature_code?.name ?? "Uncategorized";

  return (
    <ChatroomCard variant="outlined">
      <Box
        display="flex"
        alignItems="flex-start"
        justifyContent="space-between"
      >
        <Box>
          <Typography variant="h6">{chatroom.label}</Typography>
          <ChatroomTags
            natureCode={natureCodeName}
            callerPhoneNumber={chatroom.caller_phone_number}
          />
        </Box>
        <IconButton onClick={() => setShowDetails(!showDetails)}>
          {showDetails ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
        </IconButton>
      </Box>
      <Collapse in={showDetails}>
        <Card sx={{ padding: 2 }}>
          <Typography variant="body1">Description</Typography>
          <Typography variant="body2">
            {chatroom.description ?? "No description provided."}
          </Typography>
        </Card>
      </Collapse>
    </ChatroomCard>
  );
};
