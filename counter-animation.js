function counter( id, start, end, duration) {
  let obj = document.getElementById(id),
   current = start,
   range = end - start,
   increment = end > start ? 1 : -1,
   step = Math.abs(Math.floor(duration / range)),
  
   timer = setInterval(() => {
    current += increment;
    obj.textContent = current;

    if (current == end) {
      obj.textContent = current + '+';
     clearInterval(timer);
    }

   }, step);
 }

// counter("cus_counter", 0, 1000, 2000);
let viewportHeight = window.innerHeight;
let itemfromTop = document.getElementById('cus_counter').offsetParent.offsetTop;
let itemHeight = document.getElementById('cus_counter').offsetParent.offsetHeight;
let counterDone = false;

function counterOnScroll() {
    let scrollY = window.scrollY;
    if( scrollY + viewportHeight > itemfromTop + itemHeight ){
        if(!counterDone){
            counterDone = true;
            counter("cus_counter", 0, 1000, 2000);
        }
    }
}
document.addEventListener('scroll', () => { counterOnScroll() });