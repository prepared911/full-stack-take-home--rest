import { AddComment } from "@mui/icons-material";
import { Box, Button, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import { ChatroomsList } from "./ChatroomsList";
import { CreateChatroomModal } from "./CreateChatroomModal";
import { useFetchChatrooms } from "./useFetchChatrooms";

export const ChatroomsPage: React.FC = () => {
  const { loading, fetchChatrooms } = useFetchChatrooms();
  const [chatrooms, setChatrooms] = useState<Chatroom[]>([]);

  useEffect(() => {
    fetchChatrooms().then(setChatrooms);
  }, []);

  const addNewChatroom = (chatroom: Chatroom) => {
    setChatrooms([chatroom, ...chatrooms]);
  };

  const [showCreateChatroomModal, setShowCreateChatroomModal] = useState(false);

  return (
    <Container>
      <Box display="flex" justifyContent="space-between" marginBottom={2}>
        <Typography variant="h5">Chatrooms</Typography>
        <Button
          size="small"
          variant="contained"
          startIcon={<AddComment />}
          onClick={() => setShowCreateChatroomModal(true)}
        >
          New Chatroom
        </Button>
      </Box>
      <ChatroomsList loading={loading} chatrooms={chatrooms} />
      <CreateChatroomModal
        open={showCreateChatroomModal}
        onSubmit={addNewChatroom}
        handleClose={() => setShowCreateChatroomModal(false)}
      />
    </Container>
  );
};
