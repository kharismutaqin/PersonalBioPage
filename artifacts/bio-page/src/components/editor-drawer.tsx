import { useEditMode } from "@/context/edit-mode";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import ProfileEditor from "@/components/editors/profile-editor";

function EditorGroup({ title, children }: { title: string; children?: React.ReactNode }) {
  return (
    <div className="py-3 border-b border-border">
      <h3 className="text-sm font-medium text-foreground mb-2">{title}</h3>
      {children ?? (
        <p className="text-xs text-muted-foreground">
          Placeholder for {title.toLowerCase()} editing controls.
        </p>
      )}
    </div>
  );
}

export default function EditorDrawer() {
  const { isEditMode, setEditMode } = useEditMode();

  return (
    <Sheet open={isEditMode} onOpenChange={setEditMode}>
      <SheetContent
        side="right"
        className="w-full sm:w-[400px]"
        data-testid="editor-drawer"
      >
        <SheetHeader>
          <SheetTitle>Customize</SheetTitle>
          <SheetDescription>
            Edit your bio page content and appearance.
          </SheetDescription>
        </SheetHeader>
        <div className="mt-4 space-y-1">
          <EditorGroup title="Profile">
            <ProfileEditor />
          </EditorGroup>
          <EditorGroup title="Links" />
          <EditorGroup title="Theme" />
          <EditorGroup title="Layout" />
        </div>
      </SheetContent>
    </Sheet>
  );
}
