import { createColumnHelper } from "@tanstack/react-table"
import { useMemo, useState } from "react";
import { FaChevronDown, FaChevronRight, FaTrash } from "react-icons/fa"
import { Blog } from "@prisma/client";
import { formatDate } from "@/utils/utils";
import Checkbox from "@/component/ui/Checkbox";

const DISPLAY_COLUMN_SIZE = 100
const columnHelper = createColumnHelper<Blog>();

export const useTableData = () => {
    const [data, setData] = useState<Blog[]>([]);

    const columns = useMemo(() => [

        columnHelper.display({
            id: "expand",
            cell: ({ row }) => row.getCanExpand() ? (
                <button className="flex justify-center items-center mx-auto"
                    onClick={row.getToggleExpandedHandler()}>
                    {row.getIsExpanded() ? <FaChevronDown size={20} /> : <FaChevronRight size={20} />}
                </button>
            ) : null,
            size: DISPLAY_COLUMN_SIZE
        }),

        columnHelper.display({
            id: "selection",
            header: ({ table }) => (
                <div className="flex justify-center items-center">
                    <Checkbox
                        checked={table.getIsAllRowsSelected()}
                        indeterminate={table.getIsSomeRowsSelected()}
                        onChange={table.getToggleAllRowsSelectedHandler()}
                        className="form-checkbox"
                    />
                </div>
            ),
            cell: ({ row }) => (
                <div className="flex justify-center items-center">
                    <Checkbox
                        onChange={row.getToggleSelectedHandler()}
                        checked={row.getIsSelected()}
                    />
                </div>
            ),
            size: DISPLAY_COLUMN_SIZE
        }),

        columnHelper.accessor("title", {
            id: "title",
            header: "Title",
            cell: ({ getValue }) => <div>{getValue().length > 30 ? getValue().substring(0, 30) + "..." : getValue()}</div>,
            size: DISPLAY_COLUMN_SIZE,
        }),

        columnHelper.accessor("description", {
            id: "description",
            header: "Description",
            cell: ({ getValue }) => <div className="text-justify">{getValue().length > 80 ? getValue().substring(0, 80) + "..." : getValue()}</div>,
            size: DISPLAY_COLUMN_SIZE,
        }),

        columnHelper.accessor("content", {
            id: "content",
            header: "Content",
            cell: ({ getValue }) => <pre>{getValue()}</pre>,
            size: DISPLAY_COLUMN_SIZE,
        }),

        columnHelper.accessor("createdAt", {
            id: "created_at",
            header: "Created At",
            cell: ({ getValue }) => <div>{formatDate(getValue())}</div>,
            size: DISPLAY_COLUMN_SIZE,
        }),

        columnHelper.accessor("updatedAt", {
            id: "updated_at",
            header: "Updated At",
            cell: ({ getValue }) => <div>{formatDate(getValue())}</div>,
            size: DISPLAY_COLUMN_SIZE,
        }),

        columnHelper.accessor("published", {
            id: "published",
            header: "Published",
            cell: ({ getValue }) => <div>{`${getValue()}`}</div>,
            size: DISPLAY_COLUMN_SIZE,
        }),

        columnHelper.accessor("id", {
            id: "id",
            header: "Id",
            size: DISPLAY_COLUMN_SIZE,
        }),

        columnHelper.display({
            id: "delete",
            header: () => (
                <div className="flex justify-center items-center">
                    Delete
                </div>
            ),
            cell: ({ row }) => (
                <div className="flex justify-center items-center">
                    <button className="text-xs p-1"
                        onClick={() =>
                            setData((prevData) =>
                                prevData.filter((user) => user.id !== row.original.id)
                            )
                        }>
                        <FaTrash />
                    </button>
                </div>
            ),
            size: DISPLAY_COLUMN_SIZE,
        }),
    ], [])

    const columnIds = useMemo(
        () => columns.map((column) => column.id) as string[],
        [columns]
    );

    const initialColumnVisibility = useMemo(() => {
        return columnIds.reduce((acc: { [id: string]: boolean }, colId) => {
            acc[colId] = colId === "id" || colId === "type" || colId === "content" || colId === "updatedAt" ? false : true;
            return acc;
        }, {});
    }, [columnIds]);


    return { columns, data, setData, columnIds, initialColumnVisibility };
};