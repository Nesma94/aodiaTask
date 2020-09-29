import {
    GetCalenderResultApi,
    addResrvationApi,
    editRentalApi,
    reservationHistory,
    getAllReservation,
    cancelApi,
    getCanceledHistoryApi,
    confirmCancelationApi,
} from '../api/api';


function find() {
    $("#reservation-div").addClass("hidden");

    let from_month = $("#month").val();
    let year = $("#year").val();

    if (from_month < 10) {
        from_month = '0' + from_month;
    }

    let from = '01-' + from_month + "-" + year;
    let newdate = new Date();
    let From = new Date(from);
    let nowMonth = newdate.getMonth() + 1;

    if (nowMonth > from_month) {
        $("#output4").html("we can’t check for availability in past month");
    } else {
        $("#output4").html("Please wait...");
        CalendarAPI(from);
    }
}

function editRental() {
    $("#output3").empty();
    $("#submit-rental").show();
}

function GetCalenderResultData(from) {
    let data = {
        Date_from: from,
        nights: $("#nights").val(),
        CustID: $("#current_cust_id").val(),
        CustTypeDesc: $("#custtype").val(),
        MasterDataProject: $("#master").val(),
        Zone: $("#zone").val(),
        Prg: $("#project").val(),
        Floor: $("#floor").val(),
    };

    return data;
}

function CalendarAPI(start) {
    if (from_month < 10) {
        from_month = '0' + from_month;
    }
    let from = '01-' + from_month + "-" + year;

    $("#from-reservation-2").datepicker("destroy");

    $("#createNewElement").html('');

    let data = GetCalenderResultData(from);

    GetCalenderResultApi(data)
}

function addResrvationURL() {
    let url = 'https://technicalcls.reflection-eg.com/api/Reservation/AddResrvation?' +
        'Date_from=' + $("#check_in").html() +
        '&Date_to=' + $("#check_out").html().trim() +
        '&Prg=' + $("#project").val().trim() +
        '&Zone=' + $("#zone").val().trim() +
        '&Floor=' + $("#floor").val().trim() +
        '&CustID=' + $("#current_cust_id").val().trim() +
        '&CustTypeDesc=' + $("#custtype").val().trim() +
        '&MasterDataProject=' + $("#master").val().trim() +
        '&Lang=' + $("#lang").val();

    return url;
}

function addResrvation() {

    if ($("#from-reservation-2").val() == "") {
        $("#output").html("Please choose check in date...");
    } else {

        $("#output5").empty();
        $("#submit").hide();
        $("#output5").html("Please wait...");

        let url = addResrvationURL();

        addResrvationApi(url);

    }
}

function editRental() {
    let id = $("#current_cust_id").val();
    let rental = $("#rental").val();
    let lang = $("#lang").val();

    $("#submit-rental").hide();

    if ($("#rental").val() == "") {
        $("#output3").html("Please Enter New Balance..");
    } else {
        $("#output3").html("Please wait..");

        editRentalApi(id, rental, lang);
    }
}

export function updateCustomerDataInLocalStorage(data, member) {

    let customerData = {
        "deduction": {
            "deduction": data.DeductionBalance,
            "membership": member
        },
        "remain": {
            "remaining": data.RemBalance,
            "membership": member
        },
        "original": {
            "duration": data.Duration,
            "membership": member
        },
        "reserve": {
            "personal": data.PersonalUsage,
            "membership": member
        },
        "rental": {
            "newRental": data.RenatlBalance,
            "membership": member
        },
        "cancelation": {
            "cancelation": data.DeductDueCncl,
            "membership": member
        },
    };

    localStorage.removeItem("customerData");
    localStorage.setItem("customerData", JSON.stringify(customerData));
}

export function getReservationsData() {
    return {
        title: $("#title").val(),
        member_ship: $("#member_ship").val(),
        To_lang: $("#To").val(),
        cancel_history: $("#cancel_history").val(),
        from_lang: $("#from").val(),
        Nights_lang: $("#Nights_lang").val(),
        zone_lang: $("#zone_lang").val(),
        project_lang: $("#project_lang").val(),
        floor_lang: $("#floor_lang").val(),
        duration: $("#duration").val()
    }
}

export function showReservationHistory() {
    let id = $("#current_cust_id").val();
    $("#all-history").css("background", "#2eabd7");
    $("#all-history").css("color", "white");
    $("#cancel-history").css("background", "white");
    $("#cancel-history").css("color", "#2eabd7");
    $("#showHistoryData").empty();
    reservationHistory(id)

}

export function AllReservations() {
    let membership = $("#membership").val();
    $("#showHistoryData").empty();
    $("#all-history").css("background", "#2eabd7");
    $("#all-history").css("color", "white");
    $("#cancel-history").css("background", "white");
    $("#cancel-history").css("color", "#2eabd7");
    getAllReservation(membership);
}

export function cancel(id) {
    let membership = id;
    $("#card_id").val(membership);
    let newCustID = $("#current_cust_id").val();
    let lang = $("#lang").val();
    cancelApi(lang, membership, newCustID);

}

export function getCanceledReservationHistory() {
    let membership = $("#membership").val();
    $("#showHistoryData").empty();
    $("#cancel-history").css("background", "#2eabd7");
    $("#cancel-history").css("color", "white");
    $("#all-history").css("background", "white");
    $("#all-history").css("color", "#2eabd7");
    getCanceledHistoryApi(membership);
}

export function cancelConfirmation() {
    let membership = $("#card_id").val();
    let newCustID = $("#current_cust_id").val();
    let lang = $("#lang").val();
    confirmCancelationApi(membership, newCustID, lang);
}
