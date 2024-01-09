// const HOST = "http://localhost:3004/";
const HOST = "http://121.37.243.163:3004/";

export async function get(url: string) {
  const data = await fetch(`${HOST}${url}`);
  return data.json();
}

export async function post(url: string, body: any) {
  const data = await fetch(`${HOST}${url}`, { method: "post", body:JSON.stringify(body) });
  return data.json();
}
