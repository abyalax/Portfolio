import { flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table";
import { fuzzyFilter, reorder } from "./Table.utils";
import { useTableData } from "./useTableData";
import { TableHeader } from "./TableHeader";
import RowDetailView from "./RowDetail";
import Pagination from "./Pagination";
import dynamic from "next/dynamic";
import { Fragment, useEffect } from "react";
import { ColumnVisibilitySelector } from "./ColumnVisibility";
import { Project } from "@prisma/client";

const Droppable = dynamic(() => import('react-beautiful-dnd').then((mod) => mod.Droppable), { ssr: false });
const DragDropContext = dynamic(() => import('react-beautiful-dnd').then((mod) => mod.DragDropContext), { ssr: false });

const Table = ({ project }: { project: Project[] }) => {
  const { columns, setData, initialColumnVisibility, columnIds } = useTableData();

  useEffect(() => {
    setData(project);
    return () => {
      setData([]);
    };
  }, [project, setData]);

  const table = useReactTable<Project>({
    data: project,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    filterFns: { fuzzy: fuzzyFilter },
    globalFilterFn: fuzzyFilter,
    getPaginationRowModel: getPaginationRowModel(),
    enableRowSelection: true,
    getRowCanExpand: () => true,
    initialState: {
      columnVisibility: initialColumnVisibility,
      columnOrder: columnIds,
    },
  });

  return (
    <main className="">
      <div className="fixed flex items-center text-[#edf0f7] bg-[#272727] border-b-2 border-gray-500 w-full py-2">
        <ColumnVisibilitySelector table={table} columnIds={columnIds} />
        <input className="ml-2 w-96 px-3 py-2 text-black bg-transparent rounded border border-gray-500 ring-0 focus:outline-none focus:border-2 focus:border-blue-500"
          onChange={(e) => table.setGlobalFilter(e.target.value)}
          placeholder="Search..."
        />
      </div>

      <div className="pt-20">
        <div className="bg-[#272727] text-white border-2 border-gray-500 h-fit w-fit rounded-xl">
          <table className="min-w-[1500px] rounded-lg overflow-hidden">
            <DragDropContext onDragEnd={({ destination, source }) => {
              if (!destination) {
                return;
              }
              const items = reorder(
                table.getState().columnOrder,
                source.index,
                destination.index
              );
              table.setColumnOrder(items);
            }}>

              <thead className="border-b border-gray-500 p-4">
                {table.getHeaderGroups().map((headerGroup, i) => (
                  <Droppable key={headerGroup.id} droppableId={"header"} direction="horizontal" type="column">
                    {(provided) => (
                      <tr key={`${headerGroup.id}-${i}`} {...provided.droppableProps} ref={provided.innerRef} className="p-4">
                        {headerGroup.headers.map((header, index) => (
                          <TableHeader key={header.id} header={header} index={index} />
                        ))}
                        {provided.placeholder}
                      </tr>
                    )}
                  </Droppable>
                ))}
              </thead>
            </DragDropContext>

            <tbody className="rounded-xl overflow-x-auto bg-[#272727]">
              {table.getRowModel().rows.map((project) => (

                <Fragment key={project.id}>
                  <tr className={`overflow-x-scroll h-fit ${project.getIsSelected() && "border-4 border-blue-500"}`} >
                    {project.getVisibleCells().map((cell) => (

                      <td key={cell.id} className="py-2 px-1 text-nowrap border-r border-gray-500">
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>

                    ))}

                  </tr>

                  {project.getIsExpanded() && (
                    <tr>
                      <td colSpan={project.getVisibleCells().length}>
                        <RowDetailView project={project.original} />
                      </td>
                    </tr>
                  )}
                </Fragment>

              ))}
            </tbody>

            <tfoot>
              {table.getFooterGroups().map((footerGroup) => {
                return (
                  <tr key={footerGroup.id}>
                    {footerGroup.headers.map((footer) => {
                      return (
                        <td key={footer.id}>
                          {footer.isPlaceholder
                            ? null
                            : flexRender(
                              footer.column.columnDef.footer,
                              footer.getContext()
                            )}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tfoot>

          </table>
        </div>
      </div>

      <div>
        <Pagination table={table} />
      </div>
    </main>
  )
}

export default Table