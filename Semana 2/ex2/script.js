setTimeout(() => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    alert(`${hours}:${minutes}:${seconds}`);
    
    setTimeout(arguments.callee, 1000);
}, 1000);