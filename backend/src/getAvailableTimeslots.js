// 日本時間（JST）に変換
export function convertToJST(date) {
    const jsDate = new Date(date);
    jsDate.setHours(jsDate.getHours() + 9); // UTC+9 (日本時間)
    return jsDate;
}

// 空いている時間帯を生成　　　１時間単位のみ対応
export function getAvailableTimeslots(data, startTime = '2024-11-01T00:00:00', endTime = '2024-11-01T14:00:00') {
    // 1時間区切の配列を作成
    const availableTimes = [];
    const startDate = new Date(startTime);
    const endDate = new Date(endTime);

    for (let time = startDate; time <= endDate; time.setHours(time.getHours() + 1)) {
        const hour = time.getHours();
        const formattedTime = `${("0" + hour).slice(-2)}:00`;
        availableTimes.push(formattedTime);
    }

    data.forEach(item => {
        const bookedStart = new Date(item.start);
        const bookedEnd = new Date(item.end);

        // 予約時間帯を1時間ごとに区切り、空き時間から削除
        for (let time = new Date(bookedStart); time < bookedEnd; time.setHours(time.getHours() + 1)) {
            const hour = time.getHours();
            const formattedTime = `${("0" + hour).slice(-2)}:00`;
            if (item.isAllDay === false) {
                const index = availableTimes.indexOf(formattedTime);
                if (index !== -1) {
                    availableTimes.splice(index, 1); // 重複する時間帯削除
                }
            }
        }
    });
    // 日本時間に変換
    const availableTimesJST = availableTimes.map(time => {
        const [hour, minute] = time.split(":");
        const jstTime = String(Number(hour) + 9)
        const formattedJST = `${("0" + jstTime).slice(-2)}:${minute}`;
        return formattedJST;
    });

    return [{
        facilityId: data[0].facilityId,
        start: availableTimesJST
    }];
}



