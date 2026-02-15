import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function ProcessesInputCard() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-lg">Add A New Process</CardTitle>
        <CardDescription className="text-xs">
          Fill In the inputs with the process's arival time and burst time the
          click on the add process button.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label className="mb-2" htmlFor="arival">
                Arival time
              </Label>
              <Input
                className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                id="arival"
                type="number"
                placeholder="0"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center ">
                <Label className="mb-2 " htmlFor="burst">
                  Burst time
                </Label>
              </div>
              <Input
                className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                id="burst"
                type="number"
                placeholder="0"
                required
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button
          type="submit"
          className="w-full text-base uppercase font-medium py-6"
        >
          Add Process
        </Button>
      </CardFooter>
    </Card>
  );
}
