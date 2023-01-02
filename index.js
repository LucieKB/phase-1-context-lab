const createEmployeeRecord = function(array){
        return {
        firstName : array[0],
        familyName : array[1],
        title : array[2],
        payPerHour : array[3],
        timeInEvents : [],
        timeOutEvents : []
        }
       
    }

const createEmployeeRecords = function (arrayOfArrays){
    return arrayOfArrays.map(function(array){
        return createEmployeeRecord(array)
    })
}

const createTimeInEvent = function(dateStamp){
    let [date, time] = dateStamp.split(" ");

    this.timeInEvents.push({
        type : "TimeIn",
        hour : parseInt(time),
        date : date
    })
    
    return this
}

const createTimeOutEvent = function(dateStamp){
    let [date, time] = dateStamp.split(" ");

    this.timeOutEvents.push({
        type : "TimeOut",
        hour : parseInt(time),
        date : date
    })
    
    return this
}

const hoursWorkedOnDate = function(thatDate){
    
    let timeOut = this.timeOutEvents.find(function(e){
        return e.date === thatDate
    })
   
    let timeIn = this.timeInEvents.find(function(e){
        return e.date === thatDate
    })

return (timeOut.hour-timeIn.hour)/100
}

const wagesEarnedOnDate = function(thatDate){
    let workAndPay = hoursWorkedOnDate.call(this, thatDate)
    console.log(workAndPay*this.payPerHour)
    return workAndPay*this.payPerHour}


    

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}


    let findEmployeeByFirstName = function (srcArray, firstName){
        return srcArray.find(function(e){
          return e.firstName === firstName
          })
         }

    
function calculatePayroll(arrayOfEmployees){
    return arrayOfEmployees.reduce(function(accumulator, thatEmployee){
        return accumulator + allWagesFor.call(thatEmployee)},0)

    }
