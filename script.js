// script.js

document.addEventListener('DOMContentLoaded', function() {
    const buttonContainer = document.getElementById('button-container');
    const toastContainer = document.getElementById('toast-container');

    buttonContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('btn')) {
            const type = event.target.classList.contains('blue') ? 'help' :
                         event.target.classList.contains('green') ? 'success' :
                         event.target.classList.contains('orange') ? 'warning' :
                         'error';

            createToast(type);
        }
    });

    function createToast(type) {
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.innerHTML = `
            <div class="icon">${getIcon(type)}</div>
            <div class="content">
                <div class="title">${getTitle(type)}</div>
                <div class="message">${getMessage(type)}</div>
            </div>
            <div class="close-btn">&times;</div>
        `;
        toastContainer.appendChild(toast);

        toast.querySelector('.close-btn').addEventListener('click', function() {
            toast.remove();
        });

        setTimeout(function() {
            toast.remove();
        }, 5000); // 5 seconds
    }

    function getIcon(type) {
        switch(type) {
            case 'help': return '?';
            case 'success': return '✔️';
            case 'warning': return '⚠️';
            case 'error': return '❌';
        }
    }

    function getTitle(type) {
        switch(type) {
            case 'help': return 'Help!';
            case 'success': return 'Success!';
            case 'warning': return 'Warning!';
            case 'error': return 'Error!';
        }
    }

    function getMessage(type) {
        switch(type) {
            case 'help': return 'Ada yang bisa saya bantu?';
            case 'success': return 'Pesan mu Berhasil';
            case 'warning': return 'sepertinya ada yang salah deh';
            case 'error': return 'ini eror, tolong ulangi lagi';
        }
    }
});
