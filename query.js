const fetch = require('node-fetch');

export const getLocation = async (page)=>{
    const res = await fetch('https://rickandmortyapi.com/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
            query:`query{
                    locations(page:${page}){ 
                        info {
                            count
                        }
                        results{
                            id 
                            name 
                            type 
                            residents{
                                image
                            }
                        }
                    }
                }`
        })
      });
      return await res.json(); 
    
}
export const getResidents = async (id)=>{
    const res = await fetch('https://rickandmortyapi.com/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
            query:`query{
                    location (id:${id}) {
                        name
                        type
                        residents {
                            id
                            name
                            species
                            image
                        }
                    }
                }`
        })
      });
      return await res.json(); 
    
}
export const getResidentDscr = async (id)=>{
    const res = await fetch('https://rickandmortyapi.com/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
            query:`query{
                    character (id:${id}) {
                        name
                        species
                        image
                        status
                        origin{
                            name
                        }
                        location{
                            name
                        }
                    }
                }`
        })
      });
      return await res.json(); 
    
}



