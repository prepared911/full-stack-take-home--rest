type NatureCode = {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
};

type Chatroom = {
  id: number;
  label: string;
  caller_phone_number: string;
  description: string | null;
  resolved: boolean;
  nature_code_id: number | null;
  nature_code: NatureCode | null;
  created_at: string;
  updated_at: string;
};
