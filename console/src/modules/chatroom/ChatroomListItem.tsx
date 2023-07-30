import { KeyboardArrowDown, KeyboardArrowUp, Edit } from "@mui/icons-material";
import {
  Box,
  Card,
  CardProps,
  Collapse,
  IconButton,
  Typography,
  styled,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";
import { useState } from "react";

import { ChatroomTags } from "./ChatroomTags";
import React from "react";
import { api } from "../utils/api";

const ChatroomCard = styled(Card)<CardProps>(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
  padding: theme.spacing(2),
}));

export type ChatroomListItemProps = {
  chatroom: Chatroom;
};

type UpdateChatroomParams = {
  id: number;
  description: string | null;
};

async function updateChatroom(params: UpdateChatroomParams): Promise<Chatroom> {
  console.log({ params });
  const response = await api.patch<Chatroom>(`/chatrooms/${params.id}`, {
    description: params.description,
  });
  console.log({ response });
  return response.data;
}

export const ChatroomListItem: React.FC<ChatroomListItemProps> = ({
  chatroom,
}) => {
  const [showDetails, setShowDetails] = useState(false);
  const [editDescription, setEditDescription] = useState(false);
  const [editedDescription, setEditedDescription] = useState(
    chatroom.description
  );
  const [loadingSave, setLoadingSave] = useState(false);

  const natureCodeName = chatroom.nature_code?.name ?? "Uncategorized";

  const handleCancel = () => {
    setEditedDescription(chatroom.description);
    setEditDescription(false);
  };

  const handleSave = async () => {
    setLoadingSave(true);
    console.log({ chatroom });
    const updatedChatroom = await updateChatroom({
      id: chatroom.id,
      description: editedDescription,
    });
    chatroom.description = updatedChatroom.description;
    setLoadingSave(false);
    setEditDescription(false);
  };

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
          <Box display="flex" flexDirection="row" alignItems="center" gap="4px">
            <Typography variant="body1">Description</Typography>
            {!editDescription && (
              <IconButton onClick={() => setEditDescription((x) => !x)}>
                <Edit
                  style={{ height: "16px", width: "16px", lineHeight: 1.5 }}
                />
              </IconButton>
            )}
          </Box>
          {editDescription ? (
            <Box marginTop={1}>
              <TextField
                size="small"
                name="description"
                value={editedDescription}
                fullWidth
                multiline
                inputProps={{ style: { fontSize: "1rem" } }}
                onChange={(e) => setEditedDescription(e.target.value)}
              />
              <Box
                display="flex"
                justifyContent="flex-end"
                marginTop={1}
                gap={1}
              >
                <Button
                  size="small"
                  variant="text"
                  color="primary"
                  onClick={handleCancel}
                >
                  Cancel
                </Button>
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  type="submit"
                  startIcon={
                    loadingSave ? (
                      <CircularProgress
                        color="inherit"
                        sx={{ fontSize: "1em" }}
                      />
                    ) : null
                  }
                  onClick={handleSave}
                >
                  Save
                </Button>
              </Box>
            </Box>
          ) : (
            <Typography variant="body2">
              {chatroom.description ?? "No description provided."}
            </Typography>
          )}
        </Card>
      </Collapse>
    </ChatroomCard>
  );
};
