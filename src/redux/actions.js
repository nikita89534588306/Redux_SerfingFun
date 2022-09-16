import { INC, DEC, INPUT_TXT } from "./types"

export function incLikes(){return{type:INC}}
export function decLikes(){return{type:DEC}}
export function inputText(text){return{type:INPUT_TXT, text}}
