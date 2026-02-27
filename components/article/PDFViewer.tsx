"use client";

import { ArrowSquareOut, DownloadSimple } from "@phosphor-icons/react";

export function PDFViewer({ pdfFile }: { pdfFile: string }) {
  const pdfUrl = `/pdfs/${pdfFile}`;

  return (
    <div className="space-y-4">
      {/* Controls */}
      <div className="flex items-center justify-between">
        <span className="text-xs text-charcoal/40 tracking-wider uppercase">
          Documento PDF
        </span>
        <div className="flex items-center gap-2">
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-charcoal/10 text-xs text-charcoal/60 hover:text-burgundy hover:border-burgundy/30 transition-all duration-300"
          >
            <ArrowSquareOut size={14} weight="regular" />
            Abrir
          </a>
          <a
            href={pdfUrl}
            download
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-charcoal/10 text-xs text-charcoal/60 hover:text-burgundy hover:border-burgundy/30 transition-all duration-300"
          >
            <DownloadSimple size={14} weight="regular" />
            Descargar
          </a>
        </div>
      </div>

      {/* Embedded viewer */}
      <div className="rounded-xl overflow-hidden border border-charcoal/[0.08] bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)]">
        <iframe
          src={pdfUrl}
          className="w-full h-[75vh] min-h-[500px]"
          title="Visor de PDF"
        />
      </div>
    </div>
  );
}
