import React from 'react';
import { getAlias } from './mavzular';
import PDFViewer from './PDFViewer';

const PDFWrapper = ({ menu, alias }) => {
	const data = getAlias(menu, alias)
	return <>
		<PDFViewer file={data['text']} />
	</>
}
export default PDFWrapper;