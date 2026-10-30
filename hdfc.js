document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('myModal');
    const modalImg = document.getElementById('imghd3');
    const captionText = document.getElementById('caption');
    const closeBtn = document.querySelector('.close');
    const thumbnails = document.querySelectorAll('.thumbnail');
    
    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', function() {
            modal.style.display = "block";
            modalImg.src = this.dataset.large;
            captionText.innerHTML = this.alt;
        });
    });
    closeBtn.addEventListener('click', function() {
        modal.style.display = "none";
    });
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
    // 键盘ESC键关闭
    document.addEventListener('keydown', function(event) {
        if (event.key === "Escape") {
            modal.style.display = "none";
        }
    });
});