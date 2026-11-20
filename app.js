let patientCollection = [];
let nextPatientId = 1;

document
.getElementById("addPatientBtn")
.addEventListener("click", addPatient);

function addPatient()
{
    let firstName =
    document.getElementById("firstName").value;

    alert(firstName);
}