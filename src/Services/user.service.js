var path = require('../userConstants/user.constants')
export const userService = {
    listsearchresults
}
async function listsearchresults(userData){
    var query = "?_limit=50";
    const requestOptions = {
        method:'GET',
        headers:{
         'Content-Type': 'application/json',
        },
    }
    return await fetch(path.userConstants.LIST_SEARCH_RESULT + query ,requestOptions)
   .then(handleResponse)
   .then(results=>{
       return results
   })
}
function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
            }
            console.log("Response text--",response.statusText)
            const error = (data && data) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}