class ClickCounter{

    constructor(){
        this.clickCount = 0;
        this.clickCompanionCount = 0;
        this.clickCompanionCost = 100;
        this.compounderCount = 0;
        this.compounderCost = 10;
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

    // getClickCompanionCost(){
    //     return this.clickCompanionCost;
    // }
    
    purchaseEachClickCompanion(){
        this.clickCompanionCost = this.clickCompanionCost + (this.clickCompanionCost*.1);  
    }

    purchaseCondition(){
        if (this.clickCount >= this.clickCompanionCost)
        {
            this.purchaseClickCompanion()
        }
    }

    purchaseClickCompanion(){
        this.clickCompanionCount++;
        this.clickCount =- this.clickCompanionCost;
        this.purchaseEachClickCompanion();
    }

    getCompounderCount(){
        return this.compounderCount;
    }

    purchaseCompounder(){
        this.compounderCount++;
        this.clickCount =- this.compounderCost;
    }


}