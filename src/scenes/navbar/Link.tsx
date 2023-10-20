import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
  selectedPage: string;
  setSelectedPage: (value: string) => void;
};

function Link({ page, selectedPage, setSelectedPage }: Props) {
  const lowerCasePAge = page.toLowerCase().replace(/ /g, "");
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePAge ? "text-primary-500" : ""
      } transition duration-500 hover:text-primary-300`}
      href={`#${lowerCasePAge}`}
      onClick={() => setSelectedPage(lowerCasePAge)}
    >
      {page}
    </AnchorLink>
  );
}

export default Link;
