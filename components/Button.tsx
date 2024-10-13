import clsx from "clsx";
import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
};

export default function Button({ href, children, className, target }: Props) {
  return (
    <Link
      href={href}
      className={clsx(
        "rounded-xl bg-orange-600 px-5 py-4 text-center text-xl font-bold uppercase tracking-wide text-white transition-colors duration-150 hover:bg-orange-700 md:text-2xl",
        className,
      )}
      target={target}
    >
      {children}
    </Link>
  );
}
