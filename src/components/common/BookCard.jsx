import { useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
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
      <div className="w-full max-w-[300px] mx-auto flex flex-col leading-tight border p-2 rounded-lg hover:-translate-y-1 transition-transform duration-200">
        <img
          src={`${import.meta.env.BASE_URL}${book.image}`}
          alt={book.title[lang]}
          className="w-full h-[250px]"
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
          onClick={() => setIsOpen(true)}
          className="btn-secondary rounded-full"
        >
          {t.books.readAbstract}
        </button>
      </div>

      {isOpen &&
        createPortal(
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-[50] flex items-center justify-center bg-black/50 px-4 py-6"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative flex w-full max-w-6xl max-h-[90vh] flex-col overflow-hidden rounded-xl bg-white shadow-xl sm:flex-row"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3 end-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 shadow hover:bg-gray-100 transition"
                aria-label="Close"
              >
                <X size={20} />
              </button>

              {/* Book Image */}
              <div className="w-full shrink-0 sm:w-[35%]">
                <img
                  src={`${import.meta.env.BASE_URL}${book.image}`}
                  alt={book.title[lang]}
                  className="h-[220px] w-full object-cover sm:h-full"
                />
              </div>

              {/* Content */}
              <div className="flex min-h-0 flex-1 flex-col overflow-y-auto p-5 sm:p-7">
                <div className="pe-8">
                  <h2 className="text-xl font-bold sm:text-2xl">
                    {book.title[lang]}
                  </h2>

                  <p className="mt-1 text-sm text-muted">
                    {book.subtitle[lang]}
                  </p>

                  <p className="mt-2 text-xs text-muted">{book.year[lang]}</p>
                </div>

                {/* Abstract */}
                <div className="mt-6">
                  <h3 className="mb-3 text-base font-bold sm:text-lg">
                    {t.books.readAbstract}
                  </h3>

                  <p className="text-sm leading-7 text-text sm:text-base sm:leading-8">
                    {book.abstract[lang]}
                  </p>
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  className="btn-primary mt-6 w-full rounded-full sm:w-fit"
                >
                  {t.books.downloadPdf}
                </button>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </article>
  );
};

export default BookCard;
