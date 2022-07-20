// Get elemnts 
let timing_app = document.getElementById('timing_app');
let alert_box = document.querySelector('.alert_box');
let counter = document.querySelector('.counter');

timing_app.onsubmit=(e)=>{

    e.preventDefault();

    // Get Val 
    let frm_data = new FormData(e.target);
    let {dat, tim} = Object.fromEntries(frm_data.entries());

    // Validation 
    if(!dat || !tim){

        alert_box.innerHTML = alertFun('All Fildes Are Required');

    }

    

   let count =  setInterval(() => {
        
            // Time Cal 
        let start_time = Date.now();
        let end_time = new Date(dat +' '+ tim);
        let order_time = Math.floor(Math.abs(end_time.getTime() - start_time));


        // Get Total Time Val 
        let total_sec = Math.floor(order_time / 1000);
        let total_min = Math.floor(total_sec / 60);
        let total_hours = Math.floor(total_min / 60);
        let total_day = Math.floor(total_hours / 24);


        // Get Real Time 
        let hour = total_hours - (total_day * 24);
        let minute = total_min - (total_day * 24 * 60) - (hour * 60);
        let sec = total_sec - (total_day * 24 * 60  * 60) - (hour * 60 * 60) - (minute * 60);

        if(sec == 0){
            clearInterval(count)
        }

        counter.innerHTML = `
        <h4>${total_day} Days : ${hour} Hours : ${minute} Minutes : ${sec} Sec</h4>
        `

        }, 1000);
    

}