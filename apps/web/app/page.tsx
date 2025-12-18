"use client";

import { IconX } from "@tabler/icons-react";
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

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello World</h1>
        <Dialog modal={false}>
          <DialogTrigger asChild>
            <Button size="sm">Button</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Test Dialog</DialogTitle>
              <DialogDescription>This is a test dialog</DialogDescription>
            </DialogHeader>
            <div className="flex items-center justify-center">
              <p>This is the test content of the dialog</p>
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
