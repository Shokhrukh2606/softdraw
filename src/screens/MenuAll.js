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
          <li onClick={() => { props.setScreen(2); props.setAlias('Fanning mazmuni va maqsadi.') }}>1-ma'ruza</li>
          <li onClick={() => { props.setScreen(2); props.setAlias('“Axborot texnologiyalari” fanidan mashg’ulotlarning semestrlarda soatlar bo’yicha taqsimlanishi.') }}>2-ma'ruza</li>
          <li onClick={() => { props.setScreen(2); props.setAlias('«Axborot texnologiyalari» fanidan mashg’ulotlarning mavzular va soatlar bo’yicha taqsimoti.') }}>3-ma'ruza</li>
          <li onClick={() => { props.setScreen(2); props.setAlias('«Axborot texnologiyalari» fanidan mashg’ulotlarning amaliy va soatlar bo’yicha taqsimoti.') }}>4-ma'ruza</li>
          <li onClick={() => { props.setScreen(2); props.setAlias('«Axborot texnologiyalari» fanidan mashg’ulotlarning Mustaqil ish va soatlar bo’yicha taqsimoti') }}>5-ma'ruza</li>
          <li onClick={() => { props.setScreen(2); props.setAlias('Ma’ruza mashg’ulotining kalendar tematik rejasi.') }}>6-ma'ruza</li>
          <li onClick={() => { props.setScreen(2); props.setAlias('Corel Draw dasturida obyektlar va figuralar hosil qilish, ularni xususiyatlarini o’zgartirish.') }}>7-ma'ruza</li>
          <li onClick={() => { props.setScreen(2); props.setAlias('Auto CAD grafik tizimi uning asosiy  tushunchalari, foydalanuvchi interfeysi haqida.') }}>8-ma'ruza</li>
          <li onClick={() => { props.setScreen(2); props.setAlias('Auto CAD dasturida bino loyihasini yaratish.') }}>9-ma'ruza</li>
          <li onClick={() => { props.setScreen(2); props.setAlias('LIRA dasturida qurilish konstruksiyalarini loyihalashni avtomat-lashtirish.') }}>10-ma'ruza</li>
          <li onClick={() => { props.setScreen(2); props.setAlias('3D MAX dasturi elementlari va uning imkoniyatlari.') }}>11-ma'ruza</li>
          <li onClick={() => { props.setScreen(2); props.setAlias('Revit dasturi imkoniyatlari.') }}>11-ma'ruza</li>


        </ul>
      </li>
      <li>
        <span>Amaliy mashg'ulotlar</span>
        <ul>
          <li>1-Amaliy</li>
          <li>2-Amaliy</li>
          <li>3-Amaliy</li>
          <li>4-Amaliy</li>
          <li>5-Amaliy</li>
          <li>6-Amaliy</li>
          <li>7-Amaliy</li>
          <li>8-Amaliy</li>
          <li>9-Amaliy</li>
          <li>10-Amaliy</li>
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
          <li>1-Amaliy topshiriq</li>
          <li>2-Amaliy topshiriq</li>
          <li>3-Amaliy topshiriq</li>
          <li>4-Amaliy topshiriq</li>
          <li>5-Amaliy topshiriq</li>
          <li>6-Amaliy topshiriq</li>
          <li>7-Amaliy topshiriq</li>
          <li>8-Amaliy topshiriq</li>
          <li>9-Amaliy topshiriq</li>
          <li>10-Amaliy topshiriq</li>


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
      <li onClick={() => { props.setScreen(10); }}>
        Muallif haqida
      </li>

    </ul>
  )
}
export default MenuAll;