import reportBug from "@/actions/reportBugs";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const ReportDialog = () => {
  const { toast } = useToast();

  const handleFormSubmit = async (formData: FormData) => {
    const username = formData.get("username") as string;
    const description = formData.get("description") as string;
    const url = formData.get("url") as string;

    if (!username || !description) {
      toast({
        title: "Empty fields",
        description: "Please fill out all the fields before submitting",
        variant: "destructive",
      });
    }

    try {
      const submitFeedback = await reportBug({ username, description, url });
      if (submitFeedback) {
        toast({
          title: "Feedback recorded",
          description: "Thanks for the feedback!",
        });
        return;
      } else {
        toast({
          variant: "destructive",
          title: "Server Error",
          description: "Some error occured. Please try again later.",
        });
      }
    } catch (err) {
      console.log(err);
      toast({
        variant: "destructive",
        title: "Server Error",
        description: "Some error occured. Please try again later.",
      });
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"destructive"}>Feedback (bug/feature)</Button>
      </DialogTrigger>
      <DialogContent>
        <form action={handleFormSubmit}>
          <DialogHeader>
            <DialogTitle>Feedback</DialogTitle>
            <DialogDescription>
              <h1 className="text-xs">
                Report a bug or suggest a feature you'd love the website to
                have. We're all ears!
              </h1>
            </DialogDescription>
          </DialogHeader>
          <div className="mt-3">
            <div>
              <Label>
                <span>Your Username/Email</span>
                <Input className="mt-2" name="username" />
              </Label>
              <p className="mt-2 text-xs text-slate-500">
                This is so that we can ask you further questions if need be.
              </p>
            </div>

            <div className="mt-5">
              <Label>
                <span>Description</span>
                <Textarea
                  className="mt-2"
                  placeholder="Please enter a proper description of the bug or feature"
                  name="description"
                />
              </Label>
              <span className="text-xs text-slate-500">
                Please ensure you write the steps to reproduce the issue if it
                is a bug.
              </span>
            </div>
          </div>

          <div className="mt-5">
            <Label>
              <span>URL</span>
              <Input
                className="mt-2"
                placeholder="Please enter the URL of your current page"
                name="url"
              />
            </Label>
            <span className="text-xs text-slate-500">
              URL of the error or error codes faced.
            </span>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button size={"sm"} type="submit">
                Submit
              </Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ReportDialog;
