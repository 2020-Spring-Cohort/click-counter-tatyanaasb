class ClickCounter{

    constructor(){
        this.clickCount = 0;
        this.clickValue = 1;
        this.clickCompanionCount = 0;
        this.clickCompanionCost = 100;
        this.compounderCount = 0;
        this.compounderCost = 10;
    }

    getClickCount(){
        return this.clickCount;
    }

    clickIncrementor(){
        this.clickCount = this.clickCount + this.clickValue;
    }

    getClickCompanionCount(){
        return this.clickCompanionCount;
    }
    
    purchaseEachClickCompanion(){
        this.clickCompanionCost = this.clickCompanionCost + (this.clickCompanionCost * .1);  
    }

    purchaseCompanionCondition(){
        if (this.clickCount >= this.clickCompanionCost)
        {
            this.purchaseClickCompanion()
        }
    }

    purchaseClickCompanion(){
        this.clickCompanionCount++;
        this.clickCount -= this.clickCompanionCost;
        this.purchaseEachClickCompanion();
    }

    getCompounderCount(){
        return this.compounderCount;
    }

    purchaseEachCompounder(){
        this.compounderCost = this.compounderCost + (this.compounderCost * .1);  
    }

    purchaseCompounderCondition(){
        if (this.clickCount >= this.compounderCost)
        {
            this.purchaseCompounders()
        }
    }
    
    clickValueMultiplied(){
        this.clickValue = this.clickValue + (this.clickValue * .2);
    }
    
    purchaseCompounder(){
        this.compounderCount++;
        this.clickCount -= this.compounderCost;
        this.purchaseEachCompounder();
        this.clickValueMultiplied();
    }
    
    updateClickCounts(){
        this.clickCount = this.clickCount + (this.clickCompanionCount * this.clickValue)
    }
    
}

// You save some great fields and functions in the ClickCounter class
// We need to instantiate an object so that we can act upon these fields and functions
const appCookie = new ClickCounter();

// Locate the elements in your html and save their 'node' in a variable, so that we
// can give them a user friendly name and manipulate them later
const clickCounterButtonElement = document.querySelector(".click_counter_button");
const clickCountDisplayElement = document.querySelector('.click_count_display');

// Write a function that updates the clickCountDisplayElement with the number of clicks
const updateClickCountDisplay = () => {
    clickCountDisplayElement.innerText = appCookie.getClickCount();
}

// Write a function that adds a 'click' event listener to your clickCounterButtonElement
// When the 'click' is heard, the clickIncrementer() method will be run, and the click count display
// will be updated
const makeButtonIntoClickCounter = () => {
    clickCounterButtonElement.addEventListener('click', () => {
        appCookie.clickIncrementor();
        updateClickCountDisplay();
    })
}

// The functions are written, but they haven't been executed yet
// To hook up your html, Let's officially activate the event listener on the click_counter_button
makeButtonIntoClickCounter();
