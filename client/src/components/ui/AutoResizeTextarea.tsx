import { useEffect, useRef } from "react";
import { Textarea } from "@/components/ui/textarea";

type AutoResizeTextareaProps =
  React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export default function AutoResizeTextarea(props: AutoResizeTextareaProps) {
  const ref = useRef<HTMLTextAreaElement | null>(null);

  const resize = () => {
    const el = ref.current;
    if (!el) return;

    el.style.height = "auto";
    el.style.height = `${el.scrollHeight}px`;
  };

  useEffect(() => {
    resize();
  }, [props.value]);

  return (
    <Textarea
      {...props}
      ref={ref}
      onInput={(e) => {
        resize();
        props.onInput?.(e);
      }}
      className={`max-h-40 overflow-y-auto ${
        props.className ?? ""
      }`}
    />
  );
}
