import {GET_DIET} from './index'

function getDiet (){
     
     // console.log('entro',name)
      return function (dispatch){
          return fetch(`http://localhost:3001/diet`)
              .then(response => response.json())
              .then(obj => {
                  console.log('obj',obj)
                  dispatch({type: GET_DIET, payload: obj });
              });
      }
  
  }

  export {
    getDiet,
  }
