const Link = ({ title, href, children }) => {
  return (
    <div className="flex-col items-center group relative">
      <a
        href={href}
        className="text-lg sm:text-xl group-hover:text-accent  group-hover:opacity-70 focus:text-accent focus:opacity-70 transition group"
      >
        {title || children}
        <div className="h-2 bg-accent scale-x-0 group-hover:scale-x-100 group-focus:scale-x-100 transition absolute -bottom-3 left-0 right-0"></div>
      </a>
    </div>
  );
};

export default Link;
