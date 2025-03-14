"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { AlertCircle, CheckCircle, XCircle } from "lucide-react";

const ConfirmationModal: React.FC<CONFIRMATION_MODAL_PROPS> = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  description,
  confirmText = "Confirm",
  cancelText = "Cancel",
  type = "confirm",
  customIcon,
}) => {
  //FUNCTIONS
  const getModalConfig = () => {
    switch (type) {
      case "delete":
        return {
          confirmButtonVariant: "destructive" as const,
          confirmText: confirmText || "Delete",
          icon: <XCircle className="h-12 w-12 text-red-500" />,
        };
      case "success":
        return {
          confirmButtonVariant: "default" as const,
          confirmText: confirmText || "OK",
          icon: <CheckCircle className="h-12 w-12 text-green-500" />,
        };
      case "error":
        return {
          confirmButtonVariant: "destructive" as const,
          confirmText: confirmText || "OK",
          icon: <XCircle className="h-12 w-12 text-red-500" />,
        };
      case "custom":
        return {
          confirmButtonVariant: "default" as const,
          confirmText: confirmText || "Confirm",
          icon: customIcon || null,
        };
      default:
        return {
          confirmButtonVariant: "default" as const,
          confirmText: confirmText || "Confirm",
          icon: <AlertCircle className="h-12 w-12 text-blue-500" />,
        };
    }
  };

  //CONSTANTS
  const config = getModalConfig();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] p-0 overflow-hidden rounded-lg border border-gray-200 shadow-lg bg-white">
        <div className={`w-full px-6 pt-6`}>
          <div className="flex flex-col items-center text-center">
            {config.icon && <div className="mb-4">{config.icon}</div>}
            <DialogTitle className="text-xl font-semibold -mb-2">
              {title}
            </DialogTitle>
          </div>
        </div>

        {description && (
          <DialogDescription className="px-6 text-center">
            {description}
          </DialogDescription>
        )}

        <DialogFooter className="flex justify-center gap-3 px-4 py-2 bg-gray-50 border-t border-gray-200">
          <Button
            variant="outline"
            onClick={onClose}
            className="min-w-24 bg-white hover:bg-gray-50 border-gray-300 cursor-pointer"
          >
            {cancelText}
          </Button>
          <Button
            variant={config.confirmButtonVariant}
            onClick={onConfirm}
            className={`min-w-24 cursor-pointer ${
              type === "delete"
                ? "bg-red-600 hover:bg-red-700 text-white"
                : type === "success"
                ? "bg-green-600 hover:bg-green-700 text-white"
                : type === "error"
                ? "bg-red-600 hover:bg-red-700 text-white"
                : ""
            }`}
          >
            {config.confirmText}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmationModal;
