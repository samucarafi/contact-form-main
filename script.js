const boxRadio = [...document.getElementsByClassName('boxRadio')]
const radio = [...document.getElementsByName('radio')]
const check=document.getElementById('check')

boxRadio.map((el,i)=>{
    el.addEventListener('click',()=>{
        radio[i].checked=true
        radio.map((el)=>{
            if(el.checked){
                el.parentElement.classList.add('selectRadio')
            }else{
                el.parentElement.classList.remove('selectRadio')
            }
        })
    })
})

