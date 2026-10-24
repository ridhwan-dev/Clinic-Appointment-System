import { createAppointment , getAppointments, updateAppointment, patchAppointment, deleteAppointment} from "./api.js";


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


getAppointments()
.then((appointments) => {
      console.log("Saved appointments:",  appointments);

})
.catch((error) => {
      console.error("Error fetching appointments:", error);


});

async function displayAppointments() {
      const appointmentsList = document.getElementById("appointments-list");


      if(!appointmentsList) {
            return;

      }
      appointmentsList.textContent = "Loading appointments...";

      try {
            const appointments = await getAppointments();

            appointmentsList.replaceChildren();

            if (appointments.length === 0) {
                  appointmentsList.textContent = "No appointments have been booked yet.";
                  return;

            }

            appointments.forEach ((appointment) => {
                  const appointmentCard = document.createElement("article");
                  const patientName = document.createElement("p")
                  const appointmentDate = document.createElement("p");

                  patientName.textContent = 
                  `patient: ${appointment.appointmentPatient || "Not provided"}`;

                  appointmentDate.textContent =
                  `Date: ${appointment.appointmentDate || appointment.date || "Not provided"}`;

const appointmentDoctor = document.createElement("p");

appointmentDoctor.textContent =
  `Doctor: ${appointment.appointmentDoctor || "Not assigned"}`;const deleteButton = document.createElement("button");

deleteButton.textContent = "Delete Appointment";

deleteButton.addEventListener("click", async () => {
  const confirmed = confirm("Are you sure you want to delete this appointment?");

  if (!confirmed) {
    return;
  }

  try {
    await deleteAppointment(appointment.id);
    await displayAppointments();
  } catch (error) {
    console.error("Error deleting appointment:", error);
    alert("Unable to delete appointment. Please try again.");
  }
});











                  appointmentCard.append(
                   patientName,
                   appointmentDate,
                   appointmentDoctor,
                   deleteButton
                  );
                  
                  appointmentsList.appendChild(appointmentCard)
            
            });

            
            
      }catch (error) {

    console.error("Error displaying appointments:", error);

    appointmentsList.textContent =

      "Unable to load appointments. Please try again later.";

  }

}

displayAppointments();






      






















































