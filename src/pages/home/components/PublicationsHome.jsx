
import db from "../../../../db.json";
import BookCard from "../../../components/common/BookCard";
import SectionHeader from "../../../components/common/SectionHeader";
import { useLangStore } from "../../../store/useLangStore";

const PublicationsHome = () => {
  const t = useLangStore((state) => state.t);

  const books = db.books.slice(0, 4);

  if (!books.length) return null;

  return (
    <section className="m-auto max-w-7xl px-5 py-10">
      <SectionHeader
        title={t.home.publications}
        to="/achievements"
        linkLabel={t.home.viewAll}
      />

      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </section>
  );
};

export default PublicationsHome;
