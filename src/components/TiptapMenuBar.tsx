import { Editor } from "@tiptap/react";
import {
  Bold,
  Heading1,
  Heading2,
  Heading3,
  Italic,
  Strikethrough,
} from "lucide-react";
import { FC } from "react";
import { Toggle } from "./ui/toggle";

interface TiptapMenuBarProps {
  editor: Editor | null;
}

const TiptapMenuBar: FC<TiptapMenuBarProps> = ({ editor }) => {
  if (!editor) return null;

  const options = [
    {
      icon: <Heading1 className="size-4" />,
      onClick: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
      preesed: editor.isActive("heading", { level: 1 }),
    },
    {
      icon: <Heading2 className="size-4" />,
      onClick: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      preesed: editor.isActive("heading", { level: 2 }),
    },
    {
      icon: <Heading3 className="size-4" />,
      onClick: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
      preesed: editor.isActive("heading", { level: 3 }),
    },
    {
      icon: <Bold className="size-4" />,
      onClick: () => editor.chain().focus().toggleBold().run(),
      preesed: editor.isActive("bold"),
    },
    {
      icon: <Italic className="size-4" />,
      onClick: () => editor.chain().focus().toggleItalic().run(),
      preesed: editor.isActive("italic"),
    },
    {
      icon: <Strikethrough className="size-4" />,
      onClick: () => editor.chain().focus().toggleStrike().run(),
      preesed: editor.isActive("strike"),
    },
  ];

  return (
    <div className="mb-1 space-x-2 rounded-md border p-1">
      {options.map((option, index) => {
        return (
          <Toggle
            key={index}
            pressed={option.preesed}
            onPressedChange={option.onClick}
          >
            {option.icon}
          </Toggle>
        );
      })}
    </div>
  );
};

export default TiptapMenuBar;
