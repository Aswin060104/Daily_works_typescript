console.log(Number);
var checkRole = function (role) {
    if (role == 'Admin')
        return role;
    else
        return 'User';
};
console.log(typeof 'Admin'); // String 
console.log(checkRole("Admin")); // Admin
