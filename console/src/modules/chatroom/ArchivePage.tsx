import { Box, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import { ChatroomsList } from "./ChatroomsList";
import { useFetchChatrooms } from "./useFetchChatrooms";

export const ArchivePage: React.FC = () => {
  const { loading, fetchChatrooms } = useFetchChatrooms();
  const [chatrooms, setChatrooms] = useState<Chatroom[]>([]);

  useEffect(() => {
    fetchChatrooms({ resolved: true }).then(setChatrooms);
  }, []);

  return (
    <Container>
      <Box display="flex" justifyContent="space-between" marginBottom={2}>
        <Typography variant="h5">Archive</Typography>
      </Box>
      <ChatroomsList loading={loading} chatrooms={chatrooms} />
    </Container>
  );
};
