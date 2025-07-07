class studentHogwarts{
    constructor(){
        this.privateScore=0;
        this.name=null;
    }

    changeScoreBy(score) {
        this.privateScore+=score;
    }
    setName(name){
        this.name=name;
    }

    rewardStudent(){
        this.changeScoreBy(1)
    }
    penalizeStudent(){
        this.changeScoreBy(-1);
    }
}

let harry = new studentHogwarts();
harry.setName("Harry");
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();

let draco = new studentHogwarts();
draco.setName("Draco");
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();

console.log(harry.name,harry.privateScore);
console.log(draco.name,draco.privateScore)