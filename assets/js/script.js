let scrollTopScreen
console.log(scrollTopScreen);
let main = document.getElementsByTagName('main')[0]
let mouse = document.getElementById('mouseover')
let divham = document.getElementById('hammenu')
let all = document.getElementsByTagName('a')
let a0 = document.getElementsByTagName('a')[0]
let a1 = document.getElementsByTagName('a')[1]
let div1 = document.getElementsByTagName('div')[1]
let button = document.getElementById('button')
let ulli = document.getElementById('ullii')
let li1 = document.getElementById('li1')
let li2 = document.getElementById('li2')
let li3 = document.getElementById('li3')
let li4 = document.getElementById('li4')
let figmage =document.querySelector('.figmage>img')
// const body = document.getElementsByTagName('body')[0]
const sec12 = document.getElementById('sec12')
const img = document.getElementsByClassName('figmage')[0]
const imgea = document.getElementsByClassName('backimagea')[0]
const img2=document.getElementsByClassName('img2')[0]
const img1 = document.getElementsByClassName('img1')[0]
const boxhead = document.getElementById('boxheadtop')
const imgg1 = document.getElementById('imgg1')
const imgg2 = document.getElementById('mg2')
const imgg3 = document.getElementById('mg1')
const mediaqurey = window.matchMedia('min-width:300px')
const sec13 = document.getElementById('sec13')
const figmage3 = document.getElementById('figmage3')
let spanha = document.querySelectorAll('#spanha>div span')
let spanha1 = document.querySelectorAll('#matn02>div>div span')
let sec03 = document.getElementsByClassName('sec03')[0]
let parag = document.getElementById('paragraph1')
let image02 = document.getElementById('image02')
let fontha = document.getElementById('fontha')
let spanha03 = document.querySelectorAll('#fontha #div05>div span')
let navbaz= document.getElementById('navboz')
let navkoch = document.getElementById('navkoch')
let inp = document.getElementById('texthere')
let light = document.getElementById('light')
let regular = document.getElementById('regular')
let medium = document.getElementById('medium')
let bold = document.getElementById('bold')
let pxsize = document.getElementById('pxsize')
let reset = document.getElementById('btn')
let cheragh = document.getElementById('cheragh')
let textleft = document.getElementById('textleft')
let textright = document.getElementById('textright')
let pencil = document.getElementById('pencil')
let sizeasl = document.getElementById('sizeasl')
let phap = document.querySelectorAll('.pha p')
let phap1 = document.querySelectorAll('.pha p:nth-of-type(2)')
let sefid = document.querySelectorAll('.sefid')
let stick = document.getElementById('stick')
let asli = document.getElementById('asli')
let aks1 = document.getElementById('aks1')
let aks2 =document.getElementById('aks2')
let aks3 = document.getElementById('aks3')
let aks4 = document.getElementById('aks4')
let backwhite = document.getElementById('backwhite')
let pos1 = document.getElementById('pos1')
let pos2 = document.getElementById('pos2')
let pos3 = document.getElementById('pos3')
let pos4 =document.getElementById('pos4')
let figma1 = document.getElementById('figma1')
let dotaaks = document.getElementById('dotaaks')
let divboz2 = document.getElementById('divboz2')
let figcaps = document.getElementById('figcaps')
let khorshid = document.getElementById('khorshid')
let figute = document.getElementById('figute')
let stalkh = document.getElementById('stalkh')
let stalkh1 = document.getElementById('stalkh1')
let dip1 = document.getElementById('dip1')
let dip2 = document.getElementById('dip2')
let dip3 = document.getElementById('dip3')
let divboz4 = document.querySelectorAll('.divboz4>div>div span')
let divboz44 =document.getElementById('divboz4')
let fig1 = document.getElementById('fig1')
let fig2 = document.getElementById('fig2')
let fig3 = document.getElementById('fig3')
let fig4 = document.getElementById('fig4')
let fig5 = document.getElementById('fig5')
let fig6 = document.getElementById('fig6')
let fig7 = document.getElementById('fig7')
let fig8 = document.getElementById('fig8')
let fig9 = document.getElementById('fig9')
let fig10 = document.getElementById('fig10')
let divsyah1 = document.getElementById('divsyah1')
let divhar = document.getElementById('divhar')
let divbozz = document.getElementById('divbozz')
let fixed = document.getElementById('fixedpos')
let j1 = document.getElementById('j1')
let u1 = document.getElementById('u1')
let l1 = document.getElementById('l1')
let y1 = document.getElementById('y1')
let o1 = document.getElementById('o1')
let yek = document.getElementById('yek')



