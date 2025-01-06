import { ClipboardDocumentCheckIcon, ClipboardDocumentIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export const CopyClipboard = ({ textToShow, textToCopy }) => {
  // estado para reconocer cuando se copia o no el texto
  const [copy, setCopy] = useState(false);

  // función de ayuda para copiar al portapapeles
  const handleCopyClipboard = () => {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setCopy(true);
        setTimeout(() => {
          setCopy(false);
        }, 1500);
      })
      .catch("no se pudo copiar");
  };

  return (
    <>
      <section className="w-fit px-3 py-1 rounded-full bg-slate-700 flex gap-2 items-center cursor-pointer group active:scale-95 transition-transform" onClick={handleCopyClipboard}>
        <span className="group-hover:text-cyan-300">{!copy ? (textToShow || textToCopy) : "Copiado!"}</span>
        { 
          copy 
          ? (<ClipboardDocumentCheckIcon className="w-5 h-5 group-hover:stroke-cyan-300" />) 
          : (<ClipboardDocumentIcon className="w-5 h-5 group-hover:stroke-cyan-300" />)
        }
      </section>
    </>
  );
};
