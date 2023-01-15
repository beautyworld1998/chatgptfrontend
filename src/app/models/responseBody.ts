import { Choices } from "./choices";

export interface ResponseBody {
    id:string,
    created:number,
    model:string,
    status:boolean,
    choices:Choices[]
}