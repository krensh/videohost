document.addEventListener('DOMContentLoaded', () => {
    const box = document.getElementById('tsundere-box');
    const bubble = document.getElementById('tsundere-bubble');
    const poll = document.getElementById('tsundere-poll');

    if (!box) return; // На странице intro виджета нет

    // Тестовая функция (вызывается из консоли браузера)
    window.testTsunderePoll = () => {
        box.classList.remove('in-corner');
        box.classList.add('in-center');
        bubble.textContent = 'Я тебе нравлюсь?';
        poll.hidden = false;

        // Сигнал (пауза видео)
        document.dispatchEvent(new CustomEvent('tsundere:pause'));
    };

    // Обработка кнопок Да/Нет
    poll.querySelectorAll('.poll-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            poll.hidden = true;
            box.classList.remove('in-center');
            box.classList.add('in-corner');
            bubble.textContent = '...';

            // Сигнал (снять с паузы)
            document.dispatchEvent(new CustomEvent('tsundere:resume'));
        });
    });
});
