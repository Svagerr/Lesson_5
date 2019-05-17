describe('------------------ Test Reverse ------------------', () => {
    
    it('Function check', () => {
        let Test = new MetodsWorkWithArrays([1,2,3,4,5]);
        const act = Test.Reverse();
        const exp = [5,4,3,2,1];
        assert.deepEqual(act, exp);
    });
    
    
    const testedData = [
        {
            'value': [1,2,3,4,5,8],
            'expected': [8,5,4,3,2,1]
        },
        
        {    
            'value': [4,5,2,5,7,8],
            'expected': [8,7,5,2,5,4]
        },
        
        {    
            'value': [11,22,33,44,55,66],
            'expected': [66,55,44,33,22,11]
        },
        
        {    
            'value': [100,200,300,400,500,500,600],
            'expected': [600,500,500,400,300,200,100]
        }
    ];
    
    for (let testSuite of testedData) {
        it(`Test  value ${testSuite['value']} expected ${testSuite['expected']}`,() => {
            let Test = new MetodsWorkWithArrays(testSuite['value']);
            const act = Test.Reverse();
            assert.deepEqual(act, testSuite['expected']);
        });
    }
    

    
    it('Not String', () => {
        let Test = new MetodsWorkWithArrays('text');
        const act = Test.Reverse();
        assert.isFalse(act);
    })
    
        it('array.lenght > 0', () => {
        let Test = new MetodsWorkWithArrays([]);
        const act = Test.Reverse();
        assert.isFalse(act);
    })
    
    it('Not Number', () => {
        let Test = new MetodsWorkWithArrays(5454);
        const act = Test.Reverse();
        assert.isFalse(act);
    })
});

describe('------------------ Test Push ------------------', () => {
it('Function check', () => {
        let Test = new MetodsWorkWithArrays([1,2,3,4,5]);
        const act = Test.Push(6,7);
        const exp = [1,2,3,4,5,6,7];
        assert.deepEqual(act, exp);
    });
    
    
    const testedData = [
        {
            'value': [1,2,3,4,5,8],
            'argum': 1,
            'expected': [1,2,3,4,5,8,1]
        },
        
        {    
            'value': [4,5,2,5,7,8],
            'argum' : 222,
            'expected': [4,5,2,5,7,8,222]
        },
        
        {    
            'value': [11,22,33,44,55,66],
            'argum' : 2225454,
            'expected': [11,22,33,44,55,66,2225454]
        },
        
        {    
            'value': [100,200,300,400,500,500,600],
            'argum' : 0,
            'expected': [100,200,300,400,500,500,600,0]
        }
    ];
    
    for (let testSuite of testedData) {
        it(`Test  value ${testSuite['value']} expected ${testSuite['expected']}`,() => {
            let Test = new MetodsWorkWithArrays(testSuite['value']);
            const act = Test.Push(testSuite['argum']);
            assert.deepEqual(act, testSuite['expected']);
        });
    }
    
    it('Not String', () => {
        let Test = new MetodsWorkWithArrays('text');
        const act = Test.Push();
        assert.isFalse(act);
    })
    
    it('array.lenght > 0', () => {
        let Test = new MetodsWorkWithArrays([]);
        const act = Test.Push();
        assert.isFalse(act);
    })
    
    it('Not Number', () => {
        let Test = new MetodsWorkWithArrays(5454);
        const act = Test.Push();
        assert.isFalse(act);
    })
});

