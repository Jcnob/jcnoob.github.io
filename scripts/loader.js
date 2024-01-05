
//monke shit loader v1.1
let cards = document.querySelectorAll('.card');
let observ = new IntersectionObserver(entries => {
    entries.forEach(en =>{
        en.target.classList.toggle("showv1",en.isIntersecting)
    })
})

cards.forEach(card => {
    observ.observe(card)
},{
    threshold:1
}
)
//monke v1.2 CUSTOM EDITION NAME THE SECTION OR DIV LIKE SHOWV2
let oberv = new IntersectionObserver((entires) => {
    entires.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('showv2');
        }else{
            entry.target.classList.remove('showv2')
        }
    })
})
let hidden = document.querySelectorAll('.hiddenv2')
hidden.forEach((el) =>  oberv.observe(el))



console.log(`%c //Monke shit loader v1.1
coded: monke kyle (kyle make this nice console log yeh) and jac 
design: jacblakman
http://go.jcmainclr.xyz/ 
http://go.jcmainclr.xyz/kyle
`, ' color: green')