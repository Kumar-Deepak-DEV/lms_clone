export const loginCredentials = {
    uid: '108429',
    password:'12345'
};

export const loginDetails = (uiid,password)=>{
    if(uiid == loginCredentials['uid'] && passcode== loginCredentials.password){
        const user = {
            role:'Student',
            name:'Student User',
            uiid,
        }
    
        
        localStorage.setItem("user",JSON.stringify(user));
        return true;
        
    };

    return false;

    
}