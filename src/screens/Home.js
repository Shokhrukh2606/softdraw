import React from 'react'
import { useState } from 'react/cjs/react.development';
import { Coral, Test, Theory, Video, Welcome } from './index';
import { getAlias } from './mavzular';
import legend from '../assets/icons/legend.jpg'
import korsatma from "./uslubiy/uslubiy.pdf"
import PDFWrapper from "./PDFWrapper";
import PDFViewer from './PDFViewer';
const PDFEmbed = ({ menu, alias }) => {
	const data = getAlias(menu, alias)
	return <>
		<embed className="w-100" style={{ height: '100vh' }} src={data['text']} type="application/pdf" />
	</>
}
const OnePDFEmbed = ({given}) => {
	return <>
		<embed className="w-100" style={{ height: '100vh' }} src={given} type="application/pdf" />
	</>
}
const Maruza = ({ menu, alias }) => {
	const data = getAlias(menu, alias)
	return <>
		{data && <div className="container-fluid">
			<div className="row">
				<div className="col-12 text-center" dangerouslySetInnerHTML={{ __html: data['text'] }} />
			</div>

		</div>}
	</>
}

const VideoLessons = ({ menu, alias }) => {
	return <>
		<Coral />
	</>
}
const KIMModellar = ({ menu, alias }) => {
	const data = getAlias(menu, alias)
	return <>
		{data && <div className="container-fluid">
			<div className="row">
				<div className="col-12 text-center" dangerouslySetInnerHTML={{ __html: data['text'] }} />

				<video className="w-100" controls style={{height:'calc(100vh - 100px)'}} >
					<source src={data['video']} type="video/mp4" />
				</video>
			</div>

		</div>}
	</>
}
const Testlar = ({ alias, setScreen }) => {
	if (alias = 'normal')
		return <>
			<Test setScreen={setScreen} />
		</>
	else
		return <>

		</>
}
const Home = ({ screen, setScreen, alias, setAlias }) => {

	switch (screen) {
		case 0:
			return <Welcome setScreen={setScreen} />
			break;
		case 1:
			return <OnePDFEmbed given={korsatma} />
			break;
		case 2:
			return <PDFEmbed menu="maruza" setScreen={setScreen} alias={alias} />
			break;
		case 3:
			return <PDFEmbed menu="amaliy" setScreen={setScreen} alias={alias} />
			break;
		case 4:
			return <Maruza menu="mustaqil" setScreen={setScreen} alias={alias} />
			break;

		case 5:
			return <Maruza menu="xgi" setScreen={setScreen} alias={alias} />
			break;
		case 6:
			return <PDFEmbed menu="amaliy_topshiriqlar" setScreen={setScreen} alias={alias} />
			break;
		case 7:
			return <VideoLessons menu="video_darslar" setScreen={setScreen} alias={alias} />
			break;
		case 8:
			return <KIMModellar menu="kim_modellar" setScreen={setScreen} alias={alias} />
			break;
		case 9:
			return <Testlar setScreen={setScreen} alias={alias} setAlias={setAlias} />
			break;
		case 10:
			return <>
				<div className="jumbotron text-center">
					<img width="200" src={legend} />
					<h2>T.N.Qori Niyoziy nomidagi O’zPFITI tayanch doktoranti </h2><br />
					<h1>Shodmonqulov Mirolim Turanovich</h1>
				</div>
				<div className="text-center">
					<a className="btn btn-info mr-2" href="mailto:Mirolim.shodmonqulov@mail.ru">Mirolim.shodmonqulov@mail.ru</a>
					<a className="btn btn-info" href="tel:+998 93 232 71 90">Tel: +998 93 232 71 90</a>
				</div>

			</>
			break;
		default:
			return <Welcome setScreen={setScreen} />

	}
}
export default Home;