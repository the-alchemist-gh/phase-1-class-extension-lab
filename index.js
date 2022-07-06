// Your code here
class Polygon{
  constructor(array){
    this.side = array;
  }

  get countSides(){
    return this.side.length;
  }

  get perimeter(){
    return this.side.reduce((arr1, arr2)=> arr1 + arr2);
  }
}


class Triangle extends Polygon{
  get isValid(){
    console.log(this.side[0], this.side[1], this.side[2])
    if(((this.side[0])+(this.side[1])) > this.side[2] || ((this.side[1])+(this.side[2])) > this.side[0] || ((this.side[2])+(this.side[0])) > this.side[1] ){
      return true;
    } else {
      return false;
    }
  }
}


class Square extends Polygon{
  get isValid(){
    
    if(this.side[0]===this.side[1] && this.side[1]===this.side[2] && this.side[2]===this.side[3]){

      return true;
    } else {
      return false;
    }
  }

  get area(){
    return this.side[0]*this.side[0];
  }
}
let triangle = new Triangle( [ 5, 5, 5 ] )
let triangle2 = new Triangle( [ 15, 10, 1 ] )


console.log(triangle2.isValid)