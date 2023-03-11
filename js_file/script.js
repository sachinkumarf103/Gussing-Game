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
        let dis_nm = user_name[0];
        console.log(dis_nm);
        let dis_name_tm = setInterval(()=>{
            document.querySelector('#name-dis').innerHTML += dis_nm[a];
            a++
            if(a === dis_nm.length){
                clearInterval(dis_name_tm);
                a=0;
            }
        },500);
    }
});

// opt-cont : option container

// number button
let num_btn = document.querySelector('#number').addEventListener('click',()=>{
    console.log("You Press Number Button")
});

// word button
let wod_btn = document.querySelector('#word').addEventListener('click',()=>{
    console.log("You Press Word Button")
});


