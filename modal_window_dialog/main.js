document.addEventListener('DOMContentLoaded', () => {
    // Получаем ссылки на диалог, кнопку открытия, закрытия

    const dialog = document.getElementById('myDialog');
    const openDialogButton = document.getElementById('openButton');
    const closeDialogButton = document.getElementById('closeButton');

    //Обработчик события для открытия диалога
    openDialogButton.addEventListener('click', () => {
        dialog.showModal();
        // dialog.focus()
        closeDialogButton.blur(); // Убираем фокус с кнопки закрытия модального окна 
    });

    //Обработчик события для закрытия диалога
    closeDialogButton.addEventListener('click', () => {
        dialog.close();
    });

    //Закрытие диалога при клике по области вне его содержимого
    dialog.addEventListener('click', (event) => {
        // console.log(event.target);

        if (!event.target.closest('.dialog-block')) {
            dialog.close();
        }
    })

    //  Обработка нажатия клавиши "Escape" для закрытия диалога
    dialog.addEventListener('keydown', (event) => {
        // Если нажата клавиша Escape и диалог открыт, закрываем диалог    
        if (event.key === 'Escape' && dialog.open) {
            dialog.close();
        }
    })
});
