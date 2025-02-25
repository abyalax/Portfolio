export function validateImageExtension(imageUrl: string) {
    if (!imageUrl) {
        console.log("No image URL provided");
        return false;
    }
    const extensionPart = imageUrl.split('?')[0];
    const extension = extensionPart.split('.').pop()?.toLowerCase();
    if (!extension) {
        return false;
    }
    const validExtensions = ["jpg", "jpeg", "png", "gif", "bmp", "webp"];
    if (validExtensions.includes(extension)) {
        return true;
    } else {
        return false
    }
}

export function formatDateForSQL(date: string | undefined) {
    if (date === undefined) return undefined
    const dateObj = new Date(date);
    return dateObj.toLocaleString('sv-SE', { timeZone: 'UTC' }).replace('T', ' ');
}

export function formatDate(dateString: Date | null | string) {
    const daysOfWeek = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"];
    const months = [
        "Janurari", "Februari", "Maret", "April", "Mei", "Juni", "Juli",
        "Agustus", "September", "Oktober", "November", "Desember"
    ];
    if (dateString == null) return "";
    const date = new Date(dateString);
    const dayName = daysOfWeek[date.getDay()];
    const day = date.getDate();
    const monthName = months[date.getMonth()];
    const year = date.getFullYear();

    return `${dayName}, ${day} ${monthName} ${year}`;
}