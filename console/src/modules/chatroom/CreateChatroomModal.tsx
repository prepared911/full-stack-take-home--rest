import { Box, Card, Modal } from "@mui/material";

import {
  CreateChatroomForm,
  CreateChatroomFormProps,
} from "./CreateChatroomForm";
import { api } from "~src/modules/utils/api";

type CreateChatroomParams = {
  label: string;
  callerPhoneNumber: string;
  description?: string;
  natureCodeId?: string;
};
async function createChatroom(params: CreateChatroomParams): Promise<Chatroom> {
  const response = await api.post<Chatroom>("/chatrooms", {
    label: params.label,
    caller_phone_number: params.callerPhoneNumber,
    description: params.description,
    nature_code_id: params.natureCodeId,
  });
  return response.data;
}

export type CreateChatroomModalProps = {
  open: boolean;
  handleClose: () => void;
  onSubmit: (chatroom: Chatroom) => void;
};

export const CreateChatroomModal: React.FC<CreateChatroomModalProps> = ({
  open,
  handleClose,
  onSubmit,
}) => {
  const handleSubmit: CreateChatroomFormProps["onSubmit"] = async (values) => {
    const chatroom = await createChatroom(values);
    onSubmit(chatroom);
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ inset: 0 }}
      >
        <Card variant="outlined" sx={{ minWidth: 400, padding: 2 }}>
          {open && (
            <CreateChatroomForm
              onSubmit={handleSubmit}
              handleClose={handleClose}
            />
          )}
        </Card>
      </Box>
    </Modal>
  );
};
