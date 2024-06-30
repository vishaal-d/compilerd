import React from "react";
import { Listbox } from "@headlessui/react";

const Dropdown = ({ options, selectedOption, setSelectedOption }) => {
  return (
    <Listbox value={selectedOption} onChange={setSelectedOption}>
      <div className="relative">
        <Listbox.Button className="relative w-32 py-2 pl-3 pr-10 text-left bg-white border rounded-md shadow-md cursor-default sm:text-sm">
          {selectedOption.name}
        </Listbox.Button>
        <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto bg-white border rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
          {options.map((option) => (
            <Listbox.Option key={option.id} value={option}>
              {({ selected }) => (
                <span
                  className={`${
                    selected ? "font-medium" : "font-normal"
                  } block truncate`}
                >
                  {option.name}
                </span>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </div>
    </Listbox>
  );
};

export default Dropdown;
