import { FaPlus } from "react-icons/fa";

export function Button({icon}) {
  return (
    <>
      <button
        style={{ backgroundColor: "lightgrey" }}
        className="px-3.5 py-3.5 text-indigo-600 duration-150 bg-blue-500 rounded-lg hover:bg-indigo-100 active:bg-indigo-200"
      >
        {icon}
      </button>
    </>
  );
}
