import { Label } from "@/Components/ui/label";
import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";
import { useSelector } from "react-redux";

export function UserProfile() {
  const { user } = useSelector((state: any) => state.auth);
  return (
    <div className="mt-16 mb-16">
      <div className="px-4 space-y-6 md:px-6">
        <header className="space-y-1.5">
          <div className="flex items-center space-x-4">
            <img
              alt="Avatar"
              className="border rounded-full"
              height="96"
              src="/04.png"
              style={{
                aspectRatio: "96/96",
                objectFit: "cover",
              }}
              width="96"
            />
            <div className="space-y-1.5">
              <h1 className="text-2xl font-bold">Your Profile</h1>
              <p className="text-gray-500 dark:text-gray-400">
                {user.user.name}
              </p>
            </div>
          </div>
        </header>
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-lg font-semibold flex mb-5">
              Personal Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name" className="flex mb-2">
                  Name
                </Label>
                <Input
                  defaultValue={user.user.name}
                  id="name"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <Label htmlFor="email" className="flex mb-2">
                  Email
                </Label>
                <Input id="email" placeholder={user.user.email} type="email" />
              </div>
              <div>
                <Label htmlFor="phone" className="flex mb-2">
                  Phone
                </Label>
                <Input id="phone" placeholder="Enter your phone" type="tel" />
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-lg font-semibold flex mb-5">Change Password</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="current-password" className="flex mb-2">
                  Current Password
                </Label>
                <Input
                  id="current-password"
                  placeholder="Enter your current password"
                  type="password"
                />
              </div>
              <div>
                <Label htmlFor="new-password" className="flex mb-2">
                  New Password
                </Label>
                <Input
                  id="new-password"
                  placeholder="Enter your new password"
                  type="password"
                />
              </div>
              <div>
                <Label htmlFor="confirm-password" className="flex mb-2">
                  Confirm Password
                </Label>
                <Input
                  id="confirm-password"
                  placeholder="Confirm your new password"
                  type="password"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 flex">
          <Button size="lg">Save</Button>
        </div>
      </div>
    </div>
  );
}
