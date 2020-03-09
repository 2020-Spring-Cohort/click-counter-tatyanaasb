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

    clickIncrementer(){
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
        if (this.clickCount >= this.clickCompanionCost)
        {
            this.clickCompanionCount++;
            this.clickCount -= this.clickCompanionCost;
            this.purchaseEachClickCompanion();
        }
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

const appButton = new ClickCounter();

const clickButtonElement = document.querySelector('.clicker_buttons__incrementer')
const clickCompanionElement = document.querySelector('.clicker_buttons__companion')
const clickCompounderElement = document.querySelector('.clicker_buttons__compounder')

const currentClickData = document.querySelector('.clicker_data__current_click')
const currentCompanionData = document.querySelector('.clicker_data__current_companion')
const currentCompounderData = document.querySelector('.clicker_data__current_compounder')

const updateClickCountData = () => {
    currentClickData.innerText = appButton.getClickCount();
}
const buttonClickCounter = () => {
    clickButtonElement.addEventListener('click', () => {
        appButton.clickIncrementer();
        updateClickCountData();
    })
}
buttonClickCounter();


const updateCompanionData = () => {
    currentCompanionData.innerText = appButton.getClickCompanionCount();
}
const buttonCompanionCounter = () => {
    clickCompanionElement.addEventListener('click', () => {
        appButton.purchaseClickCompanion();
        updateClickCountData();
        updateCompanionData();
    })
}
buttonCompanionCounter();


const updateCompounderData = () => {
    currentCompounderData.innerText = appButton.getCompounderCount();
}



