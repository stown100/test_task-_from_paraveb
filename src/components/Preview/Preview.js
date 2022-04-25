import React from 'react'

function Preview() {
    return (
        <div className='preview'>
            <h1 className='preview__title'>IT-инфраструктура для бизнеса</h1>
            <p className='preview__text'>
                Мы предлагаем комплексные решения для всех уровней бизнеса:
                от индивидуальных предпринимателей до крупных международных компаний.
                Более 20 000 клиентов по всему миру доверяют нам.
            </p>
            <div className='previews__switches'>
                <span className='previews__switche previews__switche_active'></span>
                <span className='previews__switche previews__switche_active'></span>
                <span className='previews__switche previews__switche_active'></span>
            </div>
        </div>
    )
}

export default Preview