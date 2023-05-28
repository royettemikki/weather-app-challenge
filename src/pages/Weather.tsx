import { useLocation, NavLink } from "react-router-dom";
import Layout from "../layouts/Layout";

const Weather = () => {
  const { state } = useLocation();
  const date = new Date(state.dt);
  const day = String(date.getDay()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const dateWithFormat = `${month}/${day}/${date.getFullYear()}`;

  return (
    <Layout>
      <>
        <span className="text-stone-600 text-lg font-bold m-5">
          {state.name}, ({state.sys.country})
        </span>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 shadow-lg">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Date (mm/dd/yyyy)
                </th>
                <th scope="col" className="px-6 py-3">
                  Temp (F)
                </th>
                <th scope="col" className="max-sm:hidden px-6 py-3">
                  Description
                </th>
                <th scope="col" className="max-sm:hidden px-6 py-3">
                  Main
                </th>
                <th scope="col" className="max-sm:hidden px-6 py-3">
                  Pressure
                </th>
                <th scope="col" className="max-sm:hidden px-6 py-3">
                  Himidity
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {dateWithFormat}
                </th>
                <td className="px-6 py-4">{state.main.temp}</td>
                <td className="max-sm:hidden px-6 py-4">
                  {state.weather[0].description}
                </td>
                <td className="max-sm:hidden px-6 py-4">
                  {state.weather[0].main}
                </td>
                <td className="max-sm:hidden px-6 py-4">
                  {state.main.pressure}
                </td>
                <td className="max-sm:hidden px-6 py-4">
                  {state.main.humidity}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="w-full flex justify-end mt-10 ">
          <NavLink
            className="border rounded text-center p-2 text-black hover:text-stone-700 hover:border-blue-300 w-[100px]"
            to="/home"
          >
            Back
          </NavLink>
        </div>
      </>
    </Layout>
  );
};

export default Weather;
