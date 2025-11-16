import { Link, Outlet, useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { slugify } from "../utils/utils";
import { CardContent, CardHeader, CardBody } from "../components/Card";
import { products } from "../data/product";

const ITEMS_PER_PAGE = 8;

export default function Products() {
  const { category, name } = useParams();
  const [selectValue, setSelectValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const product =
    products.find((p) => slugify(p.title) === category) ||
    products.find((p) => slugify(p.title) === slugify(category)) || // extra safety
    null;

  const isDetailPage = Boolean(name);

  const handleSelectChange = (value) => {
    setSelectValue(value);
    setCurrentPage(1);
  };

  const getPrice = (item) => {
    if (typeof item.price === "number") return item.price;
    if (!item.price) return 0;
    const numeric = String(item.price).replace(/[^\d]/g, "");
    return Number(numeric) || 0;
  };

  const sortData = (data, sortType) => {
    if (!sortType) return data;

    const sorted = [...data];

    if (sortType === "lowToHigh") {
      sorted.sort((a, b) => getPrice(a) - getPrice(b));
    } else if (sortType === "highToLow") {
      sorted.sort((a, b) => getPrice(b) - getPrice(a));
    }

    return sorted;
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  const handleSearch = () => {
    const keyword = searchValue.trim().toLowerCase();

    if (!keyword) {
      setIsSearching(false);
      setFilteredData([]);
      setCurrentPage(1);
      return;
    }

    const filteredResults =
      product.collection?.filter((item) =>
        item.name.toLowerCase().includes(keyword),
      ) || [];

    setFilteredData(filteredResults);
    setIsSearching(true);
    setCurrentPage(1);
  };

  const baseList = isSearching ? filteredData : product.collection || [];
  const displayList = sortData(baseList, selectValue);

  // pagination
  const totalPages = Math.max(
    1,
    Math.ceil(displayList.length / ITEMS_PER_PAGE),
  );

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const getPaginationNumbers = () => {
    const pages = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
      return pages;
    }

    const left = Math.max(2, currentPage - 1);
    const right = Math.min(totalPages - 1, currentPage + 1);

    pages.push(1);

    if (left > 2) {
      pages.push("dots-left");
    }

    for (let i = left; i <= right; i++) {
      pages.push(i);
    }

    if (right < totalPages - 1) {
      pages.push("dots-right");
    }

    pages.push(totalPages);

    return pages;
  };

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = displayList.slice(startIdx, startIdx + ITEMS_PER_PAGE);

  if (Array.isArray(product.collection) && product.collection.length === 0) {
    return <h5>Product not found for category: {category}</h5>;
  }

  return (
    <div>
      {!isDetailPage && Array.isArray(product.collection) && product.collection.length > 0 && (
        <div className="p-4 md:my-10">
          <div className="flex">
            <div className="flex flex-row">
              <Link to="/">
                <p className="">Home</p>
              </Link>
              <p className="font-medium">/ {product.title}</p>
            </div>
          </div>
          <div className="my-10">
            <h4 className="text-2xl md:text-3xl">{product.title}</h4>
            <div className="flex flex-col">
              <div className="flex flex-col sm:flex-row justify-between my-10 gap-4">
                <select
                  className="w-full sm:w-max px-4 py-4 border-2 border-gray-200 rounded focus:ring-4 focus:ring-brand-primary-dark/20 focus:border-brand-primary-dark transition-all duration-200 bg-white/50 backdrop-blur-sm hover:border-brand-primary-dark outline-none"
                  value={selectValue}
                  onChange={(e) => handleSelectChange(e.target.value)}
                >
                  <option hidden>Filter by</option>
                  <option value="lowToHigh">Price, lowest to highest</option>
                  <option value="highToLow">Price, highest to lowest</option>
                </select>
                <div className="w-full sm:w-max flex items-center justify-between px-4 py-2 border-2 border-gray-200 rounded focus:ring-4 focus:ring-brand-primary-dark/20 focus:border-brand-primary-dark transition-all duration-200 bg-white/50 backdrop-blur-sm hover:border-brand-primary-dark">
                  <input
                    type="text"
                    placeholder="...Search Products"
                    className="outline-none placeholder-black"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                  />
                  <button
                    className="py-2 px-6 bg-brand-primary-dark text-white rounded"
                    onClick={handleSearch}
                  >
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {currentItems?.map((item, id) => (
                  <CardContent key={id} className="bg-white">
                    <Link to={slugify(item.name)}>
                      <CardHeader className="!mx-0 w-auto h-40 sm:h-48 desktop-mid:h-56 xl:h-80">
                        <img
                          className="object-cover w-full h-full"
                          src={`/${item.image.replace(/^\/?/, "")}`}
                          alt={item.alt}
                        />
                      </CardHeader>
                      <CardBody>
                        <p>{item.name}</p>
                        <p>Rp {item.price.toLocaleString("id-ID") || `-`}</p>
                      </CardBody>
                    </Link>
                  </CardContent>
                ))}
              </div>

              {/* Pagination */}
              {displayList.length > 0 && (
                <div className="flex items-center justify-center gap-2 mt-12">
                  {/* prev */}
                  <button
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-3 py-2 rounded border text-sm ${
                      currentPage === 1
                        ? "opacity-40 cursor-not-allowed"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    Prev
                  </button>

                  {/* page numbers + dots */}
                  {getPaginationNumbers().map((item, idx) => {
                    if (item === "dots-left" || item === "dots-right") {
                      return (
                        <span key={idx} className="px-2 text-gray-500">
                          …
                        </span>
                      );
                    }

                    return (
                      <button
                        key={idx}
                        onClick={() => goToPage(item)}
                        className={`px-3 py-2 rounded border text-sm ${
                          item === currentPage
                            ? "bg-brand-primary-dark text-white border-brand-primary-dark"
                            : "hover:bg-gray-100"
                        }`}
                      >
                        {item}
                      </button>
                    );
                  })}

                  {/* next */}
                  <button
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-3 py-2 rounded border text-sm ${
                      currentPage === totalPages
                        ? "opacity-40 cursor-not-allowed"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    Next
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Nested route placeholder */}
      <Outlet />
    </div>
  );
}
