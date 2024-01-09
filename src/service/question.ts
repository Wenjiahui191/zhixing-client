import {get} from './fetch'

export async function getQuestionInfoById(id:string) {
    const url=`api/question/${id}`

    const data=await get(url)

    return data
}