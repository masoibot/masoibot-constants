export function formatRemainTime(seconds: number): string {
    if (seconds <= 0) return "00:00";
    let hour = Math.floor(seconds / 3600);
    let minute = Math.floor((seconds - hour * 3600) / 60);
    let second = seconds - hour * 3600 - minute * 60;
    return hour > 0
        ? `${hour}:${("0" + minute).slice(-2)}:${("0" + second).slice(-2)}`
        : `${("0" + minute).slice(-2)}:${("0" + second).slice(-2)}`;
}
