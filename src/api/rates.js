const BASE_URL = 'https://openexchangerates.org/api/';
const APP_ID = 'e6f74380a0d1469db8eb2c26f11b5509';

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
