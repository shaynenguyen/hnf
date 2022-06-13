export const displayFullDateMonthYear =  (target) => {
    const dateOptions = { year: "numeric", month: "short", day: "numeric"};
    let results = new Date(target);
    results = results.toLocaleDateString("en-us", dateOptions);

    return results;
}

export const displayDayMonth = (target) => {
    const dateOptions = { month: "short", day: "numeric"};
    let results = new Date(target);
    results = results.toLocaleDateString("en-us", dateOptions);

    return results;
}

export const displayDay = (target) => {
    const dateOptions = { day: "numeric"};
    let results = new Date(target);
    results = results.toLocaleDateString("en-us", dateOptions);

    return results;
}
