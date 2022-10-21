(function () {
    index = 0

    fetch('https://api.github.com/repos/Pibupedia/pibupedia.github.io/commits')
    .then((response) => response.json())
    .then((data) => {
        data.forEach((commit) => {
            if (index>=16) { return }
            var li = document.createElement('li');
            li.innerHTML = `${commit.commit.message} - ${new Date(commit.commit.author.date).toLocaleDateString()}`;
            document.getElementById('recent__commits').appendChild(li);
            index++;
        })
        var a = document.createElement('a');
        a.href = 'https://github.com/Pibupedia/pibupedia.kitecreature.net/commits/main';
        a.textContent = 'View All Commits';
        document.getElementById('recent__commits').appendChild(a);
    });
})();
