import { configureStore } from "@reduxjs/toolkit";
import { useSelector, TypedUseSelectorHook} from "react-redux"
import { player } from "./Slice/player";


export const store = configureStore({
  reducer: {
    player: player
  }
})



export type RootState = ReturnType< typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector