import { HeadingStyles } from "./Heading.syle";

const HeadingComponent = ({ level, fontSize, children }) => {
  const Element = `h${level}`;

  return (
    <HeadingStyles fontSize={fontSize}>
      <Element>{children}</Element>
    </HeadingStyles>
  );
};

export default HeadingComponent;
