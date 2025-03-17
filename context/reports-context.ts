import { Button } from "@/components/ui/button";

export const REPORTS_TABLE_COLUMNS = () => [
  {
    accessorKey: "id",
    header: "#",
    meta: { className: "w-16" },
  },
  {
    accessorKey: "first_name",
    header: "First Name",
    enableSorting: true,
    cell: ({ row }: { row: any }) => {
      return row?.reporter?.first_name;
    },
  },
  {
    accessorKey: "last_name",
    header: "Last Name",
    enableSorting: true,
    cell: ({ row }: { row: any }) => {
      return row?.reporter?.last_name;
    },
  },
  {
    accessorKey: "email",
    header: "Reporter Email",
    enableSorting: true,
    cell: ({ row }: { row: any }) => {
      return row?.reporter?.email;
    },
  },
  {
    accessorKey: "username",
    header: "Reporter Name",
    enableSorting: true,
    cell: ({ row }: { row: any }) => {
      return row?.reporter?.username;
    },
  },
  {
    accessorKey: "content",
    header: "Content",
    enableSorting: true,
    cell: ({ row }: { row: any }) => {
      return row?.reportable?.content?.slice(0, 100);
    },
  },
  {
    accessorKey: "created_at",
    header: "Created At",
    cell: ({ row }: { row: any }) => {
      const date = new Date(row?.created_at);
      return date.toLocaleDateString();
    },
  },
];
