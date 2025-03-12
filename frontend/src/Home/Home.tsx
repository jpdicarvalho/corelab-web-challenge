import './Home.css'

import Logo from '../images/image_logo.png'

import { IoMdClose } from "react-icons/io";

export default function Home() {
  return (
    <div className="container__main">
      <div className="section__header">
        <div className='box__img__name__input'>
          <div className='inner__img'>
            <img className='logo' src={Logo} alt="" />
          </div>
          <div className='inner__name__web__application center'>
            <p className='name__web__application'>CoreNotes</p>
          </div>
          <div className='inner__input__search center'>
            <input
              type="search"
              className="input__search"
              placeholder='Pesquisar notas'
            />
          </div>
        </div>
        
        <div className='box__icon__close center'>
          <IoMdClose className='icon__close'/>
        </div>

      </div>
      <div className="section__favorite__to_do">favorite to-do</div>
      <div className="section__another__to_do">another to_do</div>
    </div>
  );
}