let user_name = [];
let rand_num;
// Terms and Condtions
let read_anc = document.querySelector('#read');
read_anc.addEventListener('click', () =>{
    document.querySelector('.welcome-page').classList.add('active');
    document.querySelector('.terms-condi').classList.add('active');
});

let term_btn = document.querySelector('.term-btn').addEventListener('click', () =>{
    document.querySelector('.terms-condi').classList.remove('active');
    document.querySelector('.welcome-page').classList.remove('active');
});

//Check box
let check_box = document.querySelector('#term_cond_chk');
check_box.addEventListener('click', () =>{
    if (check_box.checked == true){
        document.querySelector('#conti-btn').removeAttribute('disabled','active');
    }
    else{
        document.querySelector('#conti-btn').setAttribute('disabled','');
    }
});

// input box
let my_name = " Sachin Mishra  ";
let user_name_inp = document.querySelector('#user-name-inp');
user_name_inp.placeholder = "Enter Your Name";
//typing placeholder
let j = 0;
let mytm = setInterval(()=>{
    user_name_inp.placeholder = "";
    let i = 0;
    let time = setInterval(()=>{
        user_name_inp.placeholder += my_name[i]
        i++;
        if(i == my_name.length){
            clearInterval(time);
            user_name_inp.placeholder = "Enter Your Name";
        }
    },200);
    
},7000);


// Continue Button
let cond_btn = document.querySelector('#conti-btn').addEventListener('click',()=>{    
    if(user_name_inp.value.length <= 2){
        document.querySelector('#erro').innerHTML = "Please! Fill Correct Name";
    }
    else{
       document.querySelector('.welcome-page').classList.add('active');
       document.querySelector('.opt-cont').classList.add('active');
       user_name.push(user_name_inp.value); //push input value in user_name array

        // 
        let a = 0;
        let dis_nm = user_name[0]+" ";
        let dis_name_tm = setInterval(()=>{
            document.querySelector('#name-dis').innerHTML += dis_nm[a];
            a++
            if(a === dis_nm.length){
                a=0;
                document.querySelector('#name-dis').innerHTML = "";
            }
        },500);
    }
});

// opt-cont : option container

// number button
let num_btn = document.querySelector('#number');
num_btn.addEventListener('click',()=>{
    document.querySelector('.opt-cont').classList.remove('active');
    document.querySelector('.div-start-cont').classList.add('active');
});

// word button
let wod_btn = document.querySelector('#word').addEventListener('click',()=>{
    console.log("You Press Word Button")
});

// Starting Container
let minute = 1;
let inc_btn = document.querySelector('#inc');
let dec_btn = document.querySelector('#dec');

inc_btn.addEventListener('click', () =>{
    if(minute >= 1 && minute < 5){
        minute++;
        document.querySelector('#root').innerHTML = minute;
        dec_btn.removeAttribute('disabled','');
    }
});

dec_btn.addEventListener('click', ()=>{
   if(minute > 1){
    minute--;
    document.querySelector('#root').innerHTML = minute;
   }
});

let min = 0;
let max = 0;
let gnb_error = document.querySelector('#gnb-error');
let min_selec = document.querySelector('#min');
min_selec.addEventListener('change',()=>{
    let min_val = parseInt(min_selec.value);
    if(min_val >= 1){
        min = min_val;
        document.querySelector('#max').removeAttribute('disabled','');
        document.querySelector('#max').removeAttribute('title','');
        let max_selec = document.querySelector('#max');
        max_selec.addEventListener('change',()=>{
            let max_val = parseInt(max_selec.value);
            max = max_val
            

            if(min > max || min == max){
                gnb_error.innerHTML = 'This Combination is Not Valid.';
                gnb_error.style.color = "red";
            }
            else{
                gnb_error.innerHTML = 'This is Valid.';
                gnb_error.style.color = "green";
            }
        });

        if(min > max || min == max){
            gnb_error.innerHTML = 'This Combination is Not Valid.';
            gnb_error.style.color = "red";
        }
        else{
            gnb_error.innerHTML = 'This is Valid.';
            gnb_error.style.color = "green";
        }
    }
    
});

// start button
let start_btn = document.querySelector('#start-btn').addEventListener('click',()=>{
    // console.log(`Min : ${min}, Max : ${max}`);
    if(min===0 && max===0 || min > max || min === max){
        document.querySelector('#gnb-error').innerHTML = 'Please Select Valid Combination.';
    }
    else{
        document.querySelector('.div-start-cont').classList.remove('active');
        document.querySelector('.count-cont').classList.add('active');
        let time_val = [1,2,3,"Start"];
        let i = 0;
        let strt = setInterval(()=>{
            document.querySelector('.count-cont #count').innerHTML = time_val[i];
            i++;
            if(i === 4){
                clearInterval(strt);
                setTimeout(()=>{
                    document.querySelector('.count-cont').classList.remove('active');
                    document.querySelector('.num-cont').classList.add('active');
                    
                    // Counter
                    let user_min = minute;
                    let user_sec = 59;
                    let user_min_sec = minute*60;
                    document.querySelector('.timer #min').innerHTML = `0${minute}`; // Set minute value on min id

                    let counter_number_gusses = setInterval(()=>{
                        if(user_min_sec===0){
                            clearInterval(counter_number_gusses);
                            console.log("Time Out");
                        }
                        else{
                            if(user_sec <= 59){
                                if(user_sec == -1){
                                    user_sec = 59;
                                    document.querySelector('.timer #sec').innerHTML = `${user_sec}`;
                                    if(user_sec==59){
                                        user_min--;
                                        document.querySelector('.timer #min').innerHTML = `0${user_min}`;  
                                    }
                                }
                                else{
                                    if(user_sec<10){
                                        document.querySelector('.timer #sec').innerHTML = `0${user_sec}`;
                                    }
                                    else{
                                        document.querySelector('.timer #sec').innerHTML = `${user_sec}`;
                                        if(user_sec==59){
                                            user_min--;
                                            document.querySelector('.timer #min').innerHTML = `0${user_min}`;  
                                        }
                                    }  
                                }
                                user_sec--;
                            }

                            // number gussing program

                        }
                        user_min_sec--;
                    },1000);
                },1500)
                
            }
        },1000);
    }
});


// Number Container 
