import React from "react";

const LanguageSelector = () => {
  return (
    <div className="flex flex-col gap-y-2">
      <span className="font-semibold">Language</span>
      <select
        name="Language"
        id=""
        className="outline-none border-[1px] p-1 text-sm appearance-none focus:ring-0 border-gray-300 rounded-none"
      >
        <option className="focus:appearance-none" value="cpp">
          C++
        </option>
        <option value="javascript">Javascript</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
