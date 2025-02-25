import { Table } from "@tanstack/react-table";
import { useState } from "react";
import { FaTableList } from "react-icons/fa6";
import { Blog } from "@prisma/client";
import { convertCamelToTitleCase } from "./Table.utils";

interface ColumnSelector {
  table: Table<Blog>;
  columnIds: string[];
}

export const ColumnVisibilitySelector = ({ table, columnIds }: ColumnSelector) => {
  const [isPopoverOpen, setPopoverOpen] = useState(false);
  const columnVisibilityCheckboxState = Object.entries(
    table.getState().columnVisibility
  ).filter(([_, value]) => value).map(([key]) => key);

  const togglePopover = () => setPopoverOpen((prev) => !prev);

  return (
    <div className="relative">
      {/* Trigger Button */}
      <button onClick={togglePopover} className="flex gap-3 px-2 py-1 rounded-md hover:bg-slate-600 bg-slate-800 text-white font-semibold">
        <FaTableList size={30}/>
        Filter Columns
      </button>

      {/* Popover */}
      {isPopoverOpen && (
        <div className="absolute z-10 w-64 bg-[#272727] text-white border rounded-md shadow-md p-4 top-10">
          <div className="mb-4">
            <fieldset className="flex items-center gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="column-visibility"
                  value="all"
                  className="form-radio cursor-pointer"
                  defaultChecked
                  onChange={() =>
                    table.setColumnVisibility(
                      columnIds.reduce(
                        (acc: { [id: string]: boolean }, val) => {
                          acc[val] = true;
                          return acc;
                        },
                        {}
                      )
                    )
                  }
                />
                Show All
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="column-visibility"
                  value="none"
                  className="form-radio cursor-pointer"
                  onChange={() =>
                    table.setColumnVisibility(
                      columnIds.reduce(
                        (acc: { [id: string]: boolean }, val) => {
                          acc[val] = false;
                          return acc;
                        },
                        {}
                      )
                    )
                  } />
                Show None
              </label>
            </fieldset>
          </div>
          
          {/* Column Checkbox Group */}
          <div className="flex flex-col gap-2">
            {columnIds.map((id) => (
              <label key={id} className="flex items-center gap-2">
                <input type="checkbox" className="form-checkbox cursor-pointer" value={id} checked={columnVisibilityCheckboxState.includes(id)}
                  onChange={(e) => {
                    const selectedOptions = e.target.checked
                      ? [...columnVisibilityCheckboxState, id]
                      : columnVisibilityCheckboxState.filter((key) => key !== id);
                    table.setColumnVisibility(
                      columnIds.reduce(
                        (acc: { [id: string]: boolean }, val) => {
                          acc[val] = selectedOptions.includes(val);
                          return acc;
                        },
                        {}
                      )
                    );
                  }} />
                {convertCamelToTitleCase(id)}
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
