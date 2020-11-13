//Отменяет все действие со ссылками на странице
function allLinks(link) {
    let links = document.querySelectorAll(link);
    let linksArray = [].slice.call(links);
    linksArray.forEach(link => link.addEventListener('click', (e) => {
        e.preventDefault();
    }))
}

allLinks('a');