describe('Click Counter', function(){

    let sut;

    beforeEach(function(){
        sut = new ClickCounter();
    })

    describe('clickCount', function(){
        it('starts with a value of 0', function(){
            expect(sut.clickCount).toBe(0);
        })
    })

    describe('getClickCount', function(){
        it('returns a clicking value of 0', function(){
            expect(sut.getClickCount()).toBe(0);
        })
    })

    describe('clickCompanionCount', function(){
        it('starts with a value of 0', function(){
            expect(sut.clickCompanionCount).toBe(0);
        })
    })

    describe('getClickCompanionCount', function(){
        it('returns a value of 0', function(){
            expect(sut.getClickCompanionCount()).toBe(0);
        })
    })

    describe('clickIncrementor', function(){
        it('increases value of users clicks by 1', function(){
            sut.clickIncrementor()
            expect(sut.clickCount).toBe(1)
        })
    })
    describe('clickCompanionCost', function(){
        it('has a value of 100', function(){
            expect(sut.clickCompanionCost).toBe(100);
        })
    })
    
    describe('getClickCompanionCost', function(){
        it('returns a value of 100', function(){
            expect(sut.getClickCompanionCost()).toBe(100);
        })
    })
    describe('purchaseClickCompanion', function(){
        it('increases clicking companion to 1', function(){
            sut.purchaseClickCompanion()
            expect(sut.clickCompanionCount).toBe(1)
        });
    })
    describe('purchaseClickCompanion', function(){
        it('decreases clicking count by 100', function(){
            sut.purchaseClickCompanion()
            expect(sut.clickCount).toBe(-100)
        })
    })
    describe('purchaseEachClickCompanion', function(){
        it('increases the cost by 10%', function(){
            sut.purchaseClickCompanion()
            expect(sut.clickCompanionCost).toBe(110)
        })
    })
    
})