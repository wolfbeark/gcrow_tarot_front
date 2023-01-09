import { atom } from "recoil";

export const testAtomManager = atom({
    key: 'testAtomManager',
    default: {
        isTest : true
    }
})