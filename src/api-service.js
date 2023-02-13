export class API {
    static loginUser(body) {
      return fetch(`https://home-tech.vercel.app/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify( body )
      }).then( resp => resp.json())
    }
    static registerUser(body) {
      return fetch(`https://home-tech.vercel.app/api/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify( body )
      }).then( resp => resp.json())
    }
  
    static colorcomb(body){
      return fetch("https://home-tech.vercel.app/api/colors/register", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          
        },
        body: JSON.stringify( body )
      }).then( resp => resp.json())
      
    }
    static imagepath( body) {
      return fetch(`https://home-tech.vercel.app/api/pattern/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          
        },
        body: JSON.stringify( body )
      }).then( resp => resp.json())
    }
    static logcombo(body) {
      return fetch(`https://home-tech.vercel.app/api/colors/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          
        },
        body: JSON.stringify( body )
      }).then( resp => resp.json())
    }
    static getemail(body) {
      return fetch(`https://home-tech.vercel.app/api/register`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          
        },
        body: JSON.stringify( body )
      }).then( resp => resp.json())
       
    }
  }