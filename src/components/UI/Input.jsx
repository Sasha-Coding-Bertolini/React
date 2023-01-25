import { Input } from "@chakra-ui/react";

export const TextInput = ({ onChange }) => (
  <Input variant="filled" onChange={onChange} w={200} m={5} />
);
