import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const DownloadButton = async ({ url }: { url: string }) => {
  const session = await auth();
  const user = session?.user?.email;

  return (
    <div>
      {user && (
        <div className="flex items-center gap-5">
          <h3>Download this episode: </h3>
          <a href={url}>
            <Button variant={"secondary"}>
              <Download size={20} className="mr-2" />
              <span>Download</span>
            </Button>
          </a>
        </div>
      )}
      {!user && <h3>Sign in to download this episode</h3>}
    </div>
  );
};

export default DownloadButton;
