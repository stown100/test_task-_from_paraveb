import React from 'react';
import labelInput from '../../images/labelInput.svg'

function StickyFilter() {
  return (
    <form className='form'>
      <input className='form__input first-input' placeholder='Выберите автора' type="text"></input>
      <div className='form__inpits-date'>
        <input className='form__input second-input' placeholder='От' type="text"></input>
        <input className='form__input third-input' placeholder='До' type="text"></input>
      </div>
    </form>
  )
}

export default StickyFilter