class ScrollableString{
    constructor(string){
        this.stringarray = string.split('')
        this.phase = "build"
        this.index = 0
        
    }
    getCurrent(){
        i = 0;
        var res = ""
        while(i<this.index+1){
            res += stringarray[i]
            i+=1
        }
        return res
    }
    next(){
        if(this.index == this.stringarray.length){
            if(this.phase==="build"){this.phase="destroy";this.index-=1;return}
        }
        if(this.index == 0){
            if(this.phase==="destroy"){this.phase="build";this.index+=1;return}
        }
        //the code above checks if a phase has reached its end and then witches to the next phase.
        if(this.phase==="build"){this.index+=1}
        if(this.phase==="destroy"){this.index-=1}
    }
}

module.exports = ScrollableString