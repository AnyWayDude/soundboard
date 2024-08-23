import { useNavigate } from "react-router-dom";
import { Boards } from "./Boards";
import { SoundboardCollection } from "./types/types";

type Props = {
  board: SoundboardCollection;
};

const BoardWrapper = ({ board }: Props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/soundboard/${board.id}`);
  };

  return <Boards board={board} onClick={handleClick} />;
};

export { BoardWrapper };
