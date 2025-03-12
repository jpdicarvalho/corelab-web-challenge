import './Home.css'

import Logo from '../images/image_logo.png'

export default function Home() {
  return (
    <div className="container__main">
      <div className="section__header">
        <div className='box__img'>
          <img className='logo' src={Logo} alt="" />
        </div>
        <div className='box__name__web__application'>
          <p className='name__web__application'>CoreNotes</p>
        </div>
      </div>
      <div className="section__favorite__to_do">favorite to-do</div>
      <div className="section__another__to_do">another to_do</div>
    </div>
  );
}