
        let cars=["Audi","BMW","Merc","Tata","Mahindra"];   //Step 1
        let olElement='<ol>'
           for(let i=0;i<cars.length;i++)
            {
                olElement+= `<li class="js-car-name">${cars[i]}</li>`
            }   
            olElement+='</ol>'
            console.log(olElement);
    
           let divCarElement= document.querySelector("#js-my-cars")
           divCarElement.innerHTML=olElement         //Step 2


           let carNames=document.querySelectorAll(".js-car-name")
           console.log(carNames.length)

           for(let i=0;i<carNames.length;i++)
           {
            if(i%2==0)
            console.log('I love ',carNames[i].innerHTML)
           }

        //    for(let car of carNames)
        //    {
        //     console.log('I like ',car.innerHTML)
        //    }