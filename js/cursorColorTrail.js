
(() => {
    const root = document.querySelector('.green-color-trail-cursor');
    if (!root) return;

    const layer = root.querySelector('.trail-layer');
    let last = 0;
    const throttleMs = 16;
    const maxDots = 150;

    function addDot(x, y) {
        const dot = document.createElement('span');
        dot.className = 'trail-dot';
        dot.style.left = x + 'px';
        dot.style.top = y + 'px';
        layer.appendChild(dot);

        dot.addEventListener('animationend', () => dot.remove());

        if (layer.children.length > maxDots) {
            layer.firstElementChild?.remove();
        }
    }

    root.addEventListener('mousemove', (e) => {
        const now = performance.now();
        if (now - last < throttleMs) return;
        last = now;

        const rect = root.getBoundingClientRect();
        addDot(e.clientX - rect.left, e.clientY - rect.top);
    });

    root.addEventListener('mouseleave', () => {
        layer.innerHTML = '';
    });
})();

