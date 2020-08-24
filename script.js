window.addEventListener('scroll', function textSlide() {

    const target = document.querySelectorAll('.image-parallax');

    let index = 0,
        length = target.length;
    for (index; index < length; index++) {
        let pos = window.pageYOffset * target[index].dataset.rate;

        if (target[index].dataset.direction === 'vertical') {
            target[index].style.transform = 'translate3d(0px,' + pos + 'px, 0px)';
        }
    }
    console.log(textSlide);
});

function loadProjects() {
    let showProjectsPage = document.querySelector('.projects')
    let curentViewposition = showProjectsPage.getBoundingClientRect().top;
    let deviceResolution = window.innerHeight;

    if (curentViewposition < deviceResolution) {
        showProjectsPage.classList.add('loadpage');
    }
}
window.addEventListener('scroll', loadProjects);
