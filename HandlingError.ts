function validateVoter(age : number){
  if(age < 18){
    throw new Error('he cant vote you fool, he is under 18');
  }else{
    console.log('he can vote to anyone he/she wants wants');
  }
} 


try{
  validateVoter(17);
}catch(e){
  let result = (e as Error).message;
  console.log(' error message : ', result);
}