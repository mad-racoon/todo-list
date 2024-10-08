import logoImg from '../assets/logo.png';

export default function Header() {
  const date = new Date().toLocaleDateString('de-DE');

  const randomIndex = Math.floor(Math.random() * 10);

  return (
    <header>
      <img src={logoImg} alt='a hand-drawing of burning elmo' />
      <h1>Cried All?</h1>
      <h1>Now Get Back To Work!</h1>
      <h2>Good morning, Begana! Today is : {date}</h2>
    </header>
  );
}
