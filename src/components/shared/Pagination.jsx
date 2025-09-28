
import { cn } from "@/lib/utils"
import { Button } from "../ui/button";
const Pagination = () => {
    return (
              <div className="flex flex-col items-center gap-4 px-4 py-3 sm:flex-row sm:justify-between lg:justify-end">
        {/* Previous Button */}
        <Button
          variant="outline"
          className="rounded-full border-[#007AFF] text-[#007AFF] px-4 py-1 text-sm w-full sm:w-auto"
        >
          ← Previous
        </Button>
      
        {/* Page Numbers */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {[1, 2, 3, "...", 8, 9, 10].map((page, idx) => (
            <Button
              key={idx}
              variant={page === 1 ? "default" : "outline"}
              className={cn(
                "rounded-full px-3 py-2 text-sm",
                page === 1
                  ? "bg-blue-500 hover:bg-blue-600 text-white"
                  : "border-gray-300"
              )}
            >
              {page}
            </Button>
          ))}
        </div>
      
        {/* Next Button */}
        <Button
          variant="outline"
          className="rounded-full bg-[#007AFF] text-white px-4 py-1 text-sm w-full sm:w-auto"
        >
          Next →
        </Button>
      </div>
    );
};

export default Pagination;