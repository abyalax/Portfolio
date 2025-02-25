import { FaAngleLeft, FaAngleRight, FaAnglesLeft, FaAnglesRight, } from "react-icons/fa6";
import { Blog } from "@prisma/client";
import { Table } from "@tanstack/react-table";

export default function Pagination({ table }: { table: Table<Blog> }) {
  return (
    <div className="flex items-center gap-2 cursor-pointer w-fit h-fit">
      <button className="cursor-pointer hover:text-black"
        aria-label="First Page"
        onClick={() => table.firstPage()}
        disabled={!table.getCanPreviousPage()}
      >
        <FaAnglesLeft />
      </button>
      <button className="cursor-pointer hover:text-black"
        aria-label="Prev Page"
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
      >
        <FaAngleLeft />
      </button>
      <button className="cursor-pointer hover:text-black"
        aria-label="Next Page"
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
      >
        <FaAngleRight />
      </button>
      <button className="cursor-pointer hover:text-black"
        aria-label="Last Page"
        onClick={() => table.lastPage()}
        disabled={!table.getCanNextPage()}
      >
        <FaAnglesRight />
      </button>

      <p className="text-sm">
        Page {table.getState().pagination.pageIndex + 1} of{" "}
        {table.getPageCount()}
      </p>
    </div>
  );
}
