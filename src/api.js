const API_URL = "https://clinic-appointment-system-gj83.onrender.com/appointments";

export async function createAppointment(appointment){
    const response = await fetch (API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
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

export async function updateAppointment(id, appointment) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(appointment),
  });

  if (!response.ok) {
    throw new Error("Failed to update appointment");
  }

  return await response.json();
}
export async function patchAppointment(id, updates) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updates),
  });

  if (!response.ok) {
    throw new Error("Failed to update appointment");
  }

  return await response.json();
}

export async function deleteAppointment(id) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete appointment");
  }

  return true;
}






















