import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { SoundBoardItem } from "../types/types";
import axios from "axios";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
};

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onCreateItem: (data: SoundBoardItem) => void;
};

const CreateItemModal = ({ isOpen, onClose, onCreateItem }: Props) => {
  const [newItem, setNewItem] = useState({
    name: "",
    image: "",
    sound: "",
    quote: "",
    soundboardId: 1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewItem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue = parseInt(e.target.value);
    setNewItem((prevItem) => ({
      ...prevItem,
      soundboardId: selectedValue,
    }));
  };

  const handleCreate = async () => {
    try {
      const response = await axios.post("/items", newItem);
      onCreateItem(response.data);
      onClose();
    } catch (error) {
      console.error("Error creating item:", error);
    }
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box sx={style}>
        <Typography variant="h6" component="h2">
          Create New Item
        </Typography>
        <TextField
          name="name"
          label="Name"
          value={newItem.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="image"
          label="Image"
          value={newItem.image}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="sound"
          label="Sound"
          value={newItem.sound}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="quote"
          label="Quote"
          value={newItem.quote}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <FormControl component="fieldset">
          <FormLabel component="legend">Soundboard</FormLabel>
          <RadioGroup
            aria-label="Soundboard"
            name="soundboardId"
            value={newItem.soundboardId}
            onChange={handleRadioChange}
          >
            <FormControlLabel
              value={1}
              control={<Radio />}
              label="Characters"
            />
            <FormControlLabel value={2} control={<Radio />} label="Animals" />
          </RadioGroup>
        </FormControl>
        <Button onClick={handleCreate} variant="contained">
          Create Card
        </Button>
      </Box>
    </Modal>
  );
};

export default CreateItemModal;
