export function authHeader(){
  const auth : string | null = localStorage.getItem('user')

  let user = auth && JSON.parse(auth);

  if(user && user.jwtToken){
      return 'Bearer ' + user.jwtToken;
  }else{
      return null;
  }
}