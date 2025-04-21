export function getFormattedDate(date) {
    // getMonth() starting index is 0. 0 -> Jan, 11-> Dec and to get correct month we have added +1
    // return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    return date.toISOString().slice(0,10);
}

export function getDateMinusDays(date, days) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
  }