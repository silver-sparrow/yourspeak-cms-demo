import { Button } from "@/components/ui/button";
import { Pencil, Trash } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
export const TAGS_TABLE_COLUMNS = (
  handleEditTag: (userId: number) => void,
  handleDeleteTag: (userId: number) => void
) => [
  {
    accessorKey: "id",
    header: "#",
    meta: { className: "w-16" },
  },
  {
    accessorKey: "name",
    header: "Name",
    enableSorting: true,
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
    accessorKey: "avatar",
    header: "Avatar",
    cell: ({ row }: { row: any }) => {
      return (
        <Avatar>
          <AvatarImage src={row?.avatar} />
          <AvatarFallback>{row?.name?.charAt(0)}</AvatarFallback>
        </Avatar>
      );
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
          onClick={() => handleEditTag(row?.id)}
          title="Edit"
          className="cursor-pointer bg-gray-100 rounded-full"
        >
          <Pencil className="h-10 w-10 text-black" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => handleDeleteTag(row?.id)}
          title="Delete"
          className="cursor-pointer bg-gray-100 rounded-full"
        >
          <Trash className="h-10 w-10 text-red-500" />
        </Button>
      </div>
    ),
  },
];
