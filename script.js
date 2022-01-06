console.log('jquerry')
// 1 . how to use it 

// $(document).ready(function(){
//     $('button').click(function(){
//         alert('My first jquerry code.')
//     })
// });

// 2 . selector events and effeccts

// $(document).ready(function(){
//     $('button').click(function(){
//         $('.div').toggle(250);
//     })
// })

// -------- using multiple classes 
// do mix of ids , classes and elements 

// $(document).ready(function(){
//     $('button').dblclick(function(){
//         $('.div , .intro , button').toggle(250);
//     })
// })


// $(document).ready(function(){
//     $('button').mouseleave(function(){
//         $('.div').toggle(250)
//     })
// })


// give class .. addClass , toggleClass and removeClass

// $(document).ready(function(){
//     $('button').click(function(){
//        $('button').addClass("Hello")
//     })
// });

// using togglate 

// $(document).ready(function(){
//     $('button').click(function(){
//        $('button').toggleClass('hello')
//     })
// });



// keyboardEvetns --> keypress , keyup , keydown  

// $(document).ready(function(){
//     $('input').keyup(function(){
//         alert('key is pressed')
//     })
// })


// form events  --> 
// focus , blur , submit 

// $(document).ready(function(){
//     $('span').hide()
//     $('input').focus(function(){
//         $('span:first').hide()
//         $('span:last').show().fadeOut(3000)
//     })
//     $('input').blur(function(){
//         $('span:last').hide()
//         $('span:first').show().fadeOut(3000)
//     })
// })


// using multiple events on html 


// $(document).ready(function(){
//     $('p').on({
//         mouseenter: function(){
//             $(this).css('backgroundColor' , 'red')
//         },

//         mouseleave : function(){
//             $(this).css('backgroundColor' , 'yellow')
//         },
//         click : function(){
//             alert('this is the way handle multiple events.')
//         }
//     })
// })


// append and prepend 

// $(document).ready(function(){
//     $('button').click(function(){
//         // $('ul').append('<li> hayder </li>')
//         $('ul').prepend('<li> jutt </li>')
//     })
// })



// remove and empty 


// $(document).ready(function(){
//     $('button').click(function(){
//         // $('ul').remove()
//         $('ul').empty()
//     })
// })



// traversing 

// parent  select the parent element


// $(document).ready(function(){
//     $('.name').parent().css({
//         'color' : 'blue',
//         'backgroundColor' : 'red'
//     })
// })


// parents select all the parent element of html element 

// $(document).ready(function(){
//     $('.name').parents().each(function(parent){
//         $(this).addClass('hello')
//         console.log($(this))
        
//     })
// }) 


// parentUntil  menas the range to slect the parent elemtn 

// $(document).ready(function(){
//     $('.name').parentsUntil('.parent').each(function(parent){
//         $(this).addClass('hello')
//         // console.log(this)
//     })
// })



let myArr = [' Hayder',' brad',' aly',' harry',' jutt' , ' coding']

// $.each(myArr, function(idx){
//     console.log(myArr[idx])
// })


// $(document).ready(function(){
//    const allLi =  $('ul li').toArray()
//    $.each(allLi , function(idx , val){
//             // console.log(idx , val)
//            allLi[idx].append(myArr[idx])
//    })
// })



// append child in html element 


$(document).ready(function(){
    $.each(myArr , function(idx , val){
        $('.studentList').append(`
            <li>${myArr[idx]}</li>
        `)
    })

    $('button').click(function(){
        $('.studentList li:last').remove()
    })

})
