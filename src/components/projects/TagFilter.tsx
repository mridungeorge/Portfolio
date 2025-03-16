
import { cn } from "@/lib/utils";

interface TagFilterProps {
  uniqueTags: string[];
  filter: string;
  setFilter: (tag: string) => void;
  setCurrentSlide: (index: number) => void;
}

const TagFilter = ({ uniqueTags, filter, setFilter, setCurrentSlide }: TagFilterProps) => {
  return (
    <div className="mb-8 flex flex-wrap justify-center gap-2">
      {uniqueTags.map(tag => (
        <button
          key={tag}
          onClick={() => {
            setFilter(tag);
            setCurrentSlide(0);
          }}
          className={cn(
            "px-4 py-1 rounded-full text-sm transition-all duration-300 transform",
            filter === tag
              ? "bg-cyber/30 text-cyber border border-cyber/50 scale-110"
              : "bg-dark-lighter text-light-darker border border-dark-light hover:bg-dark-light hover:scale-105"
          )}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default TagFilter;
