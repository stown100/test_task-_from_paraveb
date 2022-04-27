import React from 'react';
import labelInput from '../../images/labelInput.svg'

function StickyFilter({ handleChange, handleChangeFromMinDate, handleChangeFromMaxDate, searchAuthor, filterMinDate, filterMaxDate }) {
  return (
    <form className='form'>
      <input className='form__input first-input' placeholder='Выберите автора' type="text"
        onChange={handleChange} value={searchAuthor}>
      </input>
      <div className='form__inpits-date'>
        <input className='form__input second-input' placeholder='От' type="text"
        onChange={handleChangeFromMinDate} value={filterMinDate}></input>
        <input className='form__input third-input' placeholder='До' type="text"
        onChange={handleChangeFromMaxDate} value={filterMaxDate}></input>
      </div>
    </form>
  )
}

export default StickyFilter