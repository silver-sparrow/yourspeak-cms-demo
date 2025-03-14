// components/ui/SearchBar.tsx
import React from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SearchBar = ({
  value,
  onChange,
  placeholder = "Search...",
  className = "",
}: SEARCH_BAR_PROPS) => {
  return (
    <div className={`relative flex items-center ${className}`}>
      <div className="absolute left-3 flex items-center justify-center text-gray-400 pointer-events-none">
        <Search size={18} />
      </div>
      <Input
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-10 pr-10 py-2 h-10 bg-white border border-gray-200 rounded-lg shadow-sm transition-all duration-200 focus-visible:ring-0 focus-visible:ring-offset-0"
      />
      {value && (
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={() => onChange("")}
          className="absolute right-2 h-6 w-6 p-0 hover:bg-gray-100 rounded-full"
        >
          <X size={14} className="text-gray-500" />
        </Button>
      )}
    </div>
  );
};

export default SearchBar;
