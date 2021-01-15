const works = () => {
    const workItem = document.querySelectorAll('.works__item'),
          workContent = document.querySelectorAll('.works__content'),
          workContentWrap = document.querySelectorAll('.works__content-wrapper');

    workItem.forEach((item, i) => {
        item.addEventListener('mouseover', () => {
            workContent[i].classList.add('works__content-active');
            workContentWrap[i].style.display = 'block';
        })
    });

    workItem.forEach((item, i) => {
        item.addEventListener('mouseout', () => {
            workContent[i].classList.remove('works__content-active');
            workContentWrap[i].style.display = 'none';
        })
    });
};

export default works;