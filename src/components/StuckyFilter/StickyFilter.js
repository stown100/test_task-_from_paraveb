import React from 'react';
import labelInput from '../../images/labelInput.svg'

function StickyFilter() {
  return (
    <form className='form'>
        <input className='form__input first-input' placeholder='Выберите автора' type="text"></input>
        <input className='form__input' placeholder='От' type="text"></input>
        <input className='form__input' placeholder='До' type="text"></input>
    </form>
  )
}

export default StickyFilter