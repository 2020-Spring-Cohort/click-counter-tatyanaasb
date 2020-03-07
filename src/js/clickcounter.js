class ClickCounter{

    constructor(){
        this.clickCount = 0;
        this.clickCompanionCount = 0;
        this.clickCompanionCost = 100;
        this.compounderCount = 0;
        this.compounderCost = 10;
        this.compounderClickValue = 1;
    }

    getClickCount(){
        return this.clickCount;
    }

    clickIncrementor(){
        this.clickCount++;
    }

    getClickCompanionCount(){
        return this.clickCompanionCount;
    }
    
    purchaseEachClickCompanion(){
        this.clickCompanionCost = this.clickCompanionCost + (this.clickCompanionCost*.1);  
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
    
    compounderClickValueMultiplied(){
        this.compounderClickValue = this.compounderClickValue + (this.compounderClickValue * .2);
    }

    // eachCompounderClickValueMultiplied(){
    //     // // // let a = this.eachCompounderClickValue()
    //     // // // let b = 1.2
    //     // // // return a * b
    //     //this.compounderClickValue = this.compounderClickValue * (this.compounderClickValue * 1.2);
    //     //this.compounderClickValue *= this.compounderCount;
    //     this.compounderClickValue *= (1.2 * 1.2);
    // }
    
    purchaseCompounder(){
        this.compounderCount++;
        this.clickCount -= this.compounderCost;
        this.purchaseEachCompounder();
        this.compounderClickValueMultiplied();
    };
    
}