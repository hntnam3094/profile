export async function dispatchDataApi(path: string) {
  console.log(process.env.NEXT_PUBLIC_API_URL)
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api" + path, {
    cache: "no-store",
  });
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    throw new Error("Failed to fetch blog data");
  }
}