describe('------------------ Test Sort ------------------', () => {
    it('Function check', () => {
        let Test = new MetodsWorkWithArrays([1,2,3,5,4]);
        const act = Test.Sort();
        const exp = [1,2,3,4,5];
        assert.deepEqual(act, exp);
    });
    
    
    const testedData = [
        {
            'value': [8,5,4,3,2,1],
            'expected': [1,2,3,4,5,8]
        },
        
        {    
            'value': [5,5,5,7,7,3,2,9],
            'expected': [2,3,5,5,5,7,7,9]
        },
        
        {    
            'value': [44,3,0,5],
            'expected': [0,3,5,44]
        },
        
        {    
            'value': [1000,0,-3,0],
            'expected': [-3,0,0,1000]
        }
    ];
    
    for (let testSuite of testedData) {
        it(`Test  value ${testSuite['value']} expected ${testSuite['expected']}`,() => {
            let Test = new MetodsWorkWithArrays(testSuite['value']);
            const act = Test.Sort();
            assert.deepEqual(act, testSuite['expected']);
        });
    }
    
    it('Not String', () => {
        let Test = new MetodsWorkWithArrays('text');
        const act = Test.Sort();
        assert.isFalse(act);
    })
    
    it('array.lenght > 0', () => {
        let Test = new MetodsWorkWithArrays([]);
        const act = Test.Sort();
        assert.isFalse(act);
    })
    
    it('Not Number', () => {
        let Test = new MetodsWorkWithArrays(5454);
        const act = Test.Sort();
        assert.isFalse(act);
    })
});

describe('------------------ Test Pop ------------------', () => {    
    it('Function check', () => {
        let Test = new MetodsWorkWithArrays([1,2,3,5,4]);
        const act = Test.Pop();
        const exp = [1,2,3,5];
        assert.deepEqual(act, exp);
    });
    
    
    
    const testedData = [
        {
            'value': [8,5,4,3,2,1],
            'expected': [8,5,4,3,2]
        },
        
        {    
            'value': [5,5,5,7,7,3,2,'test'],
            'expected': [5,5,5,7,7,3,2]
        },
        
        {    
            'value': [5,5,5,7,7,3,2,'test'],
            'expected': [5,5,5,7,7,3,2]
        },
        
        {    
            'value': [5,5,5,7,7,3,2,'test'],
            'expected': [5,5,5,7,7,3,2]
        }
    ];
    
    for (let testSuite of testedData) {
        it(`Test  value ${testSuite['value']} expected ${testSuite['expected']}`,() => {
            let Test = new MetodsWorkWithArrays(testSuite['value']);
            const act = Test.Pop();
            assert.deepEqual(act, testSuite['expected']);
        });
    }
    
        it('Not String', () => {
        let Test = new MetodsWorkWithArrays('text');
        const act = Test.Pop();
        assert.isFalse(act);
    })
    
    it('array.lenght > 0', () => {
        let Test = new MetodsWorkWithArrays([]);
        const act = Test.Pop();
        assert.isFalse(act);
    })
    
    it('Not Number', () => {
        let Test = new MetodsWorkWithArrays(5454);
        const act = Test.Pop();
        assert.isFalse(act);
    })
});

describe('------------------ Test Shift ------------------', () => {    
    it('Function check', () => {
        let Test = new MetodsWorkWithArrays([1,2,3,5,4]);
        const act = Test.Shift();
        const exp = [2,3,5,4];
        assert.deepEqual(act, exp);
    });
    
    
    const testedData = [
        {
            'value': [8,5,4,3,2,1],
            'expected': [5,4,3,2,1]
        },
        
        {    
            'value': [5,5,5,7,7,3,2,'test'],
            'expected': [5,5,7,7,3,2,'test']
        }
    ];
    
    for (let testSuite of testedData) {
        it(`Test  value ${testSuite['value']} expected ${testSuite['expected']}`,() => {
            let Test = new MetodsWorkWithArrays(testSuite['value']);
            const act = Test.Shift();
            assert.deepEqual(act, testSuite['expected']);
        });
    }
    
        it('Not String', () => {
        let Test = new MetodsWorkWithArrays('text');
        const act = Test.Shift();
        assert.isFalse(act);
    })
    
    it('array.lenght > 0', () => {
        let Test = new MetodsWorkWithArrays([]);
        const act = Test.Shift();
        assert.isFalse(act);
    })
    
    it('Not Number', () => {
        let Test = new MetodsWorkWithArrays(5454);
        const act = Test.Shift();
        assert.isFalse(act);
    })
});

