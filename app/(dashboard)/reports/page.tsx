"use client";
import React, { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";
import TableWrapper from "@/components/shared/common/Table/TableWrapper";
import { REPORTS_TABLE_COLUMNS } from "@/context/reports-context";
import { useReportsHandler } from "@/hooks/reports/useReportsHandler";

const Page = () => {
  //HOOKS
  const { handleFetchReports } = useReportsHandler();

  //CONSTANTS
  const PAGE_SIZE = 10;

  //REDUX
  const { reports, current_page, total_users, total_pages } = useSelector(
    (state: RootState) => state.reports
  );

  //FUNCTIONS
  const handlePage = (page: number) => {
    fetchReports(page, PAGE_SIZE);
  };

  const fetchReports = (page: number, pageSize: number) => {
    handleFetchReports({ page, pageSize });
  };

  //MEMOIZED COLUMNS
  const columns = useMemo(() => REPORTS_TABLE_COLUMNS(), []);

  //USE EFFECT
  useEffect(() => {
    fetchReports(current_page, PAGE_SIZE);
  }, []);

  return (
    <div className="px-4 py-6 bg-white rounded-xl">
      <h1 className="text-2xl font-bold mb-6">Reports List</h1>
      <TableWrapper
        data={reports}
        columns={columns}
        searchable
        searchField="displayName"
        pagination
        pageSize={PAGE_SIZE}
        currentPage={current_page}
        totalPages={total_pages}
        totalUsers={total_users}
        handlePage={handlePage}
      />
    </div>
  );
};

export default Page;
