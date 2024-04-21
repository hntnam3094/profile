export async function dispatchDataApi (
  path: string
) {
  const response = await fetch(process.env.API_URL + '/api' + path);
  if (response.ok) {
    const data = await response.json();
    return data
  } else {
    throw new Error('Failed to fetch blog data');
  }
}