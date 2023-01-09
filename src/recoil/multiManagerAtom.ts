import {atom} from 'recoil';

export interface IMultiManager {
    isCreated : boolean,
}

export const multiManagerAtom = atom<IMultiManager>({
    key: 'multiManagerAtom',
    default:{
        isCreated : false
    }
})