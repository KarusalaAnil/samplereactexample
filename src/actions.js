export function updateLoginStatus(status) {
    console.log(status);
    return { 'type': 'updateLoginStatus', payload: status }
}