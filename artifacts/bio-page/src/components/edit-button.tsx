import { useEditMode } from "@/context/edit-mode";
import { Pencil } from "lucide-react";

export default function EditButton() {
  const { isEditMode, toggleEditMode } = useEditMode();

  return (
    <button
      data-testid="edit-toggle"
      onClick={toggleEditMode}
      className="fixed top-4 right-4 z-50 inline-flex items-center justify-center w-9 h-9 rounded-md border border-border bg-card text-foreground shadow-sm hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      aria-label={isEditMode ? "Close editor" : "Open editor"}
    >
      <Pencil className="h-4 w-4" />
    </button>
  );
}
