window.addEventListener("load", setup);
let nindo_span;
let nindo = [`<span class="nindo-en ">LEARNING</span><span class="nindo-cn ">学习方法</span>`, `<span class="nindo-cn ">创建</span><span class="nindo-en ">CREATING</span>`, `<span class="nindo-cn ">解决</span><span class="nindo-en ">SOLVING</span>`];
let i = 1;

function setup(){
    nindo_span = document.querySelector("#nindo")
    nindo_span.innerHTML = nindo[0]
    setInterval(draw, 10000);
}

function draw(){
    console.log(i)
    if (i>=3) i = 0
    nindo_span.innerHTML = nindo[i]
    i+=1;
}

