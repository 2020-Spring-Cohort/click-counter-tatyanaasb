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

    describe('purchaseCompanionCondition', function(){
        it('allows companionCount to increase if the clickingCount is >= companionCost', function(){
            sut.purchaseCompanionCondition()
            expect(sut.clickCompanionCount).toBe(0)
        })
    })

    describe('CompounderCount', function(){
        it('starts with a value of 0', function(){
            expect(sut.compounderCount).toBe(0);
        })
    })
    
    describe('getCompounderCount', function(){
        it('returns a value of 0', function(){
            expect(sut.getCompounderCount()).toBe(0);
        })
    })

    describe('purchaseCompounder', function(){
        it('increases compounder count to 1', function(){
            sut.purchaseCompounder()
            expect(sut.compounderCount).toBe(1)
        })
    })
    
    describe('purchaseCompounder', function(){
        it('decreases compounder cost from clickCount', function(){
            sut.purchaseCompounder()
            expect(sut.clickCount).toBe(-10)
        })
    })

    describe('purchaseEachCompounder', function(){
        it('increases the cost by 10%', function(){
            sut.purchaseCompounder()
            expect(sut.compounderCost).toBe(11)
        })
    })

    describe('purchaseCompounderCondition', function(){
        it('allows compounderCount to increase if the clickingCount is >= compounderCost', function(){
            sut.purchaseCompounderCondition()
            expect(sut.compounderCount).toBe(0)
        })
    })

    describe('clickValue', function(){
        it('has a value of 1 click', function(){
            expect(sut.clickValue).toBe(1)
        })
    })

    describe('clickValueMultiplied', function(){
        it('increases the value of a click by 1.2x', function(){
            sut.clickValueMultiplied()
            expect(sut.clickValue).toBe(1.2)
        })
    })
    
    describe('purchaseCompounder', function(){
        it('increases each click value to 1.2 to the amount of compounderCount', function(){
            sut.purchaseCompounder()
            expect(sut.clickValue).toBe(1.2)
        })
    })

})