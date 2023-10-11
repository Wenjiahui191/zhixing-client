import { post } from "./fetch";

export async function submitQuestionData( body: any) {
  const url='/api/answer'
  const data = await post(url, body);

  return data;
}
