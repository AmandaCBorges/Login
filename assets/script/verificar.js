
    const btn = document.querySelector('#button');
    const senhaI = document.querySelector("#senha")
    const olho = document.querySelector("#olhoAberto")


    
 olho.addEventListener('click', ()=>{
    let senhaB = document.querySelector("#senha")
     
    if(senhaB.getAttribute('type') == 'password'){
         senhaB.setAttribute('type', 'text')
    }else{
         senhaB.setAttribute('type', 'password')
    }
 
  })
     

    btn.addEventListener('click',function(e){

        e.preventDefault();
        const login = document.querySelector('#email').value;
        const senha = document.querySelector('#senha').value;

        if(login == "admin@admin.com" && senha == "admin"){   
           window.location='./assets/pages/home.html';
        
        }
            
         else if(login == "" && senha == ""){
           Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Campo vazio!'    
          })
            
        
        }
         else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Usuário ou senha incorretos!'
              })
        }
    })





