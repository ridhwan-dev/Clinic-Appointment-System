const appointmentDate = document.getElementById("appointment-date")

if (appointmentDate) {
                   
      const today = new Date().toISOString().split("T")[0];
appointmentDate.min = today;
}