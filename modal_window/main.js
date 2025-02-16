// Ждем, пока создастся DOM
document.addEventListener('DOMContentLoaded', () => {
    //Получаем элементы модального окна и кнопок (открытия, закрытия)

    const modal = document.getElementById('modal'); //Модальное окно
    const modalBody = document.getElementById('modalBody'); // Содержимое модаоьного окна
    const openButton = document.getElementById('openButton'); // Кнопка открытия модального окна
    const closeButton = document.getElementById('closeButton'); // Кнопка закрытия модального окна

    // Функция для переключения видимости модального окна
    const toggleModal = () => {
        modal.classList.toggle('modal--hidden')
    }

    // Обработчик клика по кнопке открытия модального окна
    openButton.addEventListener('click', () => {
        toggleModal();
    })

    // Обработчик клика по кнопке закрытия модального окна
    closeButton.addEventListener('click', () => {
        toggleModal();
    })

    // ????????????????????????
    // Обработчик клика по фону модального окна
    // При клике на фон, окно закрывается

    modal.addEventListener('click', (event) => {
        // console.log(event);
        //Вариант 1
        // if(event.target === modal) {
        //     toggleModal()
        // }        
        toggleModal();
    });

    //Вариант 2 (лучше, т.к экономит время и вычислительные ресурсы)
    modalBody.addEventListener('click', (event) => {
        event.stopPropagation();
    });

    //Закрытие модального окна по нажатию клавиши ESC
    document.addEventListener('keydown', (event) => {
        // console.log(event.key);
        // Если нажата клавиша "Escape" и модальное окно открыто то закрываем модальное окно
        if (event.key === 'Escape' && !modal.classList.contains('modal--hidden')) {
            toggleModal();
        }
    })
})