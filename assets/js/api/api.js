import {
    GetCalenderResultHandelData,
    addResrvationHandelData,
    saveOrdersHandelData,
    reservationHistoryView,
    allReservationView,
    canceledHistory,
} from '../view/view'

import {
    updateCustomerDataInLocalStorage,
    getReservationsData
} from '../controller/controller'


export function GetCalenderResultApi(data) {
    return $.ajax({
        type: 'GET',
        url: 'https://technicalcls.reflection-eg.com/api/Reservation/GetCalenderResult',
        data: data,
        success: function (response) {
            GetCalenderResultHandelData(response)
        },
        cache: false,
    });
}

export function addResrvationApi(url) {
    return $.ajax({
        type: 'POST',
        dataType: "json",
        contentType: "application/json",
        cache: false,
        async: false,
        url: url,

        success: function (response) {
            addResrvationHandelData(data);
        },
        cache: false,
    });
}

export function getCustomerDataApi(id) {
    return $.ajax({
        type: 'GET',
        url: 'https://technicalcls.reflection-eg.com/api/Customers/GetData?id=' + id.trim(),
        success: function (response) {
            let data = response.Customers[0];
            console.log(data.Duration);
            $("h3[data-original=" + id + "]").html(data.Duration);
            $("h3[data-reserve=" + id + "]").html(data.PersonalUsage);
            $("h3[data-current-rental=" + id + "]").html(data.RenatlBalance);
            $("h3[data-remain=" + id + "]").html(data.RemBalance);
            // $("#output5").html(msg.SaveMessage);
            $("h6").find("#card-remaining").html(data.RsltNum);
            $("#showHistoryData").empty();
            let member = $("#membership").val();
            member = member.trim();

            // update customer data
            updateCustomerDataInLocalStorage(data, member)
        }
    });
}

export function editRentalApi(id, rental, lang) {
    return $.ajax({
        type: 'POST',
        url: 'https://technicalcls.reflection-eg.com/api/Reservation/EditRental?CustID=' +
            id + '&NewBalance=' + rental + '&Lang=' + lang,

        success: function (msg) {
            $("#output3").empty()
            $("#output3").html(msg.Msg);
            if (msg.Msg !== 'Rental Balance Updated') {
                $("#submit-rental").hide();
            }
            $("#current_rental").empty();
            let member = $("#membership").val();
            member = member.trim();

            getCustomerDataApi(id)
        }
    });
}

export function GetReservationsApi(id) {
    return $.ajax({
        type: 'GET',
        url: 'https://technicalcls.reflection-eg.com/api/Reservation/GetReservations',
        data: {
            CustID: id
        },
        success: function (msg) {
            saveOrdersApi (msg.Orders)
        }
    });
}

function saveOrdersApi (orders) {
    $.ajax({
        type: 'POST',
        url: 'https://socialnuts-projects.com/2019/porto/home/save',
        data: {
            value: orders
        },
        success: function (response) {
             
             if (d !== "empty") {
                 let history = JSON.parse(d);
                 let membership = $("#membership").val();
                 for (let i = 0; i < history.length; i++) {
                     let currentDate = new Date();
                     let FROM = history[i].From;
                     FROM = FROM.split("T");

                     let From = new Date(FROM[0]);
                     let TO = history[i].To;
                     TO = TO.split("T");
                     let To = new Date(TO[0]);
                     from_month = From.getMonth() + 1;
                     to_month = To.getMonth() + 1;
                    saveOrdersHandelData(history[i], from_month, to_month, membership, From, To, currentDate)
                    }
                }
          
        }
    });
}

export function getAllReservation(membership) {
    $.ajax({
        type: 'POST',
        url: 'https://socialnuts-projects.com/2019/porto/home/getAll',
        data: {
            member: membership
        },
        success: function (d) {
            let history = JSON.parse(d);
            let my_date = new Date();

            for (let i = 0; i < history.length; i++) {
                console.log(history[i].From);
                let FROM = history[i].From;
                FROM = FROM.split("T");
                let From = new Date(FROM[0]);
                let TO = history[i].To;
                TO = TO.split("T");
                let To = new Date(TO[0]);
                from_month = From.getMonth() + 1;
                to_month = To.getMonth() + 1;
                let currentDate = new Date();
                allReservationView(history[i], from_month, to_month, membership, From, To, currentDate)
            }
            $("#more-details").addClass("hidden");
            $("#showHistory").removeClass("hidden");

        }
    });

}