let cwidth = navbaz.clientWidth
let uo = 1
reset.addEventListener('click',()=>{
    light.innerText = 'text is here '
    regular.innerText = 'text is here'
    medium.innerText = 'text is here'
    bold.innerText = 'text is here'

})
textright.addEventListener('click',()=>{
    phap1.forEach((val)=>{
        val.style.textAlign = 'center'
    })
})
textleft.addEventListener('click',()=>{
    phap1.forEach((val)=>{
        val.style.textAlign = 'start'
    })
})
cheragh.addEventListener('click',()=>{
    if(uo%2){
        fontha.style.backgroundColor = 'white'
        pencil.style.color = 'black'
        inp.style.color ='black'
        sizeasl.style.color='black'
        pxsize.style.color = 'black'
        navbaz.style.backgroundColor = 'black'
        navkoch.style.backgroundColor = 'white'
        navkoch.style.borderColor = 'black'
        textleft.style.color = 'black'
        textright.style.color = 'black'
        cheragh.style.color = 'black'
        reset.style.color='black'
        sefid.forEach((val)=>{
            val.style.backgroundColor = 'black'

        })
        phap.forEach((val)=>{
            val.style.color='black'
        })
        spanha03.forEach((val)=>{
            val.style.color='black'
        })

    }else{
        reset.style.color='rgba(255, 255, 255, 0.689)'
        textleft.style.color = 'rgba(255, 255, 255, 0.751)'
        textright.style.color = 'rgba(255, 255, 255, 0.751)'
        fontha.style.backgroundColor = 'black'
        pencil.style.color = 'white'
        inp.style.color ='white'
        sizeasl.style.color='white'
        pxsize.style.color = 'white'
        navbaz.style.backgroundColor = 'white'
        navkoch.style.backgroundColor = 'black'
        navkoch.style.borderColor = 'white'
        cheragh.style.color = 'rgba(255, 255, 255, 0.629)'
        sefid.forEach((val)=>{
            val.style.backgroundColor = 'rgba(255, 255, 255, 0.518)'
            
        })
        phap.forEach((val)=>{
            val.style.color='white'
        })
        spanha03.forEach((val)=>{
            val.style.color='white'
        })

    }
    uo++
})
navboz.addEventListener('mouseenter',()=>{
    mouse.style.transform='translate(-50%,-50%) scale(4)'
    mouse.style.transition='.4s'
})
navboz.addEventListener('mouseleave',()=>{
    mouse.style.transform='translate(-50%,-50%) scale(1)'
    mouse.style.transition='.2s linear'
})
reset.addEventListener('mouseenter',()=>{
    mouse.style.transform='translate(-50%,-50%) scale(4)'
    mouse.style.transition='.4s'
})
reset.addEventListener('mouseleave',()=>{
    mouse.style.transform='translate(-50%,-50%) scale(1)'
    mouse.style.transition='.2s linear'
})
cheragh.addEventListener('mouseenter',()=>{
    mouse.style.transform='translate(-50%,-50%) scale(4)'
    mouse.style.transition='.4s'
})
cheragh.addEventListener('mouseleave',()=>{
    mouse.style.transform='translate(-50%,-50%) scale(1)'
    mouse.style.transition='.2s linear'
})
textleft.addEventListener('mouseenter',()=>{
    mouse.style.transform='translate(-50%,-50%) scale(4)'
    mouse.style.transition='.4s'
})
textleft.addEventListener('mouseleave',()=>{
    mouse.style.transform='translate(-50%,-50%) scale(1)'
    mouse.style.transition='.2s linear'
})
textright.addEventListener('mouseenter',()=>{
    mouse.style.transform='translate(-50%,-50%) scale(4)'
    mouse.style.transition='.4s'
})
textright.addEventListener('mouseleave',()=>{
    mouse.style.transform='translate(-50%,-50%) scale(1)'
    mouse.style.transition='.2s linear'
})
inp.addEventListener('input',()=>{
    regular.innerText = inp.value
    light.innerText = inp.value
    medium.innerText = inp.value
    bold.innerText = inp.value
})
navboz.addEventListener('click',(e)=>{
    console.log(e);
    let fx = e.offsetX
    console.log(fx);
   let lefts= (100*fx)/cwidth
    navkoch.style.left =  lefts+'%'
    light.style.fontSize = fx/15+'rem'
    regular.style.fontSize = fx/15+'rem'
    medium.style.fontSize = fx/15+'rem'
    bold.style.fontSize = fx/15+'rem'
    pxsize.innerText = fx/2+'px'
   
})


// console.log(spanha1);
// console.log(spanha);

// console.log(img.childNodes);
// console.log(img);

let childs = document.querySelectorAll('.s1>span')
let xghabl = 0
let yghabl = 0

let scaley=1
let scalex = 1
let w=100
let bottom1 = 300
let scrollbootghabl = 0
let scrollboot = 0
let leftb=0
let popsaw=0
// var popa = window.matchMedia('(max-width: 576px)') 


   
    
// let scrollbootghabl =0

main.addEventListener('scroll',(e)=>{
    console.log(e);
    let fixebod = (main.scrollTop*100)/(main.scrollHeight-main.clientHeight)
    fixed.style.width = fixebod+'%'
    // console.log(main.scrollTop+600);
    let opp = main.scrollTop +450
    let cx = main.clientHeight
    // let scrollbootghabl = scrollboot
    let scrollboot = main.scrollTop+cx
    let temp = main.scrollTop
    yghabl = xghabl 
    xghabl = main.scrollTop
    imgg3.style.opacity = temp/1500
    imgg2.style.transform = 'rotate('+temp/2+'deg) scale('+(7-temp/400)+')'
    img.style.top = -400+temp/1.2+'px'
    imgg1.style.transform ='translate('+(300-temp/5)+'px , 0) scale('+(1-temp/2000)+','+(1-temp/2000)+')'
    // console.log(300-temp/5);
    // console.log(e);
    j1.style.translate = '0%'+ -temp/8+'%'
    u1.style.translate = '0%'+ -temp/10+'%'
    l1.style.translate = '0%'+ -temp/12+'%'
    y1.style.translate = '0%'+ -temp/14+'%'
    o1.style.translate = '0%'+ -temp/16+'%'
    yek.style.translate = '0%'+ -temp/18+'%'
    
    if(xghabl>yghabl){
        
        
        boxhead.classList.remove('boxheader2') 
        boxhead.classList.add('boxheader1')
        
    }
    if(yghabl>xghabl){
        boxhead.classList.add('boxheader2')
        boxhead.classList.remove('boxheader1')
        
        
    }
    if(main.scrollTop>=2498){
        imgg2.style.transform = 'rotate('+temp/2+'deg) scale(0.755)'
        
    }
    if(main.scrollTop >= 1499){
        imgg1.style.transform ='translate(0.2px, 0px) scale(0.2505, 0.2505)'
        img.style.top = -670+temp/1+'px'
        
    
    }
    if(scrollboot >= sec13.offsetTop) {
        img.style.top = (sec13.offsetTop-1320)+'px'
        
    }
    if(main.scrollTop>=3329){
        imgg2.style.transform = 'rotate(1664.5deg) scale(0.755)'
    }
    
    if((opp) >= (sec13.offsetTop)){
        spanha.forEach((val)=>{
            val.style.transform = 'translate(0px , 0px)'
        })
    }
    if((main.scrollTop+20)>= sec13.offsetTop){
        spanha1.forEach((val)=>{
            val.style.transform = 'translate(0px,0px)'
        })
    }
    // console.log(parag);
    let xop = -temp/25
    if((main.scrollTop+600) >= (sec03.offsetTop)){
        
        parag.style.left =main.clientWidth/1.8 -temp/4.5+'%'
        image02.style.top = 290-temp/20+'%'
    // console.log(20-temp/15);

    }
    if(main.scrollTop >= fontha.offsetTop){
        parag.style.left =-945.333+'%'
        image02.style.top = -65.8+'%'
    }
    if(main.scrollTop+200 >= fontha.offsetTop){
        spanha03.forEach((val)=>{
            val.style.transform = 'translate(0,0)'
        })
    }
    
    if(main.scrollTop>= stick.offsetTop){
        cpol = temp/100
        asli.style.scale =12 - temp/1000
        asli.style.transform = 'translate('+(99-cpol)+'% ,'+(114-cpol)+'%)'
        // console.log(asli.style.transform);

    }
    if(main.scrollTop>=10954){
        ccol1 = temp/7
        ccol2 = temp /9
        ccol3 = temp/11
        ccol4 = temp/12

        asli.style.scale = 1.046
        asli.style.transform = 'translate(-10.54%, 4.46%)'
        aks1.style.translate = '50% '+(ccol1-850)+'%'
        // console.log(1600+cpol);
        aks2.style.translate = '20%'+(ccol2 - 400)+'%'
        aks3.style.translate = '-180%'+(ccol3 +150)+'%'
        aks4.style.translate = '150%'+(ccol4 +200)+'%'
    }
    if(main.scrollTop >= (stick.offsetHeight)+(stick.offsetTop)){
        aks1.style.translate = '50% 1224.71%'
        aks2.style.translate = '20% 1192.67%'
        aks3.style.translate = '-180% 1416.7%'
        aks4.style.translate = '120% 1243.18%'
    }
    if((main.scrollTop+main.clientHeight)>=(backwhite.offsetTop)){

        pos1.style.left = -(temp/25 - main.clientHeight)+'%'
        pos2.style.left = (temp/25 - main.clientHeight)+'%'
        pos3.style.left = -(temp/25 - main.clientHeight)+'%'
        pos4.style.top = (10+main.clientHeight/2) - temp/50+'%' 
        
    }
    if((main.scrollTop+600)>= backwhite.offsetTop){
       opas= figma1.clientHeight
       if(window.innerWidth<=576){
           figma1.style.translate = '0% '+ -((temp/35)-390)+'%'

       }else{
        figma1.style.translate = '0% '+ -((temp/35)-480)+'%'
       }
        // console.log((temp/35));
    }
    if(main.scrollTop>=divboz2.offsetTop){
        figma1.style.translate = ' 0% -52.4571%'
        pos1.style.left = '-60%'
        pos2.style.left = '-60%'
        pos3.style.left = '-60%'
        pos4.style.top = '-20%' 
    }
    if((main.scrollTop+main.clientHeight)>= divboz2.offsetTop){
        if(window.innerWidth<=576){
            khorshid.style.top = (610 -temp/25)+'%'
            figcaps.style.left = -(temp/25-610)+'%'
            // console.log(temp/25);
        }else{
            khorshid.style.top = (745 -temp/25)+'%'
            figcaps.style.left = -(temp/25-719)+'%'
            // console.log(temp/25);
        }
        // console.log(figute.clientWidth);
        // console.log(temp/25);
    }
    if(main.scrollTop+680>=stalkh.offsetTop){
        soio = temp/53 -358
        soio1=temp/37 -513
        soio2 = temp/20 -950
        soyo = temp/53 -284
        soyo1 =temp/37 -405
        soyo2 = temp/20 -750
        if(window.innerWidth<=576){
            stalkh.style.backgroundPosition = '0% '+ (15+ soyo2)+'%'
        dip1.style.top = 50-soyo+'%'
        dip2.style.top = 70-soyo1+'%'
        dip3.style.top = 100-soyo2+'%'
        stalkh1.style.top = 90-soyo2+'%'
        // console.log(soyo2);
        }
        else{
            stalkh.style.backgroundPosition = '0% '+ (35+ soio2)+'%'
        dip1.style.top = 10-soio+'%'
        dip2.style.top = 30-soio1+'%'
        dip3.style.top = 10-soio2+'%'
        stalkh1.style.top = 60-soio2+'%'
        // console.log(soio2);
        }
        
        
    }
    if(main.scrollTop+400 >= divboz44.offsetTop){
        divboz4.forEach((val)=>{
            val.style.translate = '0% 0%'
        })
    }
    if(main.scrollTop>= divsyah1.offsetTop){
        stalkh.style.backgroundPosition = '0% 0%'
        dip1.style.top = '10%'
        dip2.style.top = '30%'
        dip3.style.top = '10%'
        stalkh1.style.top = '60%'
        khorshid.style.top = '25%'
            figcaps.style.left = '25%'
        
    }
    if(main.scrollTop+500>=fig1.offsetTop){
        fig1.style.opacity=1
        fig1.style.scale = 1
    }
    if(main.scrollTop+500>=fig2.offsetTop){
        fig2.style.opacity=1
        fig2.style.scale = 1
    }
    if(main.scrollTop+500>=fig3.offsetTop){
        fig3.style.opacity=1
        fig3.style.scale = 1
    }
    if(main.scrollTop+500>=fig4.offsetTop){
        fig4.style.opacity=1
        fig4.style.scale = 1
    }
    if(main.scrollTop+500>=fig5.offsetTop){
        fig5.style.opacity=1
        fig5.style.scale = 1
    }
    if(main.scrollTop+500>=fig6.offsetTop){
        fig6.style.opacity=1
        fig6.style.scale = 1
    }
    if(main.scrollTop+500>=fig7.offsetTop){
        fig7.style.opacity=1
        fig7.style.scale = 1
    }
    if(main.scrollTop+500>=fig8.offsetTop){
        fig8.style.opacity=1
        fig8.style.scale = 1
    }
    if(main.scrollTop+500>=fig9.offsetTop){
        fig9.style.opacity=1
        fig9.style.scale = 1
    }
    if(main.scrollTop+500>=fig10.offsetTop){
        fig10.style.opacity=1
        fig10.style.scale = 1
    }
    if((main.scrollTop+main.clientHeight)>= divboz44.offsetTop){
        cios = temp/80 // 251
    cios1 = temp/75 // 267 213
    cios2 = temp/70 // 287 228
    cios3 = temp/65 // 309 246
    cios4 = temp/60 // 334 266
    cios5 = temp/55 // 365 290
    cios6 = temp/50 // 402 319
    cios7 = temp/45 // 446 355
    cios8 = temp/40 // 502 400
    cios9 = temp/35 // 574 457
    cios10 = temp/30 // 670 533
    cios11 = temp/25 //804 644
    cios12 = temp/20 // 1004 805
    cios1201 = temp/18 //     
    cios1202 = temp/16 //      
    cios13 = temp/15 // 1341   1074
    cios1301 = temp/14 // 1436  1150
    cios1302 = temp/13 // 1546  1238
    cios1303 = temp/12 // 1675 1341
    cios1304 = temp/11 // 1828 1463
    cios14 = temp/10 //2010 1610
    cios1401= temp/9 // 2235 1789
    cios1402 = temp/8 //
    cios15 = temp/5 //
        if(window.innerWidth<=576){
            fig1.style.translate = '0%'+(400-cios8)+'%' 
            fig2.style.translate = '0%'+(840 - cios12)+'%'
            fig3.style.translate = '0%'+(319-cios6)+'%'
            fig4.style.translate = '0%'+ (533 - cios10)+'%'
            fig5.style.translate = '0%'+(1120-cios13 )+'%'
            fig6.style.translate = '0%'+(400-cios8)+'%'
            fig7.style.translate = '0%'+(1150 -cios13)+'%'
            fig8.style.translate = '0%'+(1600 - cios1304)+'%'
            fig9.style.translate = '0%'+(290-cios5)+'%'
            fig10.style.translate = '0%'+(450-cios8)+'%'
            // console.log(cios1401);
        }else{
        fig1.style.translate = '0%'+ (270 - cios)+'%'
        fig2.style.translate = '0%'+ (540-cios8)+'%'
        fig3.style.translate = '0%'+ (2070-cios14)+'%'
        fig4.style.translate = '0%'+(1740 -cios1303)+'%'
        fig5.style.translate = '0%'+(2100 - cios14)+'%'
        fig6.style.translate = '0%'+(502-cios8)+'%'
        fig7.style.translate = '0%'+(410-cios6)+'%'
        fig8.style.translate = '0%'+ (710-cios10)+'%'
        fig9.style.translate = '0%'+( 1900 - cios1304)+'%'
        fig10.style.translate = '0%'+(2360 - cios1401)+'%'
        // console.log(cios1401);

        }
        
    }
    if(main.scrollTop+400>=divbozz.offsetTop){
        if(window.innerWidth<=576){
            divhar.style.translate= (285-temp/70)+'% 0%'
        }else{
            
            divhar.style.translate= (130-temp/180)+'% 0%'
            console.log(temp/180);
        }
    }
    
    // if(main.scrollTop+400>= (stick.offsetHeight)+(stick.offsetTop)){
    //     aks1.style.translate = '50% 1218.67%'
    // }
    // console.log(stick.offsetHeight);
    // console.log(stick.offsetTop);
    // console.log();
    // if(sec03.offsetTop>(sec03.offsetTop+700))
    // console.log(scrollboot);
    // span03.style.transform = 'translate(0,0)'
    // w++
    // console.log(main.scrollHeight);
    //    main.scrollTop = main.scrollTop 
    // imgg2.style.top = (sec13.offsetTop-3560)+'px'
    //    console.log(temp);
    // console.log(main.scrollTop);
    // console.log(temp);
    // imgea.style.opacity=temp/1000
    // if(temp>0){
    //     // imgg1.parentElement.style.top = 25+temp+'px'
    // }
    // console.log(e);
    // img.style.scale = (scalex , scaley)
    // console.log(imgg1.style);
    
//     if(main.scrollTop>=2331){
//         // imgg2.style.transform ='rotate('+temp/2+'deg) scale(1.1725)'
        
//    }
    // console.log(imgg2.style);
    // console.log(5-temp/450);
    // console.log(imgg2.style.transform);
    // if(main.scrollTop>=1832){
    //     // imgg2.style.transform = 'translate(-50%, -50%) scale(0.893333) rotate('+temp/2+'deg)'
    //     // imgg3.style.position = 'sticky'
    //     // img.style.position='sticky'
    // }
    // if(scrollboot >= sec13.offsetTop){
        
    //     bottom1 = bottom1 + 15
    //     figmage3.style.bottom = bottom1+'px'
    // }
    
    // img.style.transform = 'translate('+350 (-temp)+'px,'+ (-temp)+'px)'
    // img.style.left = 350+ -temp/4+'px'
    // img.childNodes[1].style.scale=1.7-(0.+temp/600)
    // if(img.childNodes[1].style.scale<=.4){
    //     img.childNodes[1].style.scale=.4
    // }
    
})
backwhite.addEventListener('mouseenter',(e)=>{
    console.log(e);
})
window.addEventListener('scroll',()=>{
    
})

