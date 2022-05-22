export const displayDate =  (target) => {
    const dateOptions = { year: "numeric", month: "short", day: "numeric"};
    let results = new Date(target);
    results = results.toLocaleDateString("en-us", dateOptions);

    return results;
}
