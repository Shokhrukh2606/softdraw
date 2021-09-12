import React, { Component } from "react";

export class Tables extends Component {
  render() {
    return (
      <div>
        <div className="content">
          <div className="table">
            <div className="table3">
              <h2>
                «Axborot texnologiyalari» fanidan mashg’ulotlarning amaliy va
                soatlar bo’yicha taqsimoti
              </h2>
              <table>
                <tr>
                  <th>№</th>
                  <th>Amaliy mashg’ulot darslari mavzulari</th>
                  <th>Soat</th>
                </tr>
                <tr>
                  <th></th>
                  <th>I semestr</th>
                  <th></th>
                </tr>
                <tr>
                  <td>1.</td>
                  <td>Qurilish sohasiga doir axborotlarning xossalari.</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Tashkiliy texnika vositalari bilan ishlash.</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    Qurilishda murakkab hujjatlarni shakllantirish
                    texnologiyalari.
                  </td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>
                    Qurilish korxonasi ma’lumotlarini elektron jadvalda
                    shakllantirish.
                  </td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>
                    Qurilish korxonasi taqdimotlarini yaratish texnologiyalari.
                  </td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>
                    Ma’lumotlar bazasini boshqarish tizimlari bilan ishlash
                  </td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>
                    Qurilish korxonasi ma’lumotlar bazasini yaratish usullari va
                    vositalari.
                  </td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>
                    Mutaxassisliklarga ixtisoslashgan tizimlar va dasturlar
                    yordamida soha masalalarini yechish.
                  </td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>Qurilishda kompyuter tarmog’ini loyihalash</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>Sohaga taaluqli firmaning web-saytini yaratish</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>Internet axborot-qidiruv tizimlari.</td>
                  <td>2</td>
                </tr>

                <tr>
                  <th></th>
                  <th>I semestr uchun jami:</th>
                  <th>30</th>
                </tr>
                <tr>
                  <th></th>
                  <th>II semestr </th>
                  <th></th>
                </tr>
                <tr>
                  <td>1</td>
                  <td>
                    Qurilish masalalarini obyektga yo’naltirilgan
                    dasturlashtirish tillaridan foydalanib yechish.
                  </td>
                  <td>6</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Qurilishni boshqarish dasturiy ta’minoti.</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    Qurilish korxonasida avtomatlashtirilgan ish joylarini
                    tashkillashtirish.
                  </td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>
                    Rastrli grafika dasturi yordamida ob’ektlarni qayta ishlash.
                  </td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>
                    Vektorli grafika dasturi yordamida ob’ektlarni yaratish va
                    ularni qayta ishlash.
                  </td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>
                    Avtomatlashtirilgan loyihalash tizimida ob’ektlarni
                    loyihalash.
                  </td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>
                    Uch o’lchoivli kompyuterli modellashtirishdasturidan
                    foydalanib ob’ektlarni yaratish.
                  </td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>
                    Qurilish konstruktsiyalarini avtomatlashtirish dasturidan
                    foydalanib ob’ektlarni yaratish.
                  </td>
                  <td>4</td>
                </tr>
                <tr>
                  <th></th>
                  <th>II semestr uchun jami:</th>
                  <th>30</th>
                </tr>
                <tr>
                  <th></th>
                  <th>Kurs bo’yicha jami:</th>
                  <th>60</th>
                </tr>
              </table>
            </div>

            {/* <div className="table2">
              <h2>
                «Axborot texnologiyalari» fanidan mashg’ulotlarning mavzular va
                soatlar bo’yicha taqsimoti
              </h2>
              <table>
                <tr>
                  <th>№</th>
                  <th>Ma’ruzalar mavzusi</th>
                  <th>Soat</th>
                </tr>
                <tr>
                  <th></th>
                  <th>I semestr</th>
                  <th></th>
                </tr>
                <tr>
                  <td>1.</td>
                  <td>
                    Qurilishda axborot texnologiyalari fanining maqsad va
                    vazifalari.
                  </td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    Axborot kompyuter texnologiyalarini tadbiq qilishning texnik
                    vositalari.
                  </td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    Arxitektura va qurilish sohasida zamonaviy kompyuterlarning
                    dasturiy ta’minoti.
                  </td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>
                    Arxitektura va qurilish sohasida axborotlarga ishlov berish
                    texnologiyalari.
                  </td>
                  <td>6</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Qurilish masalalarini sonli usullar yordamida echish.</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>
                    Mutaxassisliklarga ixtisoslashgan tizimlar va dasturlar.
                  </td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Kompyuter tarmoqlari va tarmoq texnologiyalari.</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>
                    Qurilish va arxitektura sohasida axborot xavfsizligi va
                    axborotlarni himoyalash usullari.
                  </td>
                  <td>2</td>
                </tr>
                <tr>
                  <th></th>
                  <th>I semestr uchun jami:</th>
                  <th>30</th>
                </tr>
                <tr>
                  <th></th>
                  <th>II semestr </th>
                  <th></th>
                </tr>
                <tr>
                  <td>1</td>
                  <td>
                    Qurilish va arxitektura sohasida axborot jarayonlarini
                    algoritmlash va dasturlash.
                  </td>
                  <td>6</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Arxitektura va qurilish sohasida axborot tizimlari.</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Kompyuter grafikasi tushunchasi va turlari.</td>
                  <td>6</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Qurilishda avtomatlashtirilgan loyihalash tizimlari.</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Kompyuterda uch o’lchovli modellashtirish.</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>
                    Qurilish ob’ektlarining axborot modelini loyihalash
                    tizimlari.
                  </td>
                  <td>6</td>
                </tr>
                <tr>
                  <th></th>
                  <th>I semestr uchun jami:</th>
                  <th>30</th>
                </tr>
                <tr>
                  <th></th>
                  <th>Kurs bo’yicha jami:</th>
                  <th>60</th>
                </tr>
              </table>
            </div> */}

            {/* <div className="table1">
              <h2>
              “Axborot texnologiyalari” fanidan mashg’ulotlarning semestrlarda
              soatlar bo’yicha taqsimlanishi.{" "}
            </h2>
            <table>
              <tr>
                <th>Semestr</th>
                <th>Umumiy o’quv yuklamasi</th>
                <th>Ma’ruza darsi</th>
                <th>Amaliy mashg’ulot</th>
                <th>Laborato-riya</th>
                <th>Kurs ishi yoki kurs loyihasi</th>
                <th>Mustaqil ta’lim</th>
              </tr>
              <tr>
                <td>I</td>
                <td>150</td>
                <td>30</td>
                <td>30</td>
                <td>-</td>
                <td>-</td>
                <td>90</td>
              </tr>
              <tr>
                <td>II</td>
                <td>120</td>
                <td>30</td>
                <td>30</td>
                <td>-</td>
                <td>-</td>
                <td>60</td>
              </tr>
              <tr>
                <td>Жами:</td>
                <td>270</td>
                <td>60</td>
                <td>60</td>
                <td>-</td>
                <td>-</td>
                <td>150</td>
              </tr>
            </table>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Tables;