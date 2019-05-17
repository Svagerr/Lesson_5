function MetodsWorkWithArrays(array) {
    this.array = array;
    
    this.Reverse = function () {
        if(this.array.length === 0 | typeof this.array === 'string' | typeof this.array === 'number'){
            return false;
        }
        let Reverse;
        for (let i = 0; i < this.array.length; i++) {
            for (let j = 0; j < this.array.length - 1 - i; j++) {
                Reverse = this.array[j];
                this.array[j] = this.array[j + 1];
                this.array[j + 1] = Reverse;
            }
        }
        return this.array;
    }
    
    this.Push = function () {
        if(this.array.length === 0 | typeof this.array === 'string' | typeof this.array === 'number'){
            return false;
        }
        for(let i = -1; i < this.array.length; i++){
            if(i === this.array.length - 1){
                let arr = [];
                i++
                for(let j = 0; j < arguments.length; j++){
                    arr[j] = arguments[j];
                    this.array[i++] = arr[j];
                }  
            }
        }
        return this.array;
    }
    
    this.Sort = function () {
        if(this.array.length === 0 | typeof this.array === 'string' | typeof this.array === 'number'){
            return false;
        }
        
        for(let i = 1; i < this.array.length; i++){
            let x = this.array[i];
            let j = i - 1;
            while(j >= 0 && x <= this.array[j]){
                this.array[j+1] = this.array[j];
                j = j - 1;
            } 
            this.array[j + 1] = x;
        }
    return this.array;
    }
    
    this.Pop = function () {
        if(this.array.length === 0 | typeof this.array === 'string' | typeof this.array === 'number'){
            return false;
        }

        let a = this.array.length;
        for(var i = 0; i <= this.array.length; i++){
            if(i === this.array.length - 1){
                let back = i;
                this.array.length = i;
            }
        }
        return this.array;
    }
    
    this.Shift = function () {
        if(this.array.length === 0 | typeof this.array === 'string' | typeof this.array === 'number'){
            return false;
        }
        this.array[0] = null;
            for(let i = 0; i < this.array.length; i++){
                if(this.array[i] === null){
                    var iter = i;
                    continue;
                }
                if(i > iter){
                    this.array[i - 1] = this.array[i] 
                }
            }
    this.array.length--;
    return this.array;
    }
        
    this.Unshift = function () {
                if(this.array.length === 0 | typeof this.array === 'string' | typeof this.array === 'number'){
            return false;
        }
        let cloneArray = [];
        for(let j = 0; j < this.array.length; j++){
            cloneArray[j] = this.array[j];
        }
        let lenghtArr = this.array.length + arguments.length;
        this.array[lenghtArr - 1] = null;
        for(let i = 0; i < this.array.length; i++){
            this.array[i] = arguments[i];
            if(i > arguments.length - 1){
                this.array[i] = cloneArray[i - arguments.length];
            }
        }
        return this.array;
    }
    
    this.Slice = function (from, before = this.array.length) {
                if(this.array.length === 0 | typeof this.array === 'string' | typeof this.array === 'number'){
            return false;
        }
        this.Slise = [];
        for(let i = from, j = 0; i < before, j < before; i++, j++){
                this.Slise[i] = this.array[i];
        }
        return this.Slise;
    }
    
    this.Remove = function (a) {
                if(this.array.length === 0 | typeof this.array === 'string' | typeof this.array === 'number'){
            return false;
        }
        if(arguments.length === 0 | typeof arguments === 'string' | typeof arguments === 'number'){
            return false;
        }
        this.array[a] = null;
            for(let i = 0; i < this.array.length; i++){
                if(this.array[i] === null){
                    var iter = i;
                    continue;
                }
                if(i > iter){
                    this.array[i - 1] = this.array[i] 
                }
            }
    this.array.length--;
    return this.array;
}
    
    this.Size = function () {
                if(this.array.length === 0 | typeof this.array === 'string' | typeof this.array === 'number'){
            return false;
        }

        return this.array.length;
    }
    
    this.Includes = function (elem) {
                if(this.array.length === 0 | typeof this.array === 'string' | typeof this.array === 'number'){
            return false;
        }
        let a = 0;
        let b = 0;
        for(let i = 0; i < this.array.length; i++){
            if(elem === this.array[i]){
                a++
            } else  {
                b++
            }
        }
        if(a > 0) {
            return true;
        }
        if(b>0){
            return false;
        }
    }
    
    this.Map = function (Function) {
        let newArray = [];

        for (let i = 0; i < this.array.length; i++){
            newArray[i] = Function();
        }
        this.array = newArray;
        return this.array;
    }
    
}

function ArrayList () {
    MetodsWorkWithArrays.apply(this);
    this.array = [ ];
}

function LinkedList () {
    MetodsWorkWithArrays.apply(this);
 
    this.startNode = null;
    
    this.Node = function (value) {
        return {
            name: value,
            prev: null,
            next: null,
        }
    }
    
    this.initList = function () {
        if (this.startNode == null) {
            this.startNode = this.Node('start');
            return this.startNode;
        }
    }
    
    this.End = function (node) {
        if (node === null) {
            return null;
        }
        if (node.next === null) {
            return node;
        }
        return this.End(node.next);
    }
    
    this.Add = function (value) {
        if (this.startNode === null) {
            this.initList();
        }
        if (this.startNode.next == null) {

            this.startNode.next = this.Node(value);
            this.startNode.next.prev = this.startNode;
            return this.startNode.next;
        }
        if (this.startNode.next != null) {
            let end = this.End(this.startNode);
            end.next = this.Node(value);
            this.End(this.startNode).prev = end;
            return end.next;
        }
    }
}

//let Arr = new LinkedList();








