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
    if(((this.side[0])+(this.side[1])) > this.side[2]){
      return true;
    } else {
      return false;
    }
  }
}


class Square extends Polygon{
  get isValid(){
    if(this.side[0]===this.side[1]===this.side[2]===this.side[2]){
      return false;
    } else {
      return true;
    }
  }

  get area(){
    return this.side[0]*this.side[0];
  }
}

