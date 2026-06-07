import { useSiteState } from "@/context/site-state";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function ProfileEditor() {
  const {
    profile,
    setProfileName,
    setProfileBio,
    setAvatarMode,
    setAvatarUrl,
    setAvatarData,
  } = useSiteState();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const result = ev.target?.result;
      if (typeof result === "string") {
        setAvatarData(result);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="space-y-4 py-2">
      <div>
        <Label htmlFor="profile-name" className="text-sm">
          Name
        </Label>
        <Input
          id="profile-name"
          value={profile.name}
          onChange={(e) => setProfileName(e.target.value)}
          className="mt-1"
          data-testid="input-profile-name"
        />
      </div>

      <div>
        <Label htmlFor="profile-bio" className="text-sm">
          Bio
        </Label>
        <Textarea
          id="profile-bio"
          value={profile.bio}
          onChange={(e) => setProfileBio(e.target.value)}
          className="mt-1 min-h-[80px]"
          data-testid="input-profile-bio"
        />
      </div>

      <div>
        <Label className="text-sm">Avatar</Label>
        <div className="flex gap-3 mt-2">
          <label className="flex items-center gap-1.5 text-sm cursor-pointer">
            <input
              type="radio"
              name="avatar-mode"
              value="none"
              checked={profile.avatar.mode === "none"}
              onChange={() => setAvatarMode("none")}
              className="accent-primary"
            />
            None
          </label>
          <label className="flex items-center gap-1.5 text-sm cursor-pointer">
            <input
              type="radio"
              name="avatar-mode"
              value="url"
              checked={profile.avatar.mode === "url"}
              onChange={() => setAvatarMode("url")}
              className="accent-primary"
            />
            URL
          </label>
          <label className="flex items-center gap-1.5 text-sm cursor-pointer">
            <input
              type="radio"
              name="avatar-mode"
              value="upload"
              checked={profile.avatar.mode === "upload"}
              onChange={() => setAvatarMode("upload")}
              className="accent-primary"
            />
            Upload
          </label>
        </div>

        {profile.avatar.mode === "url" && (
          <div className="mt-2">
            <Input
              placeholder="https://..."
              value={profile.avatar.url || ""}
              onChange={(e) => setAvatarUrl(e.target.value)}
              data-testid="input-avatar-url"
            />
          </div>
        )}

        {profile.avatar.mode === "upload" && (
          <div className="mt-2">
            <Input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              data-testid="input-avatar-file"
            />
            {profile.avatar.data && (
              <img
                src={profile.avatar.data}
                alt="Preview"
                className="mt-2 w-12 h-12 rounded-full object-cover border border-border"
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
