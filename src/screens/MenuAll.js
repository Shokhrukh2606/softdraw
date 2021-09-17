import React from 'react'
const MenuAll = (props) => {
  return (
    <ul className="mynavbar">
      <li >
        <span>Fan haqida</span>
        <ul>
          <li onClick={() => props.setScreen(1)}>Fanning mazmuni va maqsadi</li>
        </ul>
      </li>
      <li>
        <span>Ma'ruza mashg'ulotlar</span>
        <ul>
          <li onClick={() => { props.setScreen(2); props.setAlias('1-maruza') }}>1-ma'ruza</li>
          <li onClick={() => { props.setScreen(2); props.setAlias('2-maruza') }}>2-ma'ruza</li>
          <li onClick={() => { props.setScreen(2); props.setAlias('3-maruza') }}>3-ma'ruza</li>
          <li onClick={() => { props.setScreen(2); props.setAlias('4-maruza') }}>4-ma'ruza</li>
          <li onClick={() => { props.setScreen(2); props.setAlias('5-maruza') }}>5-ma'ruza</li>
          <li onClick={() => { props.setScreen(2); props.setAlias('6-maruza') }}>6-ma'ruza</li>
          <li onClick={() => { props.setScreen(2); props.setAlias('7-maruza') }}>7-ma'ruza</li>
          <li onClick={() => { props.setScreen(2); props.setAlias('8-maruza') }}>8-ma'ruza</li>
          <li onClick={() => { props.setScreen(2); props.setAlias('9-maruza') }}>9-ma'ruza</li>
        </ul>
      </li>
      <li>
        <span>Amaliy mashg'ulotlar</span>
        <ul>
          <li onClick={() => { props.setScreen(3); props.setAlias('1-amaliy') }}>1-Amaliy</li>
          <li onClick={() => { props.setScreen(3); props.setAlias('2-amaliy') }}>2-Amaliy</li>
          <li onClick={() => { props.setScreen(3); props.setAlias('3-amaliy') }}>3-Amaliy</li>
          <li onClick={() => { props.setScreen(3); props.setAlias('4-amaliy') }}>4-Amaliy</li>
          <li onClick={() => { props.setScreen(3); props.setAlias('5-amaliy') }}>5-Amaliy</li>
          <li onClick={() => { props.setScreen(3); props.setAlias('6-amaliy') }}>6-Amaliy</li>
          <li onClick={() => { props.setScreen(3); props.setAlias('7-amaliy') }}>7-Amaliy</li>
        </ul>
      </li>
      <li>
        <span>Mustaqil ish mavzulari</span>
        <ul>
          <li>1-Mustaqil ish</li>
          <li>2-Mustaqil ish</li>
          <li>3-Mustaqil ish</li>
          <li>4-Mustaqil ish</li>
          <li>5-Mustaqil ish</li>
          <li>6-Mustaqil ish</li>
          <li>7-Mustaqil ish</li>
          <li>8-Mustaqil ish</li>
          <li>9-Mustaqil ish</li>
          <li>10-Mustaqil ish</li>


        </ul>
      </li>
      <li>
        <span>XGI mavzulari</span>
        <ul>
          <li>1-XGI</li>
          <li>2-XGI</li>

        </ul>
      </li>
      <li>
        <span>Amaliy topshiriqlar</span>
        <ul>
          <li onClick={()=>{props.setScreen(6); props.setAlias('1-amaliy_topshiriq')}}>1-Amaliy topshiriq</li>
          <li onClick={()=>{props.setScreen(6); props.setAlias('2-amaliy_topshiriq')}}>2-Amaliy topshiriq</li>
          <li onClick={()=>{props.setScreen(6); props.setAlias('3-amaliy_topshiriq')}}>3-Amaliy topshiriq</li>
          <li onClick={()=>{props.setScreen(6); props.setAlias('4-amaliy_topshiriq')}}>4-Amaliy topshiriq</li>
          <li onClick={()=>{props.setScreen(6); props.setAlias('5-amaliy_topshiriq')}}>5-Amaliy topshiriq</li>


        </ul>
      </li>
      <li>
        <span>Video darslar</span>
        <ul>
          <li onClick={() => { props.setScreen(7); props.setAlias('1-DARS') }}>1-Video</li>
          <li onClick={() => { props.setScreen(7); props.setAlias('2-DARS') }}>2-Video</li>
          <li onClick={() => { props.setScreen(7); props.setAlias('3-DARS') }}>3-Video</li>
          <li onClick={() => { props.setScreen(7); props.setAlias('4-DARS') }}>4-Video</li>
          <li onClick={() => { props.setScreen(7); props.setAlias('5-DARS') }}>5-Video</li>
          <li onClick={() => { props.setScreen(7); props.setAlias('6-DARS') }}>6-Video</li>
          <li onClick={() => { props.setScreen(7); props.setAlias('7-DARS') }}>7-Video</li>
          <li onClick={() => { props.setScreen(7); props.setAlias('8-DARS') }}>8-Video</li>
          <li onClick={() => { props.setScreen(7); props.setAlias('9-DARS') }}>9-Video</li>
          <li onClick={() => { props.setScreen(7); props.setAlias('10-DARS') }}>10-Video</li>

        </ul>
      </li>
      <li>
        <span>KIM Modellar</span>
        <ul>
          <li>1-KIM</li>
          <li>2-KIM</li>
          <li>3-KIM</li>
          <li>4-KIM</li>
          <li>5-KIM</li>
          <li>6-KIM</li>
          <li>7-KIM</li>
          <li>8-KIM</li>
          <li>9-KIM</li>
          <li>10-KIM</li>

        </ul>
      </li>
      <li>
        <span>Testlar</span>
        <ul>
          <li onClick={() => { props.setScreen(9); props.setAlias('normal') }}>Standart test</li>
          <li>Nostandart test</li>

        </ul>
      </li>
      <li className="text-white" onClick={() => { props.setScreen(10); }}>
        Muallif haqida
      </li>

    </ul>
  )
}
export default MenuAll;