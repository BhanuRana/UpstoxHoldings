export async function fetchHoldings() {
  const HOLDINGS_API_URL = `https://run.mocky.io/v3/bde7230e-bc91-43bc-901d-c79d008bddc8`;
  const response = await fetch(HOLDINGS_API_URL);
  return await response.json();
}