export function cancelApi(lang, membership, newCustID) {
    $.ajax({
        type: 'POST',
        url: 'https://technicalcls.reflection-eg.com/api/Reservation/CancelReservation?Ord=' +
            membership + '&Lang=' + lang + '&IsConfirmed=0',
        success: function (d) {
            $.ajax({
                type: 'GET',
                url: 'https://technicalcls.reflection-eg.com/api/Customers/GetData?id=' +
                    newCustID.trim(),
                success: function (msg1) {
                    let msg2 = msg1.Customers;
                    $("h3[data-original=" + newCustID + "]").html(msg2[0].Duration);
                    $("h3[data-reserve=" + newCustID + "]").html(msg2[0]
                        .PersonalUsage);
                    $("h3[data-current-rental=" + newCustID + "]").html(msg2[0]
                        .RenatlBalance);
                    $("h3[data-remain=" + newCustID + "]").html(msg2[0].RemBalance);
                    $("h3[data-remain=" + newCustID + "]").html(msg2[0].RemBalance);
                    $("h6").find("#card-remaining").html(msg2[0].RemBalance);
                    $("#output5").html(msg1.SaveMessage);
                    let member = $("#membership").val();
                    member = member.trim();
                    updateCustomerDataInLocalStorage(msg2[0], member)
                    $(".close").trigger("click");
                    $("#confirm_msg").html("");
                    $("#confirm_msg").html(d.Msg);
                    $("#cancelConfirmationButton").trigger("click");
                }
            });

        }
    });
}


export function getCanceledHistoryApi(membership){
     $.ajax({
         type: 'POST',
         url: 'https://socialnuts-projects.com/2019/porto/home/get',
         data: {
             member: membership
         },
         success: function (d) {
             var history = JSON.parse(d);
             var my_date = new Date();
             for (var i = 0; i < history.length; i++) {
                 var FROM = history[i].From;
                 FROM = FROM.split("T");
                 var From = new Date(FROM[0]);
                 var TO = history[i].To;
                 TO = TO.split("T");
                 var To = new Date(TO[0]);
                 from_month = From.getMonth() + 1;
                 to_month = To.getMonth() + 1;
                  canceledHistory(history[i], from_month, to_month, membership, From, To, currentDate)
             }
             $("#more-details").addClass("hidden");
             $("#showHistory").removeClass("hidden");

         }
     });
}
export function confirmCancelationApi(newCustID,membership,lang) {
     $.ajax({
         type: 'POST',
         url: 'https://technicalcls.reflection-eg.com/api/Reservation/CancelReservation?Ord=' +
             membership + '&Lang=' + lang + '&IsConfirmed=1',
         success: function (d) {
             $(".close").trigger("click");
             $("#msg").html("");
             $("#msg").html(d.Msg);
             $("#cancelationButton").trigger("click");

             var id = $("#current_cust_id").val();
             $("#all-history").css("background", "#2eabd7");
             $("#all-history").css("color", "white");
             $("#cancel-history").css("background", "white");
             $("#cancel-history").css("color", "#2eabd7");
             $("#showHistoryData").empty();

             $.ajax({
                 type: 'GET',
                 url: 'https://technicalcls.reflection-eg.com/api/Customers/GetData?id=' +
                     newCustID.trim(),
                 success: function (msg1) {
                     var msg2 = msg1.Customers;
                     $("h3[data-original=" + newCustID + "]").html(msg2[0]
                         .Duration);
                     $("h3[data-reserve=" + newCustID + "]").html(msg2[0]
                         .PersonalUsage);
                     $("h3[data-current-rental=" + newCustID + "]").html(
                         msg2[0].RenatlBalance);
                     $("h3[data-remain=" + newCustID + "]").html(msg2[0]
                         .RemBalance);
                     $("h3[data-cancel=" + newCustID + "]").html(msg2[0]
                         .DeductDueCncl);
                     $("h3[data-deduction=" + newCustID + "]").html(msg2[0]
                         .DeductionBalance);
                     $("#output5").html(msg1.SaveMessage);
                     var member = $("#membership").val();
                     member = member.trim();
                     updateCustomerDataInLocalStorage(msg2[0], member);
                     $("h3[data-remain=" + newCustID + "]").html(msg2[0]
                         .RemBalance);
                     $("h6").find("#card-remaining").html(msg2[0]
                         .RemBalance);

                 }
             });
           reservationHistory(newCustID);

         }
     });
}