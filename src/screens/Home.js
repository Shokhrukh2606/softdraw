import React from 'react'
import { useState } from 'react/cjs/react.development';
import { Coral, Test, Theory, Video, Welcome } from './index';
import { getAlias } from './mavzular';
import legend from './legend.jpg'
import korsatma from "./Uslubiy ko'rsatma.pdf"
const Fanhaqida = () => {
	return <>
		<embed className="w-100" style={{ height: '100vh' }} src={korsatma} type="application/pdf" />
	</>
}
const PDFviewer = ({ menu, alias }) => {
	const data = getAlias(menu, alias)
	return <>
		<embed className="w-100" style={{ height: '100vh' }} src={data['text']} type="application/pdf" />
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
	const data = getAlias(menu, alias)
	return <>
		{data && <div className="container-fluid">
			<div className="row">
				<div className="col-12 text-center" dangerouslySetInnerHTML={{ __html: data['text'] }} />
				<video className="w-100" src={data['video']} />
			</div>

		</div>}
	</>
}
const KIMModellar = () => {
	return <></>
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
			return <Fanhaqida setScreen={setScreen} />
			break;
		case 2:
			return <PDFviewer menu="maruza" setScreen={setScreen} alias={alias} />
			break;
		case 3:
			return <PDFviewer menu="amaliy" setScreen={setScreen} alias={alias} />
			break;
		case 4:
			return <Maruza menu="mustaqil" setScreen={setScreen} alias={alias} />
			break;

		case 5:
			return <Maruza menu="xgi" setScreen={setScreen} alias={alias} />
			break;
		case 6:
			return <PDFviewer menu="amaliy_topshiriqlar" setScreen={setScreen} alias={alias} />
			break;
		case 7:
			return <VideoLessons menu="video_darslar" setScreen={setScreen} alias={alias} />
			break;
		case 8:
			return <KIMModellar setScreen={setScreen} />
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

	}
}
export default Home;