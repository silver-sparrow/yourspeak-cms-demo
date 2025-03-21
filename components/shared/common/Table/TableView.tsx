import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ChevronDown, ChevronUp } from "lucide-react";

const TableView = <T extends object>({
  columns,
  handleSort,
  sortColumn,
  sortedData,
  sortDirection,
  emptyState,
}: TABLE_VIEW_PROPS<T>) => {
  return (
    <Table className="w-full">
      <TableHeader>
        <TableRow className="bg-gray-50 hover:bg-gray-50">
          {columns.map((column: COLUMN_DEF<T>) => (
            <TableHead
              key={column.accessorKey.toString()}
              className={`px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${
                column.meta?.className || ""
              }`}
              onClick={() =>
                column.enableSorting &&
                handleSort(column.accessorKey.toString())
              }
              style={{
                cursor: column.enableSorting ? "pointer" : "default",
              }}
            >
              <div className="flex items-center space-x-1">
                <span>{column.header}</span>
                {column.enableSorting && (
                  <span className="ml-1">
                    {sortColumn === column.accessorKey ? (
                      sortDirection === "asc" ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )
                    ) : (
                      <span className="text-gray-300">
                        <ChevronUp className="h-3 w-3 -mb-1" />
                        <ChevronDown className="h-3 w-3" />
                      </span>
                    )}
                  </span>
                )}
              </div>
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {sortedData.length > 0 ? (
          sortedData.map((row: T, rowIndex: number) => (
            <TableRow
              key={rowIndex}
              className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
            >
              {columns.map((column: COLUMN_DEF<T>, colIndex: number) => (
                <TableCell
                  key={`${rowIndex}-${colIndex}`}
                  className={`px-4 py-2 ${column.meta?.className || ""}`}
                >
                  {column.cell
                    ? column.cell({ row })
                    : String(row[column.accessorKey as keyof T] ?? "N/A")}
                </TableCell>
              ))}
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell
              colSpan={columns.length}
              className="h-64 text-center border-b"
            >
              {emptyState}
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default TableView;
