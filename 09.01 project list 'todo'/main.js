
function getCurrentDate() {
    const weekDays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    const today = new Date();
    const dayWeek = weekDays[today.getDay()];
    const day = today.getDate();
    const month = months[today.getMonth()];
    return {
        dayWeek,
        day,
        month
    }
};

function displayCurrentDate(currentDate) {
    const weekDay = document.querySelector('.header-info h2');
    const monthAndDay = document.querySelector('.header-info p');

    weekDay.textContent = currentDate.dayWeek;
    monthAndDay.textContent = `${currentDate.day} ${currentDate.month}`;
}



function startApp() {
    //Показываем текущую дату
    displayCurrentDate(getCurrentDate());

    // Подтягиваем элементы DOM   
    const tasksList = document.getElementById('tasks'); // Список задач (ul)
    const form = document.getElementById('addNewEntryForm'); // Форма добавления новой задачи
    const allTasksTab = document.getElementById('allTasks'); // Вкладка "Bce задачи"
    const activeTasksTab = document.getElementById('activeTasks'); // Вкладка "Активные задачи"
    const completedTasksTab = document.getElementById('completedTasks'); // Вкладка "Выполненные задачи"

    // Инициализировать массив задач из LocalStorage
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];


    // Функция для сохранения массива задач в LocalStorage
    function saveTasksToLocalStorage() {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }

    //Функция для добавления новой задачи
    function addTask(description, date, reminder) {
        tasks.push(
            {
                description,
                date,
                completed: false,
                reminder,
            }
        )
        saveTasksToLocalStorage()
        renderTasks();
    }

    //Функция для отображения задач с учетом фильтрации
    function renderTasks(filter = 'all') {
        tasksList.innerHTML = ''; // Очищаем текущий список задач

        tasks.filter(task => {
            if (filter === 'all') {
                return true
            }
            else if (filter === 'active') {
                return !task.completed;
            }
            else {
                return task.completed;
            }
        })
            .forEach((task, index) => {
                const li = document.createElement('li');
                li.classList.add('task-list');
                li.innerHTML = `
            <label class="custom-checkbox">
                <!-- Добавим checkbox для выполнения задачи -->
                <input type="checkbox" ${task.completed ? 'checked' : ''} data-index="${index}">
                <span></span>
                <!-- Описание задачи. Если задача завершена, добавляем зачеркивание текста -->
                <div>
                    <p class="taskDate">${task.date}</p>
                    <p class="taskText" ${task.completed ? 'style="text-decoration: line-through"' : ''}>${task.description}</p>
                </div>
            </label>
        `;
                tasksList.appendChild(li); //Добавляем задачу в список
            })
    }

    // Функция для переключения статуса выполнения задачи
    function toggleTaskCompletion(index) {
        tasks[index].completed = !tasks[index].completed;
        saveTasksToLocalStorage();
        renderTasks();
    }

    //Обрабатываем событие отправки формы для добавления новой задачи
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const description = e.target.elements.descriptionEntry.value;
        const date = e.target.elements.dataEntry.value;
        const reminder = e.target.elements.reminder.checked;


        //Проверяем, что поля заполнены
        if (description && date) {
            // Добавляем новую задачу
            addTask(description, date, reminder);
            form.reset();
        }
    });

    //Обработка изменения состояния задач
    tasksList.addEventListener('change', (e) => {
        if (e.target.matches('input[type="checkbox"]')) {
            const index = e.target.getAttribute('data-index');
            toggleTaskCompletion(index);
        }
    });


    //Обрабатываем переключение ввладки "Все задачи"
    allTasksTab.addEventListener('click', () => {
        renderTasks('all');
        setActiveTab(allTasksTab);
    });

    //Обрабатываем переключение ввладки "Активные задачи"
    activeTasksTab.addEventListener('click', () => {
        renderTasks('active');
        setActiveTab(activeTasksTab);
    });

    //Обрабатываем переключение ввладки "Завершенные задачи"
    completedTasksTab.addEventListener('click', () => {
        renderTasks('completed');
        setActiveTab(completedTasksTab);
    });

    //Функция для выделения активной вкладки
    function setActiveTab(activeTab) {
        [allTasksTab, activeTasksTab, completedTasksTab].forEach(tab => tab.classList.remove('active'));
        activeTab.classList.add('active');

        // [allTasksTab, activeTasksTab, completedTasksTab].forEach(tab => tab.classList.remove('active')); // Убираем класс "active" у всех вкладок
        // activeTab.classList.add('active'); // Добавляем класс "active" выбранной вкладке
    }

    //Обработчик появления модального окна добавления новой задачи
    document.querySelector('.addTask-button').addEventListener('click', () => {
        document.querySelector('.modal').classList.add('active');
        document.querySelector('.new-entry').classList.add('active');
    });

    //Обработчик закрытия модального окна добавления новой задачи
    document.querySelector('button[type="reset"]').addEventListener('click', () => {
        document.querySelector('.modal').classList.remove('active');
        document.querySelector('.new-entry').classList.remove('active');
    });

    //Обработчик закрытия модального окна добавления новой задачи?????????????
    document.querySelector('.modal').addEventListener('click', (event) => {
        if (event.target === document.querySelector('.modal')) {
            document.querySelector('.modal').classList.remove('active');
            document.querySelector('.new-entry').classList.remove('active');
        }
    });

    //Обработчик закрытия модального окна добавления новой задачи
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            document.querySelector('.modal').classList.remove('active');
            document.querySelector('.new-entry').classList.remove('active');
        }
    });

    // const date = new Date();
    // const options = { day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit' };
    // const formattedDate = date.toLocaleString('ru-RU', options);
    // console.log(formattedDate); // Например: "10 января, 11:30"  

    
    // Функция для вывода даты и времени задачи на экран  ---------Natalia---------
    // function getInputAndSetDate(inputDate) {
    //     const months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];

    //     const date = new Date(inputDate);

    //     const day = date.getDate(); // День місяця
    //     const month = months[date.getMonth()]; // Назва місяця
    //     const hours = String(date.getHours()).padStart(2, "0"); // Години
    //     const minutes = String(date.getMinutes()).padStart(2, "0"); // Хвилини
    //     const formattedDate = `${day} ${month}, ${hours}:${minutes}`;

    //     return formattedDate;
    // }
    // getInputAndSetDate(date)
    //Therd branch





    renderTasks();

}

startApp();











