import calcScroll from './calcScroll';

const form = () => {
    const form = document.querySelectorAll('form'),
          input = document.querySelectorAll('input'),
          textarea = document.querySelector('textarea'),
          successModal = document.querySelector('.contacts__success'),
          overlay = document.querySelector('.overlay'),
          scroll = calcScroll();

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            const postData = () => {
                const formData = new FormData(item);

                const obj = {};
                formData.forEach((value, key) => {
                    obj[key] = value;
                });
                
                fetch('mailer/index.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(obj)
                })
                .then(() => {
                    // console.log(obj);
                    successModal.style.display = 'flex';
                    overlay.style.display = 'block';
                })
                .catch(() => {
                    console.log('failure');
                })
                .then(cleanInput());
            }

            postData();

            function cleanInput() {
                textarea.value = '';
                for (let i = 0; i < input.length; i++) {          //очищаем поля после отправки
                    input[i].value = '';
                }
            }
        });
    });
};

export default form;