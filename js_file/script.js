let user_name = [];
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
let my_name = " Sachin Mishra   ";
let user_name_inp = document.querySelector('#user-name-inp');
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
       user_name.push(user_name_inp.value);
       console.log(user_name);
    }
});

// opt-cont : option container
let num_btn = document.querySelector('#number').addEventListener('click',()=>{
    console.log("You Press Number Button")
});

let wod_btn = document.querySelector('#word').addEventListener('click',()=>{
    console.log("You Press Word Button")
});


