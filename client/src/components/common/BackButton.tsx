import { useNavigate } from "react-router";
import { ArrowLeft } from "lucide-react";
import { Button } from "../ui/button";

export default function BackButton() {
  const navigate = useNavigate();
  return (
    <Button variant={"outline"} onClick={() => navigate(-1)}>
      <ArrowLeft />
    </Button>
  );
}
