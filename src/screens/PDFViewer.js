import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import uslubiy from "./uslubiy/uslubiy.pdf";
function PDFViewer(props) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  function increment(){
    if(pageNumber!=numPages){
      setPageNumber(pageNumber+1)
    }
  }
  function decrement(){
    if(pageNumber!=1){
      setPageNumber(pageNumber-1)
    }
  }
  return (
    <div className="pdf-reader">
      <div className="pdf-render">  
        <Document
          file={props.file}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
      </div>
      <div className="page-number">
        <button onClick={decrement}>Orqaga</button>
        <p>{numPages} tadan {pageNumber}-sahifa</p>
        <button onClick={increment}>Oldinga</button>
      </div>
    </div>
  );
}
export default PDFViewer;