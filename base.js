 
    let _Tier1 = function (person, amount, redraw, interest) {
        this.person= person;
        this.amount = amount
        this.redraw = redraw;
        this.interest = interest

    }

    let _Tier2 = function (person, amount, redraw, interest) {
        this.person= person;
        this.amount = amount;
        this.redraw = redraw;
        this.interest = interest

    }

    let _Tier3 = function (person, amount, redraw, interest) {
        this.person= person;
        this.amount = amount;
        this.redraw = redraw;
        this.interest = interest

    }

    let tier= {
        tier1 :[],
        tier2 : [],
        tier3 : []
    }

    function addInputs(per, amt, red, int){
        let  newItem;
        let tiers = document.querySelector('.tiers').value;
        
        //push items to the tiers
        if (tiers === 'tier-1') {
            newItem = new _Tier1(per, amt, red, int);
            tier.tier1.push(newItem)
        }else if (tiers === 'tier-2'){
            newItem= new _Tier2(per, amt, red, int);
            tier.tier2.push(newItem)
        }else if(tiers === 'tier-3'){
            newItem= new _Tier3(per, amt, red, int);
            tier.tier3.push(newItem)
        }else{
            console.log('error');
        }
    };

    function displayInputs (tier, person, amount, redraw, interest) {
        let html,newHtml, element;
        if (tier === 'tier-1') {
            element = document.querySelector('.tier1-body') ;
            html =   '<div class="tier1"><div class="details"><span class="des-name">name:</span><div class="name-1">%name%</div><span class="des-amount">amount:</span><div class="amount-1">%amount%</div></div><div class="returns"><span class="des-redraw">redraw:</span><div class="redraw-1">%redraw%</div><span class="des-interest">interest:</span><div class="interest-1">%interest%</div></div></div>'
        } else if (tier === 'tier-2') {
            element = document.querySelector('.tier2-body') ;
            html = '<div class="tier2"><div class="details"><span class="des-name">name:</span><div class="name-2">%name%</div><span class="des-amount">amount:</span><div class="amount-2">%amount%</div></div><div class="returns"><span class="des-redraw">redraw:</span><div class="redraw-2">%redraw%</div><span class="des-interest">interest:</span><div class="interest-2">%interest%</div></div></div>' 
        }else if(tier === 'tier-3'){
            element = document.querySelector('.tier3-body');
            html = '<div class="tier3"><div class="details"><span class="des-name">name:</span><div class="name-3">%name%</div><span class="des-amount">amount:</span><div class="amount-3">%amount%</div></div>  <div class="returns"><span class="des-redraw">redraw:</span><div class="redraw-3">%redraw%</div><span class="des-interest">interest:</span><div class="interest-3">%interest%</div></div></div>'
        }
        newHtml = html.replace('%name%', person);
        newHtml =  newHtml.replace('%amount%', amount);
        newHtml =  newHtml.replace('%redraw%', redraw);
        newHtml =  newHtml.replace('%interest%', interest);
        
        element.insertAdjacentHTML('beforeend',newHtml);  
    }

    function clearInputs() {
        let person = document.querySelector('.name');
        person.value = ''
        let number = document.querySelector( '.number');
        number.value = ''
        person.focus();
    }

function events() {
    let person= document.querySelector('.name').value ;
    let number=  parseFloat(document.querySelector( '.number').value);
    let tiers = document.querySelector('.tiers').value ;
    let _interest, _redraw;
    if (tiers === 'tier-1') {
        _interest = (7 * number) / 100 
        _redraw = number - _interest
    }else if(tiers === 'tier-2'){
        _interest = (12 * number) / 100
        _redraw = number - _interest
    }else if(tiers === 'tier-3'){
        _interest = (25 * number) / 100
        _redraw = number - _interest
    } 
    addInputs(person, number,_redraw, _interest )
    displayInputs (tiers, person, number, _redraw, _interest) 
    clearInputs()
}

  function test() {
    console.log(tier);
  }

    let key= document.querySelector('.key')
    key.addEventListener('click', events);
        
    
