import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BookCard from "../../../components/common/BookCard";
import db from "../../../../db.json";

const BooksPublish = () => {
  // const [books, setBooks] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleBooks, setVisibleBooks] = useState(4);

  const books = db.books;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleBooks(1);
      } else if (window.innerWidth < 1024) {
        setVisibleBooks(2);
      } else {
        setVisibleBooks(4);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextBook = () => {
    if (currentIndex < books.length - visibleBooks) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const previousBook = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="relative w-full mb-10 ">
      {/* Slider viewport */}
      <div className="w-full overflow-hidden">
        {/* Slider track */}
        <div
          dir="ltr"
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleBooks)}%)`,
          }}
        >
          {books.map((book) => (
            <div
              key={book.id}
              className="shrink-0"
              style={{
                width: `${100 / visibleBooks}%`,
              }}
            >
              <BookCard book={book} />
            </div>
          ))}
        </div>
      </div>

      {/* Previous */}
      <button
        type="button"
        onClick={previousBook}
        disabled={currentIndex === 0}
        className="absolute start-0 top-1/2 -translate-y-1/2 btn-outline disabled:opacity-40"
      >
        <ChevronLeft size={20} />
      </button>

      {/* Next */}
      <button
        type="button"
        onClick={nextBook}
        disabled={currentIndex >= books.length - visibleBooks}
        className="absolute end-0 top-1/2 -translate-y-1/2 btn-outline disabled:opacity-40"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default BooksPublish;
