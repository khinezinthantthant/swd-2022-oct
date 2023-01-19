const myself ={
    name:'hein htet zan',
    age:28,
    isSingle:true,
    //method
    teach:function(what,where){
        return "I can teach "+  what + " at "+where;
    },
    // method ES6
    learn(anything='anything'){
        return `${this.name} can teach ${anything}`;
    },
    showThis:function(){
        // console.log(this.name,this.age,this.isSingle);
        console.log(myself);
    }
}

// console.log(myself.teach('front end','mmsit'));
// console.log(myself.learn());
// console.log(myself.learn('backend'));

// console.log(myself);
// console.log(this);
console.log(myself.showThis());