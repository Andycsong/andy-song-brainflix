

const FormatDate = (time) => {
    const formatter = new Intl.DateTimeFormat('en-US', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    });
    const dateFormat = new Date(time);
    return formatter.format(dateFormat)
}

export default FormatDate
