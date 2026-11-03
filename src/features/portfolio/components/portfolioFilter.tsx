import type { PortfolioCategory } from "../types";

interface CategoryFilterProps {
  selectedCategory: PortfolioCategory;
  onCategoryChange: (category: PortfolioCategory) => void;
}

const categories = [
  { label: "الكل", value: "all" },
  { label: "التصميم الإبداعي", value: "creative" },
  { label: "المطبوعات", value: "print" },
  { label: "الإعلانات", value: "ads" },
] as const;

const PortfolioFilter = ({
  selectedCategory,
  onCategoryChange,
}: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap justify-start items-center  gap-3">
      {categories.map((category) => (
        <button
          key={category.value}
          onClick={() => onCategoryChange(category.value)}
          className={`rounded-full px-6 py-3 transition-colors ${selectedCategory === category.value
            ? "brand-gradient text-white"
            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
};

export default PortfolioFilter;