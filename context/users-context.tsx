import { Button } from "@/components/ui/button";
import { Check, Trash, X } from "lucide-react";

export const USERS_TAB_OPTIONS = [
  { value: "all", label: "All Users" },
  { value: "verified", label: "Verified Users" },
  { value: "unverified", label: "Unverified Users" },
  { value: "deactivated", label: "Deactivated Users" },
  { value: "admin", label: "Admin Users" },
];

export const USERS_TABLE_COLUMNS = (
  handleToggleStatus: (userId: number, isActive: boolean) => void,
  handleDeleteUser: (userId: number) => void
) => [
  {
    accessorKey: "id",
    header: "#",
    meta: { className: "w-16" },
  },
  {
    accessorKey: "first_name",
    header: "First Name",
    enableSorting: true,
  },
  {
    accessorKey: "last_name",
    header: "Last Name",
    enableSorting: true,
  },
  {
    accessorKey: "display_name",
    header: "Display Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "username",
    header: "Username",
  },
  {
    accessorKey: "created_at",
    header: "Created At",
    cell: ({ row }: { row: any }) => {
      const date = new Date(row?.created_at);
      return date.toLocaleDateString();
    },
  },
  {
    accessorKey: "actions",
    header: "Action",
    cell: ({ row }: { row: any }) => (
      <div className="flex space-x-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => handleToggleStatus(row?.id, row?.statuses?.verified)}
          title={row?.isActive ? "Deactivate" : "Activate"}
          className="cursor-pointer bg-gray-100 rounded-full"
        >
          {row?.statuses?.verified ? (
            <X className="h-10 w-10 text-red-500" />
          ) : (
            <Check className="h-10 w-10 text-black" />
          )}
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => handleDeleteUser(row?.id)}
          title="Delete"
          className="cursor-pointer bg-gray-100 rounded-full"
        >
          <Trash className="h-10 w-10 text-red-500" />
        </Button>
      </div>
    ),
  },
];