describe('------------------ Test Unshift ------------------', () => {

    
    it('Function check', () => {
        let Test = new MetodsWorkWithArrays([1,2,3,5,4]);
        const act = Test.Unshift(6,7,8);
        const exp = [6,7,8,1,2,3,5,4];
        assert.deepEqual(act, exp);
    });
    
    
    const testedData = [
        {
            'value': [8,5,4,3,2,1],
            'value1': 1,
            'expected': [1,8,5,4,3,2,1]
        },
        
        {    
            'value': [8,7,5,2,5,4],
            'value1': 96,
            'expected': [96,8,7,5,2,5,4]
        },
        
         {    
            'value': [4,5,6,7,8,9,0],
            'value1': 4444,
            'expected': [4444,4,5,6,7,8,9,0]
        },
        
         {    
            'value': [8,7,5,2,5,4],
            'value1': '96',
            'expected': ['96',8,7,5,2,5,4]
        }
    ];
    
    for (let testSuite of testedData) {
        it(`Test  value ${testSuite['value']} expected ${testSuite['expected']}`,() => {
            let Test = new MetodsWorkWithArrays(testSuite['value']);
            const act = Test.Unshift(testSuite['value1']);
            assert.deepEqual(act, testSuite['expected']);
        });
    } 
    
            it('Not String', () => {
        let Test = new MetodsWorkWithArrays('text');
        const act = Test.Unshift();
        assert.isFalse(act);
    })
    
    it('array.lenght > 0', () => {
        let Test = new MetodsWorkWithArrays([]);
        const act = Test.Unshift();
        assert.isFalse(act);
    })
    
    it('Not Number', () => {
        let Test = new MetodsWorkWithArrays(5454);
        const act = Test.Unshift();
        assert.isFalse(act);
    })
});

describe('------------------ Test Slice ------------------', () => {
    
    it('Function check', () => {
        let Test = new MetodsWorkWithArrays([1,2,3,5,4]);
        const act = Test.Slice(0,1);
        const exp = [1];
        assert.deepEqual(act, exp);
    });
    
    
    const testedData = [
        {
            'value0': [8,5,4,3,2,1],
            'value1': 0,
            'value2': 1,
            'expected': [8]
        },
        
        {    
            'value0': [8,7,5,2,5,4],
            'value1': 0,
            'value2': 2,
            'expected': [8,7]
        },
        
         {    
            'value0': [4,5,6,7,8,9,0],
            'value1': 0,
             'value2': undefined,
            'expected': [4,5,6,7,8,9,0]
        },
    ];
    
    for (let testSuite of testedData) {
        it(`Test  value ${testSuite['value']} expected ${testSuite['expected']}`,() => {
            let Test = new MetodsWorkWithArrays(testSuite['value0'])
            const act = Test.Slice(testSuite['value1'], testSuite['value2']);
            assert.deepEqual(act, testSuite['expected']);
        });
    } 
    
    it('Not String', () => {
        let Test = new MetodsWorkWithArrays('text');
        const act = Test.Slice();
        assert.isFalse(act);
    })
    
    it('array.lenght > 0', () => {
        let Test = new MetodsWorkWithArrays([]);
        const act = Test.Slice();
        assert.isFalse(act);
    })
    
    it('Not Number', () => {
        let Test = new MetodsWorkWithArrays(5454);
        const act = Test.Slice();
        assert.isFalse(act);
    })
});

