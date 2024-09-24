type Role = 'Admin' | 'User';
console.log(Number);


const checkRole = (role : Role) : string => {
    if ( role == 'Admin')
        return role;
    else
        return 'User';
}

console.log(typeof 'Admin');  // String 
console.log(checkRole("Admin")); // Admin