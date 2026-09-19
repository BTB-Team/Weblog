import { useState } from "react";
import { useLangStore } from "../../store/useLangStore";

const BookCard = ({ book }) => {
  const [isOpen, setIsOpen] = useState(false);

  const t = useLangStore((state) => state.t);
  const lang = useLangStore((state) => state.lang);

  const handleDownload = () => {
    window.open(book.pdf, "_blank");
  };

  return (
    <article className="w-full px-5 mt-6">
      <div className="w-full max-w-[300px]  mx-auto flex flex-col leading-tight border p-2 rounded-lg hover:-translate-y-1 transition-transform duration-200">
        <img
          src={`${import.meta.env.BASE_URL}${book.image}`}
          alt={book.title[lang]}
          className="w-full"
        />

        <h2 className="text-base font-bold">{book.title[lang]}</h2>

        <p className="text-muted text-sm ps-1">{book.subtitle[lang]}</p>

        <p className="text-xs ps-1">{book.year[lang]}</p>

        <button
          onClick={handleDownload}
          className="btn-primary mb-2 rounded-full"
        >
          {t.books.downloadPdf}
        </button>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="btn-secondary rounded-full"
        >
          {t.books.readAbstract}
        </button>
      </div>

      {isOpen && (
        <div className="absolute bg-red-300 h-[200px] w-[300px]">
          {book.abstract[lang]}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="btn-secondary rounded-full"
          >
            {t.books.readAbstract}
          </button>
        </div>
      )}
    </article>
  );
};

export default BookCard;
