class Scheduler {
    constructor() {
        this.year = 2019
        this.month = 5      //June (will be variable from class input in future versions)
        this.days = [1, 3]  //Monday and Wednesday (will also be variable in the future)
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
                    {date: new Date(2019, 5, 25), shift: "afternoon"}
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
                    {date: new Date(2019, 5, 25), shift: "morning"}
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
                    {date: new Date(2019, 5, 25), shift: "morning"}
                ],
                shiftsScheduled : []
            }
        ],
        this.userShiftCounter = {}
        this.populateUserCounter()
    }

    populateUserCounter = () => this.users.forEach(u => this.userShiftCounter[u.name] = 0)

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

    scheduleUser(user, date, shift) {
        scheduledDate.shifts[shift].push(user.name)
        this.userShiftCounter[user.name] += 1
        user.shiftsScheduled.push({ date: new Date(date), shift: shift} )
    }

    scheduleOneDay(day, userIndex) {
        let scheduledDate = day
        let returnIndex = this.users.length - userIndex
        for (let i = 0; i < this.users.length; i ++) {
            let user = this.users[i < returnIndex ? i + userIndex : i - returnIndex]    //start cycling through users at given userIndex
            if (user.timesAvailable.some(t => new Date(t.date) === new Date(day.date) && t.shift === "morning")
                && day.shifts.morning.length < 2) {
                    scheduledDate.shifts.morning.push(user.name)
                    this.userShiftCounter[user.name] += 1
                }
            else if (user.timesAvailable.some(t => new Date(t.date) === new Date(day.date) && t.shift === "afternoon")
                && day.shifts.afternoon.length < 2) {
                    scheduledDate.shifts.afternoon.push(user.name)
                    this.userShiftCounter[user.name] += 1
                }
            else { break }
        }
    }

    createSchedule() {
        const schedule = this.getDates()
        for (let date of schedule) {

        }
    }
}