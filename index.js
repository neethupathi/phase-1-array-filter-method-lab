// Code your solution here
const findMatching=(drivers,name)=>
{
 const d=drivers.filter((driverName)=>((driverName.toLowerCase()  ===  name.toLowerCase())));
return d;
};
function fuzzyMatch(drivers,name)
{
let leng=name.length;
return drivers.filter(function (driverName) {
return driverName.slice(0,leng) === (name)
});
}
function matchName(drivers,name)
{
return drivers.filter(function (drivername) {
return drivername.name.toLowerCase() === name.toLowerCase()
});
}
