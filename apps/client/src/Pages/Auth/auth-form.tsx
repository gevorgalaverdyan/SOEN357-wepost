"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Label } from "@/Components/ui/label";
import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";
import { Icons } from "@/Components/ui/icons";
import useAuth from "./auth.hooks";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {
  isLogin: boolean;
}

export function UserAuthForm({
  className,
  isLogin,
  ...props
}: UserAuthFormProps) {
  const { onCreateSubmit, onChange, onLoginSubmit, isLoading } =
    useAuth();

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={isLogin ? onLoginSubmit : onCreateSubmit}>
        <div className="grid gap-2">
          {!isLogin && (
            <div className="grid gap-1">
              <Label className="sr-only" htmlFor="name">
                Name
              </Label>
              <Input
                id="name"
                name="name"
                placeholder="Jogn Doe"
                type="text"
                autoCorrect="off"
                disabled={isLoading}
                onChange={onChange}
              />
            </div>
          )}
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              onChange={onChange}
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="password">
              Password
            </Label>
            <Input
              id="password"
              name="password"
              placeholder="***********"
              type="password"
              autoCorrect="off"
              disabled={isLoading}
              onChange={onChange}
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            {isLogin ? "Login" : "Sign Up"}
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button variant="outline" type="button" disabled={isLoading}>
        {isLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.google className="mr-2 h-4 w-4" />
        )}{" "}
        Google
      </Button>
    </div>
  );
}
