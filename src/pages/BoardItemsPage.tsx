import { useState } from "react";
import { BoardItem } from "../components/BoardItem";
import useGetCollection from "../useGetCollection";
import { CircularProgress, Chip } from "@mui/material";
import { SoundBoardItem } from "../components/types/types";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { useParams } from "react-router-dom";

const BoardItemsPage = () => {
  const [quote, setQuote] = useState<string | null>(null);

  const { id } = useParams();

  const { loading, data: soundboards } = useGetCollection<SoundBoardItem>(
    `/soundboards/${id}/items`
  );

  if (loading) return <CircularProgress />;

  return (
    <div className="board-container">
      <Chip
        variant="outlined"
        icon={<FormatQuoteIcon />}
        label={quote === null ? "Character speaks" : quote}
      />
      <div className="board-list">
        {soundboards.map((character) => (
          <BoardItem
            key={character.id}
            character={character}
            onSoundStart={(quote) => setQuote(quote)}
            onSoundStop={() => setQuote(null)}
          />
        ))}
      </div>
    </div>
  );
};

export { BoardItemsPage };
