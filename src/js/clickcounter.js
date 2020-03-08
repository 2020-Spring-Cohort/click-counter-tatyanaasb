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

const appButton = new ClickCounter();

const clickButtonElement = document.querySelector('.clicker_buttons__incrementor')
const clickCompanionElement = document.querySelector('.clicker_buttons__companion')
const clickCompounderElement = document.querySelector('.clicker_buttons__compounder')

const currentClicksData = document.querySelector('.clicker_data__current_clicks')
const currentCompanionData = document.querySelector('.clicker_data__current_companion')
const currentCompounderData = document.querySelector('.clicker_data__current_compounder')
