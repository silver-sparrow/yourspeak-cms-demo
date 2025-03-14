"use client";
import React, { useEffect, useMemo, useState } from "react";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import {
  USERS_TABLE_COLUMNS,
  USERS_TAB_OPTIONS,
} from "@/context/users-context";
import { useUsersHandler } from "@/hooks/users/useUsersHandler";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";
import ConfirmationModal from "@/components/shared/common/ConfirmationModal";
import TableWrapper from "@/components/shared/common/Table/TableWrapper";

const Page = () => {
  //HOOKS
  const { handleFetchUsers, handleUserStatus, deleteUser } = useUsersHandler();

  //CONSTANTS
  const PAGE_SIZE = 20;

  //STATES
  const [activeTab, setActiveTab] = useState("all");
  const [isModals, setIsModals] = useState<USER_MODALS_STATE>({
    delete: {
      isOpen: false,
      userId: null,
    },
    status: {
      isOpen: false,
      userId: null,
      isActive: false,
    },
  });

  //REDUX
  const { users, current_page, total_users, total_pages } = useSelector(
    (state: RootState) => state.users
  );

  //FUNCTIONS
  const handlePage = (page: number) => {
    fetchUsersByTab(activeTab, page, PAGE_SIZE);
  };

  const handleDeleteUser = () => {
    handleToggleModal("delete");
    deleteUser({
      userId: isModals.delete.userId as number,
    })
      .then(() => {
        fetchUsersByTab(activeTab, 1, PAGE_SIZE);
      })
      .catch(() => {
        handleToggleModal("delete", isModals.delete.userId as number);
      });
  };

  const handleToggleStatus = () => {
    handleToggleModal("status");
    handleUserStatus({
      payload: {
        id: isModals.status.userId as number,
        isActive: isModals.status.isActive,
      },
    })
      .then(() => {
        fetchUsersByTab(activeTab, 1, PAGE_SIZE);
      })
      .catch(() => {
        handleToggleModal(
          "status",
          isModals.status.userId as number,
          isModals.status.isActive
        );
      });
  };

  const handleToggleModal = (
    modal: keyof USER_MODALS_STATE,
    userId?: number,
    isActive?: boolean
  ) => {
    if (userId) {
      setIsModals((prev: USER_MODALS_STATE) => ({
        ...prev,
        [modal]: { isOpen: true, userId: userId, isActive },
      }));
    } else {
      setIsModals((prev: USER_MODALS_STATE) => ({
        ...prev,
        [modal]: { isOpen: false, userId: null },
      }));
    }
  };

  const fetchUsersByTab = (tab: string, page: number, pageSize: number) => {
    handleFetchUsers({ payload: tab, page, pageSize });
  };

  //MEMOIZED COLUMNS
  const columns = useMemo(
    () =>
      USERS_TABLE_COLUMNS(
        (userId: number, isActive: boolean) => {
          handleToggleModal("status", userId, isActive);
        },
        (userId: number) => {
          handleToggleModal("delete", userId);
        }
      ),
    []
  );

  //USE EFFECT
  useEffect(() => {
    fetchUsersByTab(activeTab, 1, PAGE_SIZE);
  }, [activeTab]);

  return (
    <div className="px-4 py-6 bg-white rounded-xl">
      <h1 className="text-2xl font-bold mb-6">Users</h1>
      <Tabs defaultValue="all" onValueChange={setActiveTab}>
        {USERS_TAB_OPTIONS.map((tab) => (
          <TabsContent key={tab.value} value={tab.value} className="mt-0">
            <TableWrapper
              data={users}
              columns={columns}
              searchable
              searchField="displayName"
              isTab
              pagination
              pageSize={PAGE_SIZE}
              currentPage={current_page}
              totalPages={total_pages}
              totalUsers={total_users}
              handlePage={handlePage}
            />
          </TabsContent>
        ))}
      </Tabs>
      <ConfirmationModal
        isOpen={isModals.delete.isOpen}
        onClose={() => handleToggleModal("delete")}
        onConfirm={handleDeleteUser}
        title="Delete User"
        description="Are you sure you want to delete this user? This action cannot be undone."
        type="delete"
      />
      <ConfirmationModal
        isOpen={isModals.status.isOpen}
        onClose={() => handleToggleModal("status")}
        onConfirm={handleToggleStatus}
        title={!isModals.status.isActive ? "Activate User" : "Deactivate User"}
        description={
          !isModals.status.isActive
            ? "Are you sure you want to activate this user?"
            : "Are you sure you want to deactivate this user?"
        }
        type={!isModals.status.isActive ? "success" : "error"}
      />
    </div>
  );
};

export default Page;
