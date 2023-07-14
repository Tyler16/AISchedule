import dayjs from 'dayjs'

export function getMonth(month = dayjs().month()) {
    const year = dayjs().year();
    const firstDayOfMonth = dayjs(new Date(year, month, 1)).day();
    let currentDayCount = -firstDayOfMonth
    const daysMatrix = new Array(5).fill(null).map(() => {
        return new Array(7).fill(null).map(() => {
            currentDayCount++;
            return dayjs(new Date(year, month, currentDayCount))
        })
    });
    return daysMatrix
}