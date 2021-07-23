class Contestant{
    constructor(){

this.button = createButton("PLAY")

    }
display(){
    this.button.mousePressed(()=>{
    this.title.hide();
    this.input1.hide();
    this.button.hide();

    contestant.name = this.input1.value();
    contestantCount+=1;
    contestant.index = contestantCount;
    contestant.update();
    contestant.updateCount(contestantCount);

    })
}

}