// console.log(st);
divham.addEventListener('click',()=>{
    ulli.style.visibility = 'visible'
    ulli.style.opacity=1
    // ulli.style.transition = 'all 1s'
    
})

button.addEventListener('click',()=>{
    // ulli.style.display = 'none'
    ulli.style.opacity=0
    ulli.style.visibility = 'hidden'
    
})
button.addEventListener('mouseenter',()=>{
    mouse.style.transform = 'translate(-50%, -50%) scale(4)';
        mouse.style.transition = '0.2s';
})
button.addEventListener('mouseleave',()=>{
    mouse.style.transform='translate(-50%,-50%) scale(1)'
    mouse.style.transition='.2s linear'
})
let array=Array.from(all)

array.forEach((val) => {
    val.addEventListener('mouseenter', () => {
    
        mouse.style.transform = 'translate(-50%, -50%) scale(4)';
        mouse.style.transition = '0.2s';
    });
    val.addEventListener('mouseleave',()=>{
        mouse.style.transform='translate(-50%,-50%) scale(1)'
        mouse.style.transition='.2s linear'
    })
});
div1.addEventListener('mouseenter',()=>{
    mouse.style.transform='translate(-50%,-50%) scale(4)'
    mouse.style.transition='.4s'
    
})
div1.addEventListener('mouseleave',()=>{
    mouse.style.transform='translate(-50%,-50%) scale(1)'
        mouse.style.transition='.2s linear'

})
window.addEventListener('mousemove',(e)=>{
    // console.log(e);
    mouse.style.left=e.clientX+'px'
    mouse.style.top=e.clientY+'px'
    mouse.style.transition='.2s linear'

})

a1.addEventListener('mouseenter',()=>{
   
    mouse.style.transform='translate(-50%,-50%) scale(4)'
    mouse.style.transition='.4s'
    // mouse.style.backgroundColor='rgba(32, 32, 149, 0.561)'
})
    a1.addEventListener('mouseleave',()=>{
        mouse.style.transform='translate(-50%,-50%) scale(1)'
        mouse.style.transition='.2s linear'
        // mouse.style.backgroundColor='rgba(255, 166, 0, 0.7)'
        // mouse.style.left=e.clientX+'px'
        // mouse.style.top=e.clientY+'px'
    })
    a0.addEventListener('mouseenter',()=>{
   
        mouse.style.transform='translate(-50%,-50%) scale(4)'
        mouse.style.transition='.4s'
        // mouse.style.backgroundColor='rgba(32, 32, 149, 0.561)'
    })
        a0.addEventListener('mouseleave',()=>{
            mouse.style.transform='translate(-50%,-50%) scale(1)'
            mouse.style.transition='.2s linear'
            // mouse.style.backgroundColor='rgba(255, 166, 0, 0.7)'
            // mouse.style.left=e.clientX+'px'
            // mouse.style.top=e.clientY+'px'
        })

        
function scrolltopa(){
    window.scrollTo({
        top: 5000,
        behavior: "smooth",
        
    })
}
scrolltopa()
document.addEventListener("DOMContentLoaded", scrolltopa);