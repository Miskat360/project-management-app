import { Link } from "@inertiajs/react";
import React from "react";

const Pagination = ({ links }) => {
  return (
    <nav className="text-center mt-4">
      {links.map((link) => (
        <Link
          preserveScroll
          href={link.url || ""}
          className={`inline-block px-3 py-2 rounded-lg text-xs text-gray-200 ${
            link.active && "bg-gray-950 text-white"
          } ${
            !link.url
              ? "!text-gray-500 cursor-not-allowed"
              : "hover:bg-gray-950"
          }`}
          //dangerouslySetInnerHTML={{ __html: link.label }}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

export default Pagination;
