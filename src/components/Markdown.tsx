import ReactMarkDown, { Components } from "react-markdown";
import rehypeRaw from "rehype-raw";

interface MarkdownProps {
  content: string;
}

const Markdown = ({ content }: MarkdownProps) => {
  const components: Components = {
    h1: ({ children }) => <h1 className="text-2xl font-bold">{children}</h1>,
    h2: ({ children }) => <h2 className="text-xl font-semibold">{children}</h2>,
    h3: ({ children }) => <h3 className="text-lg font-medium">{children}</h3>,
    p: ({ children }) => <p className="text-base">{children}</p>,
  };

  return (
    <ReactMarkDown rehypePlugins={[rehypeRaw]} components={components}>
      {content}
    </ReactMarkDown>
  );
};

export default Markdown;
