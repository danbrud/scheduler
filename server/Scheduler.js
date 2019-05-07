class Scheduler {
    constructor(year, month, daysToSchedule, usersPerShift, users) {
        this.year = parseInt(year)
        this.month = parseInt(month)
        this.days = daysToSchedule  //in a week
        this.usersPerShift = usersPerShift    //number of workers to asign to a given day
        this.users = users
    }


    getDates() {
        const dates = []
        let currentDate = new Date(this.year, this.month, 1)
        let endDate = new Date(this.year, this.month + 1, 1)
        const millisecondDay = 24*3600*1000
        while (currentDate < endDate) {
            for (let day of this.days) {
                if (currentDate.getDay() === day) {
                    dates.push({ date: new Date(currentDate), shifts: { morning: [], afternoon: [] } })
                }
            }
            currentDate = new Date(currentDate.getTime() + millisecondDay)      //increment by one day
        }
        return dates
    }

    hasFreeSlots(shift, user, day) {
        return user.timesAvailable.some(t => t.date.valueOf() === day.date.valueOf() && t.shift === shift)
        && day.shifts[shift].length < this.usersPerShift
    }

    isAlreadyScheduled(shift, user, day) {
        return user.shiftsScheduled.some(s => s.date.valueOf() === day.date.valueOf() && s.shift === shift)
    }

    scheduleUser(shift, user, day) {
        day.shifts[shift].push(user.name)
        user.shiftsScheduled.push({ date: new Date(day.date), shift: shift} )
    }

    scheduleUsers(shift, day) {
        for (let user of this.users) {
            if (this.isAlreadyScheduled(shift, user, day)) { continue }
            else if (this.hasFreeSlots(shift, user, day)) {
                this.scheduleUser(shift, user, day)
            }
        }
    }

    sortByShiftsScheduled(a, b) {
        return a.shiftsScheduled.length - b.shiftsScheduled.length
    }

    getRandomizedUsers() {
        const users = [...this.users]
        const randomUsers = []
        while (users.length > 0) {
            let randomIndex = Math.ceil(Math.random() * users.length) - 1
            randomUsers.push(users.splice(randomIndex, 1)[0])
        }
        return randomUsers
    }

    scheduleOneDay(day) {
        const sortedUsers = this.getRandomizedUsers().sort(this.sortByShiftsScheduled)  //sort users according to how many shifts they already have assigned, randomizing the order of those with the same number of shifts
        for (let user of sortedUsers) {
            if (this.hasFreeSlots("morning", user, day)) {
                    this.scheduleUser("morning", user, day)
                }
            else if (this.hasFreeSlots("afternoon", user, day)) {
                    this.scheduleUser("afternoon", user, day)
                }
            else { continue }
        }
    }

    isShiftFilled(day, shift) {
        return day.shifts[shift].length === this.usersPerShift
    }

    fillInGaps(schedule) {
        for (let date of schedule) {
            if (this.isShiftFilled(date, "morning") && this.isShiftFilled(date, "afternoon")) { continue }
            else if (this.isShiftFilled(date, "morning")) {
                this.scheduleUsers("afternoon", date)
            }
            else if (this.isShiftFilled(date, "afternoon")) {
                this.scheduleUsers("morning", date)
            }
            else {
                this.scheduleUsers("morning", date)
                this.scheduleUsers("afternoon", date)
            }
        }
    }

    createSchedule() {
        const schedule = this.getDates()
        for (let date of schedule) {
            this.scheduleOneDay(date)
        }
        this.fillInGaps(schedule)
        return schedule
    }
}

module.exports = Scheduler

// const scheduler = new Scheduler()

// const newScchedule = scheduler.createSchedule()
// console.log(newScchedule)

// newScchedule.forEach(s => {
//     console.log(s.date.toDateString())
//     console.log(s.shifts)})

// scheduler.users.forEach(u => console.log(u.shiftsScheduled))