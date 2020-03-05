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

    
    describe('clickCompanionValue', function(){
        it('has a value of 100', function(){
            expect(sut.clickCompanionValue).toBe(100);
        })
    })
    
    describe('getClickCompanionValue', function(){
        it('returns a value of 100', function(){
            expect(sut.getClickCompanionValue()).toBe(100);
        })
    })
})