export const arrayReformed = (array: any[], field: { label: string, value: string }) => {
    if (!array?.length) {
        return []
    };
    let newArray = [];

    for (let index = 0; index < array.length; index++) {
        newArray.push({
            label: array[index][field.label],
            value: array[index][field.value],
        })

    };
    return newArray
}