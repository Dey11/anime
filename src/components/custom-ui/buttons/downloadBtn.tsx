import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const DownloadButton = async ({
  url,
  isAuthenticated,
}: {
  url: string;
  isAuthenticated: boolean;
}) => {
  return (
    <div>
      {isAuthenticated && (
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
    </div>
  );
};

export default DownloadButton;
