const Stat = ({ icon, number, title }) => {
  return (
    <div className=" flex flex-col items-center justify-center gap-2 md:border-e-1 md:last:border-e-0  border-1 rounded-sm p-2 md:border-0 md:rounded-none  ">
      <div className="text-accent">{icon}</div>

      <p className="text-4xl font-bold text-accent">{number}+</p>

      <p className="text-sm text-muted text-center">{title}</p>
    </div>
  );
};

export default Stat;
