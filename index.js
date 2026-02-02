// DOM Elements
const equipmentName = document.getElementById("equipmentName");
const equipmentType = document.getElementById("equipmentType");
const equipmentStatus = document.getElementById("equipmentStatus");
const checkDate = document.getElementById("checkDate");
const addBtn = document.getElementById("addBtn");
const equipmentList = document.getElementById("equipmentList");
const errorMsg = document.getElementById("errorMsg");

// Event Listener
addBtn.addEventListener("click", function () {

    // Validation
    if (
        equipmentName.value === "" ||
        equipmentType.value === "" ||
        equipmentStatus.value === "" ||
        checkDate.value === ""
    ) {
        errorMsg.textContent = "Fadlan dhammaan xogta buuxi!";
        return;
    }

    errorMsg.textContent = "";

    // Create list item (DOM)
    const li = document.createElement("li");
    li.textContent =
        "Equipment: " + equipmentName.value +
        " | Type: " + equipmentType.value +
        " | Status: " + equipmentStatus.value +
        " | Date: " + checkDate.value;

    equipmentList.appendChild(li);

    // Clear form
    equipmentName.value = "";
    equipmentType.value = "";
    equipmentStatus.value = "";
    checkDate.value = "";
});

