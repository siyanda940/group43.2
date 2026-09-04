const deliveryForm = document.getElementById("deliveryForm");
const requestCreated = document.getElementById("requestCreated");
const requestId = document.getElementById("requestId");

const dispatcherSection = document.getElementById("dispatcherSection");

const dispatcherRequestId =
    document.getElementById("dispatcherRequestId");

const dispatcherCustomer =
    document.getElementById("dispatcherCustomer");

const dispatcherPhone =
    document.getElementById("dispatcherPhone");

const dispatcherAddress =
    document.getElementById("dispatcherAddress");

const dispatcherItem =
    document.getElementById("dispatcherItem");

const riderSelect =
    document.getElementById("riderSelect");

const assignButton =
    document.getElementById("assignButton");


let currentDelivery = null;


// CREATE DELIVERY REQUEST
deliveryForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const generatedId =
        "RQ-" + Math.floor(100000 + Math.random() * 900000);

    currentDelivery = {
        id: generatedId,
        customer:
            document.getElementById("customerName").value,
        phone:
            document.getElementById("phone").value,
        address:
            document.getElementById("address").value,
        item:
            document.getElementById("item").value,
        status: "PENDING"
    };

    requestId.textContent = currentDelivery.id;

    requestCreated.classList.remove("hidden");

    // Send the request information to dispatcher
    dispatcherRequestId.textContent =
        currentDelivery.id;

    dispatcherCustomer.textContent =
        currentDelivery.customer;

    dispatcherPhone.textContent =
        currentDelivery.phone;

    dispatcherAddress.textContent =
        currentDelivery.address;

    dispatcherItem.textContent =
        currentDelivery.item;

    dispatcherSection.classList.remove("hidden");

    deliveryForm.reset();

});


// ASSIGN RIDER
assignButton.addEventListener("click", function() {

    const selectedRider = riderSelect.value;

    if (selectedRider === "") {
        alert("Please select a rider first.");
        return;
    }

    currentDelivery.status = "ASSIGNED";
    currentDelivery.rider = selectedRider;

    alert(
        "Delivery " +
        currentDelivery.id +
        " has been assigned to Rider " +
        selectedRider
    );

});