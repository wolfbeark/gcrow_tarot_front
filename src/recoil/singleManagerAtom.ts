import {atom} from 'recoil';

export interface ISingleManager {
    isCreated : boolean,
}

export const singleManagerAtom = atom<ISingleManager>({
    key: 'singleManagerAtom',
    default:{
        isCreated : false
    }
})