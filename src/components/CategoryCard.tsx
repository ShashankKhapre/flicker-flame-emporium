
import { Link } from "react-router-dom";
import { Category } from "@/types";

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Link to={`/shop?category=${category.name.toLowerCase()}`}>
      <div className="relative group product-hover-effect rounded-lg overflow-hidden border h-60">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
          <h3 className="text-white text-xl font-display font-medium">
            {category.name}
          </h3>
          <p className="text-white/80 text-sm mt-1">{category.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
