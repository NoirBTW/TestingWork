import chld from "../assets/DeWatermark.ai_1757187963578.png";
import pot from "../assets/Кнопка - банки.png";
import himg from "../assets/Group 2281.png";
import bottle from "../assets/icons8-детская-бутылочка-100.png";
import shield from "../assets/icons8-щит-со-знаком-коронавируса-100.png";
import arrows from "../assets/icons8-синхронизировать-100.png";
import brain from "../assets/icons8-креативность-100.png";
import clock from "../assets/icons8-часы-100.png";
import menu from "../assets/Меню.png"
import "./Home.css";

export function Home() {
  return (
    <div>
      <div className="header-almost">
        <p>ИДЕАЛЬНОЙ ПИЩЕЙ ДЛЯ ГРУДНОГО РЕБЁНКА ЯВЛЯЕТСЯ МОЛОКО МАТЕРИ</p>
      </div>
      <img alt="Заголовок" src={himg} className="img-h" />
      <p className="p-between">---------</p>
      <p className="p-underh">забота о малыше каждый день</p>
      <div className="orbit-container">
        <div className="orbits">
            <div className="orbit-circle outer"></div>
            <div className="orbit-circle inner"></div>
        </div>
        <img alt="Банка" src={pot} className="img-pot" />
        <div>
          <img
            src={bottle}
            title="Полноценное питание"
            alt="Полноценное питание"
            className="orbit-icon icon1"
          />
          <img
            src={shield}
            title="Иммунитет"
            alt="Иммунитет"
            className="orbit-icon icon2"
          />
          <img
            src={arrows}
            title="Усвоение"
            alt="Усвоение"
            className="orbit-icon icon3"
          />
          <img
            src={brain}
            title="Развитие"
            alt="Развитие"
            className="orbit-icon icon4"
          />
          <img
            src={clock}
            title="Удобство"
            alt="Удобство"
            className="orbit-icon icon5"
          />
        </div>
      </div>
      <img alt="Ребёнок" src={chld} className="img-chld" />
      <img src={menu} alt="Меню" className="img-menu"/>
      <p className="p-info">ИНФОРМАЦИЯ ТОЛЬКО ДЛЯ МЕДИЦИНСКИХ РАБОТНИКОВ.<br /> НЕ ДЛЯ ПЕРЕДАЧИ ТРЕТЬИМ ЛИЦАМ</p>
    </div>
  );
}
