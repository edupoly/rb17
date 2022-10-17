export const ob1 = {firstname:'praveen',lastname:'gubbala'}
export default [11,22,34,16]
export function maxofthree(x,y,z){
  var res;
  if(x>y){
    if(x>z){
      res = x;
    }
    else{
      res = z;
    }
  }
  else{
    if(y>z){
      res = y
    }
    else{
      res = z;
    }
  }
  return res;
}
