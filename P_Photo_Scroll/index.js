const scrollerBox = document.querySelector('.scrollerbox');
const scrollerImg = document.querySelector('.scrollerimg');
const scrollBtn = document.getElementById('scrollDownBtn');

let scrollY = 0;

// Mouse wheel scroll
scrollerBox.addEventListener('wheel', (e) => {
    e.preventDefault();
    scrollY += e.deltaY;
    
    // Clamp scroll so image stays inside box
    const maxScroll = scrollerImg.height - scrollerBox.clientHeight;
    if (scrollY < 0) scrollY = 0;
    if (scrollY > maxScroll) scrollY = maxScroll;
    
    scrollerImg.style.transform = `translateY(-${scrollY}px)`;
});

// Button scroll to bottom
scrollBtn.addEventListener('click', () => {
    scrollY = scrollerImg.height - scrollerBox.clientHeight;
    scrollerImg.style.transform = `translateY(-${scrollY}px)`;
});