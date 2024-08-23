import axios from "axios";
import { SoundBoardItem } from "../components/types/types";

const END_POINT = "http://localhost:5000/characters";

const getAllCharacters = async (
  onSuccess: (data: SoundBoardItem[]) => void,
  onError: (error: any) => void
): Promise<void> => {
  try {
    const response = await axios.get<SoundBoardItem[]>(END_POINT);
    onSuccess(response.data);
    // return response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Error server:", error.message);
    } else {
      console.error("Unknown error", error);
    }
    onError(error);
    // throw error
  }
};

export { getAllCharacters };
