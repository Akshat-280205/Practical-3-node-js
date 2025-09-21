
function fetchUserData() {
    console.log('Fetching user data...');
    
    setTimeout(() => {
        console.log('Data received');
        
       
        const userData = {
            name: 'John Doe',
            email: 'john@example.com'
        };
        
        console.log('User:', userData);
    }, 2000); 
}


fetchUserData();


