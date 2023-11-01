import Nav from "@/app/components/Nav/Nav";
import NavLink from "@/app/components/Nav/NavLink";

function NavMenuOverlay({ links }) {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
}

export default NavMenuOverlay;
