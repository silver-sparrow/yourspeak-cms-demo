"use client";
import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";
import ConfirmationModal from "@/components/shared/common/ConfirmationModal";
import TableWrapper from "@/components/shared/common/Table/TableWrapper";
import { TAGS_TABLE_COLUMNS } from "@/context/tags-context";
import { useTagsHandler } from "@/hooks/tags/useTagsHandler";

const Page = () => {
  //HOOKS
  const { handleFetchTags } = useTagsHandler();

  //CONSTANTS
  const PAGE_SIZE = 10;

  //STATES
  const [isModals, setIsModals] = useState<TAGS_MODALS_STATE>({
    delete: {
      isOpen: false,
      userId: null,
    },
    edit: {
      isOpen: false,
      userId: null,
    },
  });

  //REDUX
  const { tags, current_page, total_users, total_pages } = useSelector(
    (state: RootState) => state.tags
  );

  //FUNCTIONS
  const handlePage = (page: number) => {
    fetchTags(page, PAGE_SIZE);
  };

  const handleDeleteUser = () => {
    console.log(isModals.delete.userId, "Delete User");
  };

  const handleEditTag = () => {
    console.log(isModals.edit.userId, "Edit Tag");
  };

  const handleToggleModal = (
    modal: keyof TAGS_MODALS_STATE,
    userId?: number
  ) => {
    if (userId) {
      setIsModals((prev: TAGS_MODALS_STATE) => ({
        ...prev,
        [modal]: { isOpen: true, userId: userId },
      }));
    } else {
      setIsModals((prev: TAGS_MODALS_STATE) => ({
        ...prev,
        [modal]: { isOpen: false, userId: null },
      }));
    }
  };

  const fetchTags = (page: number, pageSize: number) => {
    handleFetchTags({ page, pageSize });
  };

  //MEMOIZED COLUMNS
  const columns = useMemo(
    () =>
      TAGS_TABLE_COLUMNS(
        (userId: number) => {
          handleToggleModal("edit", userId);
        },
        (userId: number) => {
          handleToggleModal("delete", userId);
        }
      ),
    []
  );

  //USE EFFECT
  useEffect(() => {
    fetchTags(current_page, PAGE_SIZE);
  }, []);

  return (
    <div className="px-4 py-6 bg-white rounded-xl">
      <h1 className="text-2xl font-bold mb-6">Tag List</h1>
      <TableWrapper
        data={tags}
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
      <ConfirmationModal
        isOpen={isModals.delete.isOpen}
        onClose={() => handleToggleModal("delete")}
        onConfirm={handleDeleteUser}
        title="Delete User"
        description="Are you sure you want to delete this user? This action cannot be undone."
        type="delete"
      />
      <ConfirmationModal
        isOpen={isModals.edit.isOpen}
        onClose={() => handleToggleModal("edit")}
        onConfirm={handleEditTag}
        title="Edit Tag"
        description="Are you sure you want to edit this tag?"
        type="success"
      />
    </div>
  );
};

export default Page;
