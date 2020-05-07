const BASE_URL = 'https://openexchangerates.org/api/';
const APP_ID = '7f9a295d46ae4147b41d6a2eb768d26d';

export async function getLatestRates() {
  const response = await fetch(`${BASE_URL}latest.json?app_id=${APP_ID}`);

  if (!response.ok) {
    return Promise.reject({
      isSuccessful: false,
    });
  }

  return {
    isSuccessful: true,
    data: await response.json(),
  };
}
