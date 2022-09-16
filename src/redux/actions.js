import { INC, DEC, INPUT_TXT, COMMENT_CREATE } from "./types"

export function incLikes(){return{type:INC}}
export function decLikes(){return{type:DEC}}
export function inputText(text){return{type:INPUT_TXT, text}}
export function commentCreate(text, id){return{type:COMMENT_CREATE, data: {text, id}}}
