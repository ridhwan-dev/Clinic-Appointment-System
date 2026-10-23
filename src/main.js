import { createAppointment } from "./api.js";


const appointmentDate = document.getElementById("appointment-date")

if (appointmentDate) {
                   
      const today = new Date().toISOString().split("T")[0];
appointmentDate.min = today;
}

const appointmentForm = document.getElementById("appointment-form")
if (appointmentForm) {
      appointmentForm.addEventListener("submit",async function (event) {
            event.preventDefault();
            const formData = new FormData(appointmentForm);
            const appointment = Object.fromEntries(formData.entries());

            try {
                  await createAppointment(appointment);
                  alert("Appointment booked successfully!");
                  appointmentForm.reset();

            }catch (error) {
                  console.error("Error saving appointment:", error);
                  alert("Sorry, we couldnt save your appointment. Please try again.");

            }
               
      });

      
}
