
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import ProductCard from "@/components/ProductCard";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { products, types, scents, sizes } from "@/data/products";
import { Filter, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const isMobile = useIsMobile();
  const categoryParam = searchParams.get("category");

  // Filter states
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    categoryParam
  );
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedScents, setSelectedScents] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 50]);
  const [sortOption, setSortOption] = useState("featured");
  const [searchQuery, setSearchQuery] = useState("");

  // Update filters based on URL params when component mounts
  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  // Apply filters
  useEffect(() => {
    let result = [...products];

    // Filter by category
    if (selectedCategory) {
      result = result.filter(
        (product) => product.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Filter by type
    if (selectedTypes.length > 0) {
      result = result.filter((product) =>
        selectedTypes.includes(product.type)
      );
    }

    // Filter by scent
    if (selectedScents.length > 0) {
      result = result.filter(
        (product) => product.scent && selectedScents.includes(product.scent)
      );
    }

    // Filter by size
    if (selectedSizes.length > 0) {
      result = result.filter(
        (product) => product.size && selectedSizes.includes(product.size)
      );
    }

    // Filter by price range
    result = result.filter(
      (product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) ||
          (product.scent && product.scent.toLowerCase().includes(query)) ||
          product.type.toLowerCase().includes(query)
      );
    }

    // Apply sorting
    switch (sortOption) {
      case "price-low-high":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high-low":
        result.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        result.sort((a, b) => (b.new ? 1 : 0) - (a.new ? 1 : 0));
        break;
      case "best-selling":
        result.sort((a, b) => (b.bestSeller ? 1 : 0) - (a.bestSeller ? 1 : 0));
        break;
      case "top-rated":
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // Featured sorting (default)
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    setFilteredProducts(result);
  }, [
    selectedCategory,
    selectedTypes,
    selectedScents,
    selectedSizes,
    priceRange,
    sortOption,
    searchQuery,
  ]);

  // Toggle filter function
  const toggleFilter = (value: string, currentFilters: string[], setFilter: React.Dispatch<React.SetStateAction<string[]>>) => {
    setFilter(
      currentFilters.includes(value)
        ? currentFilters.filter((item) => item !== value)
        : [...currentFilters, value]
    );
  };

  // Clear all filters
  const clearFilters = () => {
    setSelectedCategory(null);
    setSelectedTypes([]);
    setSelectedScents([]);
    setSelectedSizes([]);
    setPriceRange([0, 50]);
    setSearchQuery("");
    setSearchParams({});
  };

  // Filter components that will be shown in both mobile sheet and desktop sidebar
  const FilterComponents = () => (
    <div className="space-y-6">
      {/* Search */}
      <div>
        <h3 className="font-medium mb-3">Search</h3>
        <Input
          type="text"
          placeholder="Search candles..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full"
        />
      </div>

      {/* Category Filter */}
      <div>
        <h3 className="font-medium mb-3">Category</h3>
        <div className="space-y-2">
          {["scented", "decorative", "seasonal", "gift-sets"].map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox
                id={`category-${category}`}
                checked={selectedCategory === category}
                onCheckedChange={() => {
                  setSelectedCategory(
                    selectedCategory === category ? null : category
                  );
                  if (selectedCategory !== category) {
                    setSearchParams({ category });
                  } else {
                    setSearchParams({});
                  }
                }}
              />
              <Label
                htmlFor={`category-${category}`}
                className="text-sm capitalize"
              >
                {category.replace("-", " ")}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Type Filter */}
      <div>
        <h3 className="font-medium mb-3">Type</h3>
        <div className="space-y-2">
          {types.map((type) => (
            <div key={type} className="flex items-center space-x-2">
              <Checkbox
                id={`type-${type}`}
                checked={selectedTypes.includes(type)}
                onCheckedChange={() => 
                  toggleFilter(type, selectedTypes, setSelectedTypes)
                }
              />
              <Label
                htmlFor={`type-${type}`}
                className="text-sm capitalize"
              >
                {type.replace("-", " ")}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Scent Filter */}
      <div>
        <h3 className="font-medium mb-3">Scent</h3>
        <div className="space-y-2">
          {scents.map((scent) => (
            <div key={scent} className="flex items-center space-x-2">
              <Checkbox
                id={`scent-${scent}`}
                checked={selectedScents.includes(scent)}
                onCheckedChange={() =>
                  toggleFilter(scent, selectedScents, setSelectedScents)
                }
              />
              <Label htmlFor={`scent-${scent}`} className="text-sm">
                {scent}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Size Filter */}
      <div>
        <h3 className="font-medium mb-3">Size</h3>
        <div className="space-y-2">
          {sizes.map((size) => (
            <div key={size} className="flex items-center space-x-2">
              <Checkbox
                id={`size-${size}`}
                checked={selectedSizes.includes(size)}
                onCheckedChange={() =>
                  toggleFilter(size, selectedSizes, setSelectedSizes)
                }
              />
              <Label htmlFor={`size-${size}`} className="text-sm">
                {size}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <div className="flex justify-between mb-3">
          <h3 className="font-medium">Price</h3>
          <span className="text-sm">
            ${priceRange[0]} - ${priceRange[1]}
          </span>
        </div>
        <Slider
          value={priceRange}
          min={0}
          max={50}
          step={1}
          onValueChange={(value) => setPriceRange(value as [number, number])}
          className="py-4"
        />
      </div>

      {/* Clear Filters Button */}
      <Button
        variant="outline"
        className="w-full"
        onClick={clearFilters}
      >
        <X className="h-4 w-4 mr-2" /> Clear Filters
      </Button>
    </div>
  );

  return (
    <>
      <Header />

      <main className="py-8">
        <div className="container">
          <div className="mb-8">
            <h1 className="text-3xl font-display font-medium mb-2">
              {selectedCategory
                ? `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Candles`
                : "All Candles"}
            </h1>
            <p className="text-muted-foreground">
              {filteredProducts.length} products
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters - Desktop */}
            {!isMobile && (
              <div className="w-full md:w-64 shrink-0 space-y-8">
                <FilterComponents />
              </div>
            )}

            {/* Filters - Mobile */}
            {isMobile && (
              <div className="flex justify-between items-center mb-4">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline">
                      <Filter className="h-4 w-4 mr-2" />
                      Filters
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-[300px] sm:w-[400px] overflow-y-auto">
                    <h2 className="text-lg font-medium mb-6">Filters</h2>
                    <FilterComponents />
                  </SheetContent>
                </Sheet>

                {/* Sort Dropdown - Mobile */}
                <div className="flex-1 ml-4">
                  <Select value={sortOption} onValueChange={setSortOption}>
                    <SelectTrigger>
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="featured">Featured</SelectItem>
                      <SelectItem value="price-low-high">Price: Low to High</SelectItem>
                      <SelectItem value="price-high-low">Price: High to Low</SelectItem>
                      <SelectItem value="newest">Newest</SelectItem>
                      <SelectItem value="best-selling">Best Selling</SelectItem>
                      <SelectItem value="top-rated">Top Rated</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {/* Products Grid and Sort - Desktop */}
            <div className="flex-1">
              {/* Sort Dropdown - Desktop */}
              {!isMobile && (
                <div className="flex justify-end mb-6">
                  <div className="w-48">
                    <Select value={sortOption} onValueChange={setSortOption}>
                      <SelectTrigger>
                        <SelectValue placeholder="Sort by" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="featured">Featured</SelectItem>
                        <SelectItem value="price-low-high">Price: Low to High</SelectItem>
                        <SelectItem value="price-high-low">Price: High to Low</SelectItem>
                        <SelectItem value="newest">Newest</SelectItem>
                        <SelectItem value="best-selling">Best Selling</SelectItem>
                        <SelectItem value="top-rated">Top Rated</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}

              {/* Products Grid */}
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-lg font-medium mb-2">No products found</h3>
                  <p className="text-muted-foreground mb-6">
                    Try adjusting your filters or search query
                  </p>
                  <Button onClick={clearFilters}>Clear Filters</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Newsletter />
      <Footer />
    </>
  );
};

export default Shop;
