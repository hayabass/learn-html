const btn=document.querySelector('#btn');
const pass=document.querySelector('#pass');
btn.addEventListener('click',function()  {

    if(pass.type=='text'){
        pass.type='password';
        btn.innerHTML= <i class="fa fa-eye-slash" aria-hidden="true"></i>;
      
    }
    else
    {pass.type='text';
    btn.innerHTML=  <i class="fa fa-eye" aria-hidden="true"></i>
    }
}
