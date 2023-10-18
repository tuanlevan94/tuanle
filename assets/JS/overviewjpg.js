
// $(document).ready(function(){
//     //tìm tất cả các li có sub-menu và thêm vào nó class has-child (nếu nó có sub-menu)
//     $('.sub-menu').par
// });

document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}

let sections = document.querySelectorAll('section');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 800;
        let height = sec.offsetHeight + 600;

        if(top >= offset && top < offset + height){
            sec.classList.add('show-animate');
        } //if you want to repeating animation on scroll, use this
        else{
            sec.classList.remove('show-animate');
        }
    })
}