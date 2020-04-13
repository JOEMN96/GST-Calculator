const btns = document.querySelectorAll('.btn');
const screen = document.querySelector('.screen');
const clearbtn = document.querySelector('.btn-clear');
const equalbtn = document.querySelector('.btn-equal');

const gst5 = document.querySelector('.gst5')       // Selecting GST buttons From DOM
const gst12 = document.querySelector('.gst12')
const gst18 = document.querySelector('.gst18')
const gst28 = document.querySelector('.gst28')

console.log(btns);

for (let i=0; i<btns.length; i++) {
     btns[i].addEventListener('click',function () {
         let number = btns[i].getAttribute ('data-num');
         screen.value += number;
         
     })

     screen.animate([{opacity:'0.1'},{opacity:'1.0'}],{duration:500},{fill:'forewards'});   // Animate 
}

equalbtn.addEventListener('click',function ()  {
    if(screen.value === '') {

        alert('Enter value');

    } else {
    let val = eval(screen.value);
    screen.value=val;
    }

    screen.animate([{opacity:'0.1'},{opacity:'1.0'}],{duration:500},{fill:'forewards'});   // Animate 

} )

// clear btn

clearbtn.addEventListener('click',function () {

    screen.value = "";

    screen.animate([{opacity:'0.1'},{opacity:'1.0'}],{duration:500},{fill:'forewards'});  // Animate 

} )

// calculation for different GST percentages


gst5.addEventListener('click',function () {

    let value = screen.value;
    
    let finalval = screen.value * 5 / 100 ;

    screen.value = finalval;

    screen.animate([{opacity:'0.1'},{opacity:'1.0'}],{duration:500},{fill:'forewards'});   // Animate 

} )


gst12.addEventListener('click',function () {

    let value = screen.value;
    
    let finalval = screen.value * 12 / 100 ;

    screen.value = finalval;

    screen.animate([{opacity:'0.1'},{opacity:'1.0'}],{duration:500},{fill:'forewards'});   // Animate 

} )

gst18.addEventListener('click',function () {

    let value = screen.value;
    
    let finalval = screen.value * 18 / 100 ;

    screen.value = finalval;

    screen.animate([{opacity:'0.1'},{opacity:'1.0'}],{duration:500},{fill:'forewards'});   // Animate 

} )

gst28.addEventListener('click',function () {

    let value = screen.value;
    
    let finalval = screen.value * 28 / 100 ;

    screen.value = finalval;

    screen.animate([{opacity:'0.1'},{opacity:'1.0'}],{duration:500},{fill:'forewards'});   // Animate 

} )