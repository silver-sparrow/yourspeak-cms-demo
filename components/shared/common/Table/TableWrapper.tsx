import React from "react";
import FiltersNoData from "./FiltersNoData";
import TablePagination from "./TablePagination";
import UsersTabList from "../../users/UsersTabList";
import SearchBar from "../SearchBar";
import TableView from "./TableView";

const TableWrapper = <T extends object>({
  data,
  columns,
  searchable = false,
  searchField,
  pagination = false,
  pageSize = 10,
  className = "",
  isTab = false,
  emptyState = <FiltersNoData />,
  currentPage,
  totalPages,
  totalUsers,
  handlePage,
}: TABLE_DATA_PROPS<T>) => {
  //STATES
  const [searchQuery, setSearchQuery] = React.useState("");
  const [sortColumn, setSortColumn] = React.useState<string | null>(null);
  const [sortDirection, setSortDirection] = React.useState<"asc" | "desc">(
    "asc"
  );

  //FUNCTIONS
  const handleSort = (columnKey: string) => {
    if (sortColumn === columnKey) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(columnKey);
      setSortDirection("asc");
    }
  };

  //MEMOIZED DATA
  // const filteredData = React.useMemo(() => {
  //   if (!searchable || !searchQuery || !searchField) return data;

  //   return data.filter((row) => {
  //     const value = row[searchField];
  //     if (typeof value === "string") {
  //       return value.toLowerCase().includes(searchQuery.toLowerCase());
  //     }
  //     return false;
  //   });
  // }, [data, searchQuery, searchable, searchField]);

  const sortedData = React.useMemo(() => {
    if (!sortColumn) return data;

    return [...data].sort((a, b) => {
      const valueA = a[sortColumn as keyof T];
      const valueB = b[sortColumn as keyof T];

      if (valueA === valueB) return 0;

      if (valueA === null || valueA === undefined) return 1;
      if (valueB === null || valueB === undefined) return -1;

      const comparison =
        typeof valueA === "string"
          ? valueA.localeCompare(String(valueB))
          : Number(valueA) - Number(valueB);

      return sortDirection === "asc" ? comparison : -comparison;
    });
  }, [data, sortColumn, sortDirection]);

  return (
    <div className={`w-full ${className}`}>
      <div className="flex flex-col xl:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        {isTab && (
          <div className="w-full xl:w-auto">
            <UsersTabList />
          </div>
        )}
        {searchable && searchField && (
          <SearchBar
            value={searchQuery}
            onChange={(e: string) => setSearchQuery(e)}
            placeholder="Search by name, email or username..."
            className="w-full sm:w-auto sm:min-w-full xl:min-w-[400px]"
          />
        )}
      </div>

      <div className="rounded-lg border-2 border-gray-200 overflow-hidden shadow-sm bg-white">
        <div className="overflow-x-auto">
          <TableView
            columns={columns}
            handleSort={handleSort}
            sortColumn={sortColumn}
            sortedData={sortedData}
            sortDirection={sortDirection}
            emptyState={emptyState}
          />
        </div>
      </div>

      {pagination && (
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-3 sm:space-y-0 py-4">
          <TablePagination
            currentPage={currentPage || 1}
            totalPages={totalPages || 1}
            handlePage={handlePage || (() => {})}
            totalUsers={totalUsers || 0}
            pageSize={pageSize}
          />
        </div>
      )}
    </div>
  );
};

export default TableWrapper;
