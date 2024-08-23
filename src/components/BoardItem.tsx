import { useState, useRef } from "react";
import { SoundBoardItem } from "./types/types";
import Tooltip from "@mui/material/Tooltip";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

type Props = {
  character: SoundBoardItem;
  onSoundStart: (quote: string) => void;
  onSoundStop: () => void;
};

const BoardItem = ({ character, onSoundStart, onSoundStop }: Props) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const audioRef = useRef(new Audio(character.sound));

  audioRef.current.addEventListener("ended", () => {
    setIsPlaying(false);
    onSoundStop();
  });

  const playSound = () => {
    console.log(!isPlaying);
    console.log();

    if (!isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
      onSoundStart(character.quote);
    } else {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Tooltip title={character.name} followCursor>
      <div
        className={`board-item-container ${isPlaying ? "playing" : ""}`}
        onClick={playSound}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="circle-border">
          <img
            src={character.image}
            alt="Board item"
            className="board-item-image"
          />
        </div>
        {isHovered && (
          <IconButton
            style={{
              position: "absolute",
              top: "-10px",
              right: "-10px",
              zIndex: 1,
            }}
            aria-label="delete"
            size="large"
          >
            <DeleteIcon />
          </IconButton>
        )}
      </div>
    </Tooltip>
  );
};

export { BoardItem };
