document.addEventListener('DOMContentLoaded', () => {
    const box = document.getElementById('tsundere-box');
    const bubble = document.getElementById('tsundere-bubble');
    const poll = document.getElementById('tsundere-poll');

    if (!box) return;

    // Функция показа опроса
    const showPoll = () => {
        // Защита от спама, если опрос уже открыт
        if (!poll.hidden) return;

        box.classList.remove('in-corner');
        box.classList.add('in-center');
        bubble.textContent = 'Я тебе нравлюсь?';
        poll.hidden = false;
        document.body.classList.add('darkened');

        // Сигнал  (пауза видео)
        // Если плеера на странице нет, событие просто улетит в пустоту, и сайт не сломается.
        document.dispatchEvent(new CustomEvent('tsundere:pause'));
    };

    // Функция скрытия опроса
    const hidePoll = () => {
        poll.hidden = true;
        box.classList.remove('in-center');
        box.classList.add('in-corner');
        bubble.textContent = '...';
        document.body.classList.remove('darkened');

        // Сигнал  (снять с паузы)
        document.dispatchEvent(new CustomEvent('tsundere:resume'));
    };

    // Обработка кнопок
    poll.querySelectorAll('.poll-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            hidePoll();
        });
    });

    // ТАЙМЕР НА 30 СЕКУНД (теперь работает на ВСЕХ страницах)
    setInterval(() => {
        showPoll();
    }, 30000);

    // Оставляем тестовую функцию для ручного вызова из консоли
    window.testTsunderePoll = showPoll;
});
