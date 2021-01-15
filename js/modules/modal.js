const modal = () => {
    const modal = document.querySelector('.contacts__success'),
          cancel = document.querySelector('.contacts__cancel'),
          overlay = document.querySelector('.overlay');
    
    cancel.addEventListener('click', () => {
        modal.style.display = 'none';
        overlay.style.display = 'none';
        document.body.style.overflowY = 'auto';
        document.body.style.marginRight = '';
    });
};

export default modal;