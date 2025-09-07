import chld from "../assets/DeWatermark.ai_1757187963578.png";
import pot from "../assets/Кнопка - банки.png";
import himg from "../assets/Group 2281.png";
import bottle from "../assets/icons8-детская-бутылочка-100.png";
import shield from "../assets/icons8-щит-со-знаком-коронавируса-100.png";
import arrows from "../assets/icons8-синхронизировать-100.png";
import brain from "../assets/icons8-мозг-100.png";
import clock from "../assets/icons8-часы-100.png";
import menu from "../assets/Меню.png";
import "./Home.css";
import { useState } from "react";

export function Home() {
  const [orbitAngle, setOrbitAngle] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [lastX, setLastX] = useState(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setLastX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const deltaX = e.clientX - lastX;
    setOrbitAngle((prev) => prev + deltaX * 0.4);
    setLastX(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  let startX = 0;

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    startX = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const deltaX = e.touches[0].clientX - startX;
    setOrbitAngle((prev) => prev + deltaX * 0.01);
    startX = e.touches[0].clientX;
  };

  return (
    <div className="div-bg">
      <div className="header-almost">
        <p>ИДЕАЛЬНОЙ ПИЩЕЙ ДЛЯ ГРУДНОГО РЕБЁНКА ЯВЛЯЕТСЯ МОЛОКО МАТЕРИ</p>
      </div>
      <img alt="Заголовок" src={himg} className="img-h" />
      <p className="p-between">{"-".repeat(200)}</p>
      <p className="p-underh">ваши проблемы - наша забота о малыше каждый день</p>
      <div className="orbit-container">
        <div className="orbits">
          <div className="orbit-circle outer"></div>
          <div className="orbit-circle inner"></div>
        </div>
        <img alt="Банка" src={pot} className="img-pot" />
        <div
          className="orbit"
          style={{
            transform: `translate(-50%, -50%) rotate(${orbitAngle}deg)`,
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          <img
            src={bottle}
            title="Полноценное питание"
            alt="Полноценное питание"
            className="orbit-icon"
            style={{ transform: "rotate(0deg) translateY(-9vw)" }}
          />
          <img
            src={shield}
            title="Иммунитет"
            alt="Иммунитет"
            className="orbit-icon"
            style={{ transform: "rotate(72deg) translateY(-9vw)" }}
          />
          <img
            src={arrows}
            title="Усвоение"
            alt="Усвоение"
            className="orbit-icon"
            style={{ transform: "rotate(144deg) translateY(-9vw)" }}
          />
          <img
            src={brain}
            title="Развитие"
            alt="Развитие"
            className="orbit-icon"
            style={{ transform: "rotate(216deg) translateY(-9vw)" }}
          />
          <img
            src={clock}
            title="Удобство"
            alt="Удобство"
            className="orbit-icon"
            style={{ transform: "rotate(288deg) translateY(-9vw)" }}
          />
        </div>
      </div>
      <img alt="Ребёнок" src={chld} className="img-chld" />
      <img src={menu} alt="Меню" className="img-menu" />
      <p className="p-info">
        ИНФОРМАЦИЯ ТОЛЬКО ДЛЯ МЕДИЦИНСКИХ РАБОТНИКОВ.
        <br /> НЕ ДЛЯ ПЕРЕДАЧИ ТРЕТЬИМ ЛИЦАМ
      </p>
    </div>
  );
}
