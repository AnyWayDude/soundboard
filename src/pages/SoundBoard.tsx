import { CircularProgress } from "@mui/material";

import { SoundboardCollection } from "../components/types/types";
import useGetCollection from "../useGetCollection";
import { BoardWrapper } from "../components/BoardWrapper";

const SoundBoard = () => {
  const { loading, data: soundboardCollection } =
    useGetCollection<SoundboardCollection>("/soundboards");

  console.log("Collection", soundboardCollection);

  if (loading) return <CircularProgress />;

  return (
    <div className="board-container">
      <div
        className="board-list"
        style={{ gridTemplateColumns: "repeat(2, 1fr)" }}
      >
        {soundboardCollection.map((board) => (
          <BoardWrapper board={board} />
        ))}
      </div>
    </div>
  );
};

export { SoundBoard };
