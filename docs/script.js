document.getElementById('meditation-box').addEventListener('click', function() {
    document.getElementById('meditation-videos').style.display = 'block';
    document.getElementById('mindfulness-videos').style.display = 'none';
});

document.getElementById('mindfulness-box').addEventListener('click', function() {
    document.getElementById('mindfulness-videos').style.display = 'block';
    document.getElementById('meditation-videos').style.display = 'none';
});
