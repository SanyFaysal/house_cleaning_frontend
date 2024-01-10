export function objectToQueryString(obj: any) {
    return new URLSearchParams(obj).toString();
}
