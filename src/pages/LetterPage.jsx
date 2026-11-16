import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { letter } from "../data/memories";
import LoveNote from "../components/LoveNote";
import LetterModal from "../components/LetterModal";

export default function LetterPage() {
  const { rainHearts } = useOutletContext();
  const [open, setOpen] = useState(false);
  return (
    <>
      <LoveNote onOpenLetter={() => { setOpen(true); rainHearts(); }} />
      {open && <LetterModal letter={letter} onClose={() => { setOpen(false); rainHearts(); }} />}
    </>
  );
}
