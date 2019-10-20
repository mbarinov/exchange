export async function getAccounts() {
  const response = await fetch('http://localhost:4000/accounts');

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
