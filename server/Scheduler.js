class Scheduler {
    constructor() {
        this.year = 2019
        this.month = 5      //June (will be variable from class input in future versions)
        this.days = [1, 3]  //Monday and Wednesday (will also be variable in the future)
        this.usersPerDay = 2    //number of workers to asign to a given day (can be variable)
        this.users = [      //will also receive variable array from App
            {
                name: "Paul",
                contact: "email",
                timesAvailable : [
                    {date: new Date(2019, 5, 3), shift: "morning"},
                    {date: new Date(2019, 5, 5), shift: "morning"},
                    {date: new Date(2019, 5, 10), shift: "afternoon"},
                    {date: new Date(2019, 5, 12), shift: "morning"},
                    {date: new Date(2019, 5, 17), shift: "afternoon"},
                    {date: new Date(2019, 5, 19), shift: "morning"},
                    {date: new Date(2019, 5, 24), shift: "afternoon"},
                    {date: new Date(2019, 5, 26), shift: "afternoon"}
                ],
                shiftsScheduled : []
            },
            {
                name: "Danny",
                contact: "email",
                timesAvailable : [
                    {date: new Date(2019, 5, 3), shift: "morning"},
                    {date: new Date(2019, 5, 3), shift: "afternoon"},
                    {date: new Date(2019, 5, 10), shift: "afternoon"},
                    {date: new Date(2019, 5, 12), shift: "afternoon"},
                    {date: new Date(2019, 5, 17), shift: "afternoon"},
                    {date: new Date(2019, 5, 19), shift: "morning"},
                    {date: new Date(2019, 5, 19), shift: "afternoon"},
                    {date: new Date(2019, 5, 24), shift: "morning"}
                ],
                shiftsScheduled : []
            },
            {
                name: "Ravid",
                contact: "email",
                timesAvailable : [
                    {date: new Date(2019, 5, 3), shift: "afternoon"},
                    {date: new Date(2019, 5, 5), shift: "morning"},
                    {date: new Date(2019, 5, 10), shift: "morning"},
                    {date: new Date(2019, 5, 10), shift: "afternoon"},
                    {date: new Date(2019, 5, 17), shift: "afternoon"},
                    {date: new Date(2019, 5, 19), shift: "morning"},
                    {date: new Date(2019, 5, 24), shift: "morning"},
                    {date: new Date(2019, 5, 26), shift: "morning"}
                ],
                shiftsScheduled : []
            },
            {
                name: "Yossi",
                contact: "email",
                timesAvailable : [
                    {date: new Date(2019, 5, 5), shift: "morning"},
                    {date: new Date(2019, 5, 5), shift: "afternoon"},
                    {date: new Date(2019, 5, 12), shift: "morning"},
                    {date: new Date(2019, 5, 12), shift: "afternoon"},
                    {date: new Date(2019, 5, 19), shift: "morning"},
                ],
                shiftsScheduled : []
            },
            {
                name: "Hunter",
                contact: "email",
                timesAvailable : [
                    {date: new Date(2019, 5, 3), shift: "morning"},
                    {date: new Date(2019, 5, 5), shift: "morning"},
                    {date: new Date(2019, 5, 5), shift: "afternoon"},
                    {date: new Date(2019, 5, 12), shift: "morning"},
                    {date: new Date(2019, 5, 17), shift: "morning"},
                    {date: new Date(2019, 5, 19), shift: "morning"},
                    {date: new Date(2019, 5, 24), shift: "morning"},
                ],
                shiftsScheduled : []
            },
            {
                name: "Shiran",
                contact: "email",
                timesAvailable : [
                    {date: new Date(2019, 5, 3), shift: "morning"},
                    {date: new Date(2019, 5, 5), shift: "morning"},
                    {date: new Date(2019, 5, 10), shift: "morning"},
                    {date: new Date(2019, 5, 12), shift: "morning"},
                    {date: new Date(2019, 5, 19), shift: "morning"},
                    {date: new Date(2019, 5, 24), shift: "morning"},
                    {date: new Date(2019, 5, 26), shift: "morning"}
                ],
                shiftsScheduled : []
            }
        ]
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
        && day.shifts[shift].length < this.usersPerDay
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
        return day.shifts[shift].length === this.usersPerDay
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

const scheduler = new Scheduler()

scheduler.createSchedule().forEach(s => {
    console.log(s.date.toDateString())
    console.log(s.shifts)})