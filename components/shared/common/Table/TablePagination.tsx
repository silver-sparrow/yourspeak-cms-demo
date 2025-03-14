import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

const TablePagination = ({
  currentPage,
  totalPages,
  handlePage,
  totalUsers,
  pageSize,
}: TABLE_PAGINATION_PROPS) => {
  return (
    <>
      <div className="text-sm text-gray-500">
        Showing{" "}
        <span className="font-medium">
          {totalUsers > 0 ? pageSize * currentPage : 0}
        </span>{" "}
        of <span className="font-medium">{totalUsers}</span> results
      </div>
      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => handlePage(currentPage - 1)}
          disabled={currentPage <= 1}
          className="h-8 px-3 text-xs bg-white"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Previous
        </Button>
        <div className="flex items-center justify-center">
          <div className="text-sm text-gray-700 font-medium px-3">
            Page {currentPage} of {totalPages || 1}
          </div>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => handlePage(currentPage + 1)}
          disabled={currentPage >= totalPages}
          className="h-8 px-3 text-xs bg-white"
        >
          Next
          <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </div>
    </>
  );
};

export default TablePagination;
