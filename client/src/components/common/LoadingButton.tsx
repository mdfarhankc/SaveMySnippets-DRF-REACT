import { type ReactNode } from "react";
import { Button } from "../ui/button";
import Loading from "./Loading";

interface LoadingButtonProps extends React.ComponentProps<"button"> {
  children: ReactNode | string;
  isLoading: boolean;
}

export default function LoadingButton({
  children,
  isLoading,
  ...props
}: LoadingButtonProps) {
  return (
    <Button disabled={isLoading} {...props}>
      {isLoading ? <Loading /> : children}
    </Button>
  );
}
