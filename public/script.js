const ham=document.getElementsByClassName('ham')[0];
const nav=document.getElementsByClassName('mobile-nav')[0];
const close=document.getElementsByClassName('close')[0];
const animateObjects=document.querySelectorAll('[data-animate]');
console.log(animateObjects);
const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
console.log(vw);

const observer= new IntersectionObserver((entries,observer)=>{
    entries.forEach(entry=>{
        console.log(entry);
        if (entry.isIntersecting && entry.target.getAttribute('data-media-animate')){
            const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
            console.log(entry.target.getAttribute('data-media-animate'));
            const dataMediaAnimate=entry.target.getAttribute('data-media-animate')
            const dataMediaAnimateWidth=entry.target.getAttribute('data-media-animate-width')
            ;
            if (vw<=parseInt(dataMediaAnimateWidth)){
                console.log('hey');
                entry.target.classList.add(dataMediaAnimate);
                observer.unobserve(entry.target)
            }
            else{
                entry.target.classList.remove(dataMediaAnimate);
                entry.target.classList.add(entry.target.getAttribute('data-animate'));
                observer.unobserve(entry.target)
            }
            }
        else if (entry.isIntersecting){
            entry.target.classList.add(entry.target.getAttribute('data-animate'));
            if(entry.target.getAttribute('data-delay')){
                entry.target.classList.add(entry.target.getAttribute('data-delay'));
            }
            observer.unobserve(entry.target);}
        })
},{
    rootMargin: '0px 0px 50px 0px'
})

for (let i = 0; i < animateObjects.length; i++) {
    const object = animateObjects[i];
    
    observer.observe(object);
}

