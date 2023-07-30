import { Box, Card, Modal, Button } from "@mui/material";

import {
  CreateChatroomForm,
  CreateChatroomFormProps,
} from "./CreateChatroomForm";
import { api } from "~src/modules/utils/api";
import React from "react";

export type ConfirmResolveModalProps = {
  open: boolean;
  handleClose: () => void;
  handleResolve: () => void;
};

export const ConfirmResolveModal: React.FC<ConfirmResolveModalProps> = ({
  open,
  handleClose,
  handleResolve,
}) => {
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
          Are you sure you want to resolve this chatroom?
          <Box display="flex" justifyContent="flex-end" marginTop={1} gap={1}>
            <Button
              size="small"
              variant="text"
              color="primary"
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button
              size="small"
              variant="contained"
              color="primary"
              type="submit"
              onClick={handleResolve}
            >
              Confirm
            </Button>
          </Box>
        </Card>
      </Box>
    </Modal>
  );
};
