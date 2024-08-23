import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { SoundboardCollection } from "./types/types";

type Props = {
  board: SoundboardCollection;
  onClick: () => void;
};

const Boards = ({ board, onClick }: Props) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={onClick}>
        <CardMedia
          component="img"
          height="160"
          image={board.image}
          alt={board.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {board.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export { Boards };
