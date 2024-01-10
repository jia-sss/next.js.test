import { useState } from "react";
import dayjs from "dayjs";
import c from "clsx";

const leapYearMonthList = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // 闰年每月天数
const commonYearMonthList = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // 平年每月天数

const weekList = [
    { id: 0, name: "周日" },
    { id: 1, name: "周一" },
    { id: 2, name: "周二" },
    { id: 3, name: "周三" },
    { id: 4, name: "周四" },
    { id: 5, name: "周五" },
    { id: 6, name: "周六" },
];

// 判断当月天数
function monthDayCount(year: number, month: number) {
    if (year % 4 === 0 && year % 100 !== 0) {
        return leapYearMonthList[month];
    } else {
        return commonYearMonthList[month];
    }
}

// 获取某年某月第一天是星期几
function getFirstDayWeek(year: number, month: number) {
    return new Date(year, month, 1).getDay();
}

function splitIntoWeeks(totalDays: number, firstDayWeek: number, date: Date) {
    // 创建一个长度为 totalDays 的数组，元素值为其索引值加 1
    const days: ({
        day: number;
        isToday: boolean;
    } | null)[] = Array.from({ length: totalDays }, (_, i) => {
        return {
            day: i + 1,
            isToday: dayjs().isSame(
                new Date(date.getFullYear(), date.getMonth(), i + 1),
                "day",
            ),
        };
    });

    // 在数组的开始添加 firstDayWeek 个 null 元素
    for (let i = 0; i < firstDayWeek; i++) {
        days.unshift(null);
    }

    // 计算需要多少个数组来存储这些天数
    const weeksCount = Math.ceil(days.length / 7);

    // 创建一个数组，每个元素是一个包含 7 个天数的数组
    const weeks = Array.from({ length: weeksCount }, (_, i) =>
        days.slice(i * 7, i * 7 + 7),
    );

    // 检查最后一组的长度，如果不足 7 天，就用 null 补齐到 7 天
    const lastWeek = weeks[weeks.length - 1];
    while (lastWeek.length < 7) {
        lastWeek.push(null);
    }

    return weeks;
}

export default function Calendar() {
    const [date, setDate] = useState(new Date());

    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    console.log(year, month, day);

    const totalDayDays = monthDayCount(year, month);
    const firstDayWeek = getFirstDayWeek(year, month);

    const currentMonth = splitIntoWeeks(totalDayDays, firstDayWeek, date);
    console.log(totalDayDays, currentMonth);

    return (
        <div>
            <div>
                <button
                    onClick={() => {
                        const newDate = dayjs(date)
                            .subtract(1, "month")
                            .toDate();
                        setDate(newDate);
                    }}
                >
                    上个月
                </button>
                <span>
                    {year}年{month + 1}月
                </span>
                <button
                    onClick={() => {
                        const newDate = dayjs(date).add(1, "month").toDate();
                        setDate(newDate);
                    }}
                >
                    下个月
                </button>
            </div>
            <table className="border-collapse">
                <thead>
                    <tr>
                        {weekList.map(week => (
                            <th key={week.id} className="border border-solid">
                                {week.name}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {currentMonth.map((tr, index) => (
                        <tr key={index}>
                            {tr.map((day, i) => (
                                <td
                                    key={i}
                                    className={c("border", "border-solid", {
                                        "bg-orange-400": day?.isToday,
                                    })}
                                >
                                    {day?.day}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