describe('------------------ Test Remove ------------------', () => {
    
    it('Function check', () => {
        let Test = new MetodsWorkWithArrays([1,2,3,5,4]);
        const act = Test.Remove(3);
        const exp = [1,2,3,4];
        assert.deepEqual(act, exp);
    });
    
    
    const testedData = [
        {
            'value': [8,5,4,3,2,1],
            'value1': 3,
            'expected': [8,5,4,2,1]
        },
        
        {    
            'value': [5,5,5,7,7,3,2,'test'],
            'value1': 0,
            'expected': [5,5,7,7,3,2,'test']
        }
    ];
    
    for (let testSuite of testedData) {
        it(`Test  value ${testSuite['value']} expected ${testSuite['expected']}`,() => {
            let Test = new MetodsWorkWithArrays(testSuite['value'])
            const act = Test.Remove(testSuite['value1']);
            assert.deepEqual(act, testSuite['expected']);
        });
    }
    
    it('Not String', () => {
        let Test = new MetodsWorkWithArrays('text');
        const act = Test.Remove();
        assert.isFalse(act);
    })
    
    it('array.lenght > 0', () => {
        let Test = new MetodsWorkWithArrays([]);
        const act = Test.Remove();
        assert.isFalse(act);
    })
    
    it('Not Number', () => {
        let Test = new MetodsWorkWithArrays(5454);
        const act = Test.Remove();
        assert.isFalse(act);
    })
});

describe('------------------ Test Size ------------------', () => {    
    it('Function check', () => {
        let Test = new MetodsWorkWithArrays([1,2,3,5,4]);
        const act = Test.Size();
        const exp = 5;
        assert.deepEqual(act, exp);
    });
    
    
    const testedData = [
        {
            'value': [8,5,4,3,2,1],
            'expected': 6
        },
        
        {    
            'value': [5,5,5,7,7,3,2,'test'],
            'expected': 8
        },
        
        {    
            'value': [1,2,3,4,5,6,7,8,9,9,9,9,9],
            'expected': 13
        },
        
        {    
            'value': [1,2,3,4],
            'expected': 4
        }
    ];
    
    for (let testSuite of testedData) {
        it(`Test  value ${testSuite['value']} expected ${testSuite['expected']}`,() => {
            let Test = new MetodsWorkWithArrays(testSuite['value'])
            const act = Test.Size();
            assert.deepEqual(act, testSuite['expected']);
        });
    }
    
    it('Not String', () => {
        let Test = new MetodsWorkWithArrays('text');
        const act = Test.Size();
        assert.isFalse(act);
    })
    
    it('array.lenght > 0', () => {
        let Test = new MetodsWorkWithArrays([]);
        const act = Test.Size();
        assert.isFalse(act);
    })
    
    it('Not Number', () => {
        let Test = new MetodsWorkWithArrays(5454);
        const act = Test.Size();
        assert.isFalse(act);
    })
});

describe('------------------ Test Includes ------------------', () => {    
    it('Function check', () => {
        let Test = new MetodsWorkWithArrays([1,2,3,5,4]);
        const act = Test.Includes(0);
        const exp = false;
        assert.deepEqual(act, exp);
    });
    
    
    const testedData = [
        {
            'value': [8,5,4,3,2,1],
            'value1': 4,
            'expected': true
        },
        
        {    
            'value': [5,5,5,7,7,3,2,'test'],
            'value1': 0,
            'expected': false
        },
        
        {    
            'value': [1,2,3,4,5,6,7,8,9,9,9,9,9],
            'value1': 9,
            'expected': true
        },
        
        {    
            'value': [1,2,3,4],
            'value1': 5,
            'expected':false
        },
        
        {    
            'value': [1,2,3,4],
            'value1': 2,
            'expected': true
        }
    ];
    
    for (let testSuite of testedData) {
        it(`Test  value ${testSuite['value']} expected ${testSuite['expected']}`,() => {
            let Test = new MetodsWorkWithArrays(testSuite['value'])
            const act = Test.Includes(testSuite['value1']);
            assert.deepEqual(act, testSuite['expected']);
        });
    }
    
    it('Not String', () => {
        let Test = new MetodsWorkWithArrays('text');
        const act = Test.Includes();
        assert.isFalse(act);
    })
    
    it('array.lenght > 0', () => {
        let Test = new MetodsWorkWithArrays([]);
        const act = Test.Includes();
        assert.isFalse(act);
    })
    
    it('Not Number', () => {
        let Test = new MetodsWorkWithArrays(5454);
        const act = Test.Includes();
        assert.isFalse(act);
    })
});