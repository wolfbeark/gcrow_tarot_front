
import { atom } from "recoil";

export interface ITotalManagerAtom {
    isLogined : boolean,
    totalHeight : number,
    isClickedStart : boolean,
}
export const totalManagerAtom = atom<ITotalManagerAtom>({
    key: 'totalManagerAtom',
    default: {
        isLogined : false,
        totalHeight : 0,
        isClickedStart : false,
    }
})