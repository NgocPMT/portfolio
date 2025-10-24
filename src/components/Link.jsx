const Link = ({ title, href, children }) => {
  return (
    <div className="flex-col items-center group relative">
      <a
        href={href}
        className="text-xl group-hover:text-accent  group-hover:opacity-70 transition"
      >
        {title || children}
      </a>
      <div className="h-2 bg-accent scale-x-0 group-hover:scale-x-100 transition absolute -bottom-3 left-0 right-0"></div>
    </div>
  );
};

export default Link;
