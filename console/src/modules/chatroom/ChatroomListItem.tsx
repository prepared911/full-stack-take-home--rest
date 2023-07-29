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
} from "@mui/material";
import { useState } from "react";

import { ChatroomTags } from "./ChatroomTags";
import React from "react";

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
  const [editDescription, setEditDescription] = useState(false);
  const [editedDescription, setEditedDescription] = useState(chatroom.description);

  const natureCodeName = chatroom.nature_code?.name ?? "Uncategorized";

  const handleCancel = () => {
    setEditedDescription(chatroom.description); 
    setEditDescription(false);
  }

  const handleSave = () => {
    // TODO: save description to chatroom
    setEditDescription(false);
  }

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
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            gap="4px"
          >
            <Typography variant="body1">Description</Typography>
            {!editDescription && <IconButton onClick={() => setEditDescription(x => !x)}>
              <Edit style={{ height: '16px', width: '16px', lineHeight: 1.5}} />
            </IconButton>}
          </Box>
          {editDescription 
            ? <Box marginTop={1}>
                <TextField 
                  size="small"
                  name="description" 
                  value={editedDescription} 
                  fullWidth
                  multiline
                  inputProps={{ style: { fontSize:"1rem" }}}
                  onChange={(e) => setEditedDescription(e.target.value)}
                />
                <Box display="flex" justifyContent="flex-end" marginTop={1} gap={1} >
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
                    // startIcon={
                    //   isSubmitting ? (
                    //     <CircularProgress color="inherit" sx={{ fontSize: "1em" }} />
                    //   ) : null
                    // }
                    onClick={handleSave}
                  >
                    Save
                  </Button>
                </Box>
              </Box>
            : 
              <Typography variant="body2">
                {chatroom.description ?? "No description provided."}
              </Typography>
            
          }
        </Card>
      </Collapse>
    </ChatroomCard>
  );
};
