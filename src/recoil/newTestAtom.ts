import {atom} from 'recoil';

export const newTestAtom = atom<string | boolean | undefined>({
    key: 'newTestAtom',
    default: 'haha'
})

