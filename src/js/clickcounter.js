class ClickCounter{

    constructor(){
        this.clickCount = 0;
        this.clickCompanionCount = 0;
        this.clickCompanionCost = 100;
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

    getClickCompanionCost(){
        return this.clickCompanionCost;
    }
    
    purchaseEachClickCompanion(){
        this.clickCompanionCost = this.clickCompanionCost + (this.clickCompanionCost*.1);  
    }

    purchaseClickCompanion(){
        this.clickCompanionCount++;
        this.clickCount=-100;
        this.purchaseEachClickCompanion();
    }
}