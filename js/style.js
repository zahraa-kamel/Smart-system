var UserNameInput =document.getElementById('NameInput')
var UserEmailInput =document.getElementById('EmailInput')
var UserPasswordInput =document.getElementById('PasswordInput')

var InAnchor=document.querySelector('.InAnchor')
var UpAnchor=document.querySelector('.UpAnchor')


var BtnSignIn =document.querySelector('.signIn')
var BtnSignUp =document.querySelector('.signUp')
var Move =document.querySelector('.Move')

var Accept =document.querySelector('.accept')
var UserList;






if(localStorage.getItem('UsersList')!= null){
    UserList = JSON.parse(localStorage.getItem('UsersList'))
}
else{
  
   UserList =[]
}







// SignUp Click

UpAnchor.addEventListener('click',function(e){

UserNameInput.classList.remove('d-none');
BtnSignIn.classList.add('d-none')
BtnSignUp.classList.remove('d-none')

Move.classList.add('d-none')
Move.nextElementSibling.classList.remove('d-none')


})


InAnchor.addEventListener('click',function(e){
    
UserNameInput.classList.add('d-none');
BtnSignUp.classList.add('d-none')
BtnSignIn.classList.remove('d-none')
Move.classList.remove('d-none')
Move.nextElementSibling.classList.add('d-none')
})



// signUp Button 

BtnSignUp.addEventListener('click',function(e){

    AddUser();

    // clearUser();
})




// login Button 

BtnSignIn.addEventListener('click', function(e){

    // login function
for( var i=0; i<UserEmailInput.length ;i++){


    if(UserEmailInput.value==UserList[i].email
        &&UserPasswordInput.value==UserList[i].password)
    {
        document.querySelector('.welcome').classList.remove('d-none')
    document.querySelector('.welcome').innerHTML=`<h1>Welcome</h1> ${UserList[i].name}`
    }
    else{
        document.querySelector('.exist').innerHTML=`<p class=text-danger d-none exist m-3">incorrect email or password</p> `
    }
    }
})



// Add function 

function AddUser(){

// chek is Empty 
    if(UserEmailInput.value ==""
    || UserNameInput.value ==""
    || UserPasswordInput ==""){
        
Accept.nextElementSibling.classList.remove('d-none');
    }


  // ready to signup
var User ={
    name : UserNameInput.value,
    email : UserEmailInput.value,
    password: UserPasswordInput.value,

}

if(Isexist()==false){
    document.querySelector('exist').classList.remove('d-none')
}

  

else{

            UserList.push(User);
            localStorage.setItem('UsersList',JSON.stringify(UserList))

        Accept.classList.remove('d-none');
        Accept.nextElementSibling.classList.add('d-none');
    }
}

// chek is exist 
function Isexist(){

    for(var i=0 ; i<UserList.length ;i++){


        if(JSON.parse(UserList)[i].email.tolowercase()==UserEmailInput.value.tolowercase()){

         // 
          return false;
   
        }
        else{
            return true;
        }
    }
  }


// Clear function 
function clearUser(){
    UserEmailInput.value=null;
 UserNameInput.value=null;
 UserPasswordInput.value=null;


}

