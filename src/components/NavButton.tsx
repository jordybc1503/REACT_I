export default function NavBar({ title, link }) {
  return (
    <>
      <li className="list-none">
        <a className="text-white font-bold text-center w-[150px] px-1 py-0 text-sm inline-block hover:underline" href={link}>
          {title}
        </a>
      </li>
    </>
  );
}
