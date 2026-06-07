import { useState } from "react";
import { useSiteState } from "@/context/site-state";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Trash2, Copy, Plus } from "lucide-react";

function LinkItemEditor({ index, link }: { index: number; link: ReturnType<typeof useSiteState>["links"][0] }) {
  const { updateLink, deleteLink, duplicateLink } = useSiteState();
  const [open, setOpen] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const result = ev.target?.result;
      if (typeof result === "string") {
        updateLink(index, {
          icon: { type: "file", value: result },
        });
      }
    };
    reader.readAsDataURL(file);
  };

  const iconType = link.icon?.type ?? "auto";

  return (
    <div className="border border-border rounded-md overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-left hover:bg-accent"
      >
        <span className="truncate">{link.title || "Untitled"}</span>
        {open ? <ChevronUp className="h-4 w-4 shrink-0" /> : <ChevronDown className="h-4 w-4 shrink-0" />}
      </button>

      {open && (
        <div className="px-3 py-3 space-y-3 border-t border-border">
          <div>
            <Label className="text-xs">Title</Label>
            <Input
              value={link.title}
              onChange={(e) => updateLink(index, { title: e.target.value })}
              className="mt-1 h-8 text-sm"
            />
          </div>
          <div>
            <Label className="text-xs">Description</Label>
            <Textarea
              value={link.description}
              onChange={(e) => updateLink(index, { description: e.target.value })}
              className="mt-1 min-h-[50px] text-sm"
            />
          </div>
          <div>
            <Label className="text-xs">URL</Label>
            <Input
              value={link.url}
              onChange={(e) => updateLink(index, { url: e.target.value })}
              className="mt-1 h-8 text-sm"
            />
          </div>

          <div>
            <Label className="text-xs">Icon</Label>
            <div className="flex gap-3 mt-1">
              <label className="flex items-center gap-1 text-xs cursor-pointer">
                <input
                  type="radio"
                  name={`icon-${index}`}
                  value="auto"
                  checked={iconType === "auto"}
                  onChange={() => updateLink(index, { icon: { type: "auto" } })}
                  className="accent-primary"
                />
                Auto
              </label>
              <label className="flex items-center gap-1 text-xs cursor-pointer">
                <input
                  type="radio"
                  name={`icon-${index}`}
                  value="url"
                  checked={iconType === "url"}
                  onChange={() => updateLink(index, { icon: { type: "url" } })}
                  className="accent-primary"
                />
                URL
              </label>
              <label className="flex items-center gap-1 text-xs cursor-pointer">
                <input
                  type="radio"
                  name={`icon-${index}`}
                  value="file"
                  checked={iconType === "file"}
                  onChange={() => updateLink(index, { icon: { type: "file" } })}
                  className="accent-primary"
                />
                Upload
              </label>
            </div>

            {iconType === "url" && (
              <Input
                placeholder="https://..."
                value={link.icon?.value || ""}
                onChange={(e) =>
                  updateLink(index, { icon: { type: "url", value: e.target.value } })
                }
                className="mt-2 h-8 text-sm"
              />
            )}
            {iconType === "file" && (
              <Input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="mt-2 h-8 text-sm py-0"
              />
            )}
          </div>

          <div className="flex gap-2 pt-1">
            <Button
              variant="outline"
              size="sm"
              onClick={() => duplicateLink(index)}
              className="h-7 text-xs"
            >
              <Copy className="h-3 w-3 mr-1" />
              Duplicate
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => deleteLink(index)}
              className="h-7 text-xs text-destructive"
            >
              <Trash2 className="h-3 w-3 mr-1" />
              Delete
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function LinksEditor() {
  const { links, addLink } = useSiteState();

  return (
    <div className="space-y-2 py-2">
      {links.map((link, index) => (
        <LinkItemEditor key={index} index={index} link={link} />
      ))}
      <Button
        variant="outline"
        size="sm"
        onClick={addLink}
        className="w-full h-8 text-xs mt-1"
      >
        <Plus className="h-3 w-3 mr-1" />
        Add Link
      </Button>
    </div>
  );
}
