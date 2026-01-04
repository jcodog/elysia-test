"use client";

import { IconX } from "@tabler/icons-react";
import { client } from "@workspace/backend/lib/eden";
import { Button } from "@workspace/ui/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@workspace/ui/components/ui/dialog";
import { useState } from "react";
import { toast } from "sonner";

const getUser = async () => {
  const result = await client.users.find.get({ query: { name: "robert" } });
  if (!result.data || !result.data?.user) {
    toast.error(`No user found with name robert`);
    return;
  }

  return result.data?.user?.name;
};

export default function Page() {
  const [name, setName] = useState<string | undefined>();
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello World</h1>
        <Dialog
          modal={false}
          onOpenChange={() => {
            setName(undefined);
          }}
        >
          <DialogTrigger asChild>
            <Button size="sm">Button</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Test Dialog</DialogTitle>
              <DialogDescription>This is a test dialog</DialogDescription>
            </DialogHeader>
            <div className="flex items-center justify-center flex-col flex-1 gap-2">
              <p>This is the test content of the dialog</p>
              <p className="text-muted-foreground">User name: {name}</p>
              {name ? null : (
                <Button
                  onClick={async () => {
                    const userName = await getUser();
                    setName(userName);
                  }}
                >
                  Get user
                </Button>
              )}
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="destructive">
                  <IconX className="size-4" />
                  Close
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
