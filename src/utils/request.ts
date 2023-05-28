type Params = {
  method: string;
  city: string | Object | undefined;
};
const baseURL = import.meta.env.VITE_BASE_URL;
const appId = import.meta.env.VITE_APP_ID;

export const request = async ({ method, city }: Params) => {
  try {
    const response = await fetch(
      `${baseURL}?APPID=${appId}&q=${city}&units=imperial`,
      {
        method,
      }
    );

    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
};
