import { useState } from "react";
import { BoardItem } from "../components/BoardItem";
import useGetCollection from "../useGetCollection";
import { Chip, CircularProgress } from "@mui/material";
import { SoundBoardItem } from "../components/types/types";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const AnimalsPage = () => {
  const [quote, setQuote] = useState<string | null>(null);

  const { loading, data: soundboards } = useGetCollection<SoundBoardItem>(
    "/soundboards/2/items"
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

export { AnimalsPage };
