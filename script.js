const items = document.querySelectorAll ('.img-item');
//console.log(item);

//for文
for(let i = 0; i < items.length; i++){

    const keyframes = {
        opacity: [0, 1],
        translate: ['0 50px', 0],
        filter: ['blur(10px)', 'blur(0)'],
    };

    const options = {
        duration: 600,
        delay: i * 150,
        fill: 'forwards',
    };

    items[i].animate(keyframes, options);
}