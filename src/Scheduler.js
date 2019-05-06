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

    scheduleOneDay(day) {
        let scheduledDate
        for (let user of this.users) {
            if (user.some(u => u.date === day.date) && day.shifts.morning.length < 2) {
                day.shifts.morning.push(u.name)
            }
            else if (user.some(u => u.date === day.date) && day.shifts.morning.length < 2) {
                day.shifts.morning.push(u.name)
            }
        }
    }

    createSchedule() {
        const schedule = this.getDates()
        for (let date of schedule) {

        }
    }
}