const API_URL = "http://localhost:3000/appointments";

export async function createAppointment(appointment){
    const response = await fetch (API_URL, {
        method: "POST",
        headers: {
            "content-Type": "application/json"
        },
        body: JSON.stringify(appointment)
    });

    if (!response.ok) {
        throw new Error("Failed to save appointment");
    }
    return await response.json();

}
export async function getAppointments() {
    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error("Failed to fetch appointments");

    }
    return await response.json();
}


























