import Link from "next/link";

export const Button = ({
  children,
  onClick,
  type = "default",
  color = "default",
  border = true,
  bold = true,
  link, // Dodany prop 'link'
  className,
}) => {
  const buttonColor = {
    default:
      "text-secondText bg-primary border border-solid border-primary fill-current transition-all hover:bg-secondary hover:border-secondary",
    second:
      "text-mainText bg-secondary border border-solid border-secondary fill-current transition-all hover:bg-primary hover:text-secondText",
    black:
      "text-mainText bg-black border border-solid border-black fill-current transition-all hover:bg-primary hover:text-secondText hover:border-primary",
  };

  const buttonTypes = {
    default:
      "py-3 w-fit px-4 inline-flex items-center justify-center text-base font-bold gap-2.5 rounded",
  };

  const classes = `${buttonTypes[type]} ${buttonColor[color]} ${
    border ? "" : "border-none"
  } ${bold ? "font-bold" : "font-normal"} ${className}`;

  // Sprawdzamy, czy link jest zewnętrzny
  const isExternalLink = link && /^https?:\/\//.test(link);

  if (link) {
    // Jeśli link jest zewnętrzny
    if (isExternalLink) {
      return (
        <Link
          href={link}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </Link>
      );
    } else {
      // Jeśli link jest wewnętrzny (Next.js)
      return (
        <Link href={link} className={classes}>
          {children}
        </Link>
      );
    }
  }

  // Jeśli nie ma linku, renderujemy standardowy przycisk
  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
};
