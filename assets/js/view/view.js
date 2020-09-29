import {
    getCustomerDataApi
} from '../api/api'
import {
    getReservationsData
} from '../controller/controller'

export function GetCalenderResultHandelData(data) {
    $("#output4").empty();
    $("#reservation-div").removeClass("hidden");
    $("#submit").show();
    $("#black").css("display", "none");
    $("#output4").html(data.Status);

    setTimeout(function () {
        document.getElementById("output4").innerHTML = '';
    }, 10000);

    let value = data.Calender
    let disabled = [];

    for (let i = 0; i < value.length; i++) {
        if (value[i]['DayValidCheck'] !== 1) {
            let dateString = value[i]['DayValue'];

            let p = dateString.split(/\D/g);

            let date1 = [p[2], p[1], p[0]].join("-");

            if (!disabled.includes(date1)) {
                disabled.push(date1);
            }
        }
    }

    $("#createNewElement").html(`<label for="">Check In</label><div name="bday" id="from-reservation-2" data-date-format="dd-mm-yyyy"></div>`);
    $("#from-reservation-2").datepicker({
        dateFormat: 'dd-mm-yy',
        minDate: from,
        stepMonths: 0,
        numberOfMonths: 2,

        beforeShowDay: function (date) {
            let currentDate = moment(from);
            let stopDate = moment();
            while (currentDate < moment(stopDate).subtract(1, 'days')) {
                disabled.push(moment(currentDate).format('DD-MM-YYYY'))
                currentDate = moment(currentDate).add(1, 'days');
            }
            let string = jQuery.datepicker
                .formatDate(
                    'dd-mm-yy', date);
            return [disabled.indexOf(string) == -1]
        },

        onSelect: function () {
            $("#output5").empty();
            $("#output7").empty();
            let fromReservation = $("#from-reservation-2")
                .val();
            let start_date = $('#from-reservation-2').datepicker('getDate');
            format = function date2str(x, y) {
                let z = {
                    M: x.getMonth() + 1,
                    d: x.getDate(),
                    h: x.getHours(),
                    m: x.getMinutes(),
                    s: x.getSeconds()
                };
                y = y.replace(/(M+|d+|h+|m+|s+)/g, function (
                    v) {
                    return ((v.length > 1 ? "0" : "") +
                        eval('z.' + v.slice(-1))).slice(-2)
                });
                return y.replace(/(y+)/g, function (v) {
                    return x.getFullYear().toString().slice(-v.length)
                });
            }
            let dateString = format(start_date, 'MM-dd-yyyy');
            let startDate = new Date(dateString);
            let day = 60 * 60 * 24 * 1000 * nights;
            let d = new Date(startDate.getTime() + day);
            let toReservation = format(d, 'dd-MM-yyyy');

            $("#check_in").html(fromReservation);
            $("#check_out").html(toReservation);
            $("#output5").empty();
            $("#submit").show();
            $('#confirmationButton').trigger('click');
        },
    });

    $("#from-reservation-2").datepicker("refresh");
    $("#from-reservation-2").on("change", function () {
        $("#output").empty();
        $("#output5").empty();
        $("#output7").empty();
    });
}

export async function addResrvationHandelData(data) {
    $("#output5").empty();
    $("#output7").empty();

    let outputHtml;
    let condition = data.CheckCondition;
    console.log(condition);
    if (condition !== null) {
        for (let l = 0; l < condition.length; l++) {
            $("#output7").html(`${condition[l].CondText}`);
        }
        $("#output7").one("click", function () {
            for (let l = 0; l < condition.length; l++) {
                $("#output7").html(`${condition[l].CondToolTip}`);
            }
        });
    } else {
        await getCustomerDataApi(CustID);

    }
    if (condition == "null") {
        let member = $("#membership").val();
        member = member.trim();
        let items = {
            "remaining": data.RsltNum,
            "membership": member
        };

        localStorage.removeItem("remain");
        localStorage.setItem("remain", JSON.stringify(items));
        $("h3[data-remain=" + CustID + "]").html(data.RsltNum);
        $("h6").find("span[data-id=" + CustID + "]").html(data.RsltNum);
    }
}

export function reservationHistoryView(data, from_month, to_month, membership, From, To, currentDate) {
      let reservationsData = getReservationsData();
      if (currentDate > From) {
          if (currentDate.getMonth() == From
              .getMonth() && currentDate
              .getDate() == From.getDate() &&
              currentDate.getFullYear() ==
              From
              .getFullYear()) {
              let header = `<div class="col-lg-6 col-md-6 reservation-history-data-cols"><div class="history-data-cols-div">
                    
                    <button class="cancel-reservation" data-id="${data.OrderID}" onclick="cancel(${data.OrderID});" style="font-family: BebasNeue;
                    background: rgb(46, 171, 215);
                    color: rgb(255, 255, 255);
                    padding: 6px 20px;
                    font-size: 18px;
                    display: block;
                    border: none;">
                        ${reservationsData.cancel_history}
                    </button>`;
              html = header + content(data, reservationsData, membership, from_month, to_month, From, To);

          } else {
              console.log("yes");
              let header = `<div class="col-lg-6 col-md-6 reservation-history-data-cols"><div class="history-data-cols-div">`
              html = header + content(data, reservationsData, membership, from_month, to_month, From, To);
          }
      } else if (currentDate < From ||
          currentDate == From) {
          let header = `<div class="col-lg-6 col-md-6 reservation-history-data-cols"> <div class="history-data-cols-div">
            <button class="cancel-reservation" data-id="${data.OrderID}" onclick="cancel(${data.OrderID});" style="font-family: BebasNeue; background: rgb(46, 171, 215); color: rgb(255, 255, 255); padding: 6px 20px; font-size: 18px; display: block; border: none;">
                ${reservationsData.cancel_history}
            </button>`;

          html = heade + content(data, reservationsData, membership, from_month, to_month, From, To);
      }
    // $("#showHistoryData").empty();
    $("#showHistoryData").append(html);
}

export function allReservationView(data, from_month, to_month, membership, From, To, currentDate) {
    let reservationsData = getReservationsData();
    if (currentDate > From) {
        if (currentDate.getMonth() == From
            .getMonth() && currentDate
            .getDate() == From.getDate() &&
            currentDate.getFullYear() ==
            From
            .getFullYear()) {
            let header = `<div class="col-lg-6 col-md-6 reservation-history-data-cols"><div class="history-data-cols-div">
                    
                    <button class="cancel-reservation" data-id="${data.OrderID}" onclick="cancel(${data.OrderID});" style="font-family: BebasNeue;
                    background: rgb(46, 171, 215);
                    color: rgb(255, 255, 255);
                    padding: 6px 20px;
                    font-size: 18px;
                    display: block;
                    border: none;">
                        ${reservationsData.cancel_history}
                    </button>`;
            html = header + content(data, reservationsData, membership, from_month, to_month, From, To);

        } else {
            console.log("yes");
            let header = `<div class="col-lg-6 col-md-6 reservation-history-data-cols"><div class="history-data-cols-div">`
            html = header + content(data, reservationsData, membership, from_month, to_month, From, To);
        }
    } else if (currentDate < From ||
        currentDate == From) {
        let header = `<div class="col-lg-6 col-md-6 reservation-history-data-cols"> <div class="history-data-cols-div">
            <button class="cancel-reservation" data-id="${data.OrderID}" onclick="cancel(${data.OrderID});" style="font-family: BebasNeue; background: rgb(46, 171, 215); color: rgb(255, 255, 255); padding: 6px 20px; font-size: 18px; display: block; border: none;">
                ${reservationsData.cancel_history}
            </button>`;

        html = heade + content(data, reservationsData, membership, from_month, to_month, From, To);
    }
    $("#showHistoryData").append(html);
}

export function saveOrdersHandelData(data, from_month, to_month, membership, From, To, currentDate) {
    let reservationsData = getReservationsData();
        let history = JSON.parse(d);
        let membership = $("#membership").val();
     
            if (currentDate > From) {
                if (currentDate.getMonth() == From
                    .getMonth() && currentDate
                        .getDate() == From.getDate() &&
                    currentDate.getFullYear() ==
                    From
                        .getFullYear()) {
                    let header = `<div class="col-lg-6 col-md-6 reservation-history-data-cols"><div class="history-data-cols-div">
                    
                    <button class="cancel-reservation" data-id="${data.OrderID}" onclick="cancel(${data.OrderID});" style="font-family: BebasNeue;
                    background: rgb(46, 171, 215);
                    color: rgb(255, 255, 255);
                    padding: 6px 20px;
                    font-size: 18px;
                    display: block;
                    border: none;">
                        ${reservationsData.cancel_history}
                    </button>`;
                    html = header + content(data, reservationsData, membership, from_month, to_month, From, To);

                } else {
                    console.log("yes");
                    let header = `<div class="col-lg-6 col-md-6 reservation-history-data-cols"><div class="history-data-cols-div">`
                    html = header + content(data, reservationsData, membership, from_month, to_month, From, To);
                }
            } else if (currentDate < From ||
                currentDate == From) {
                let header = `<div class="col-lg-6 col-md-6 reservation-history-data-cols"> <div class="history-data-cols-div">
            <button class="cancel-reservation" data-id="${data.OrderID}" onclick="cancel(${data.OrderID});" style="font-family: BebasNeue; background: rgb(46, 171, 215); color: rgb(255, 255, 255); padding: 6px 20px; font-size: 18px; display: block; border: none;">
                ${reservationsData.cancel_history}
            </button>`;

                html = heade + content(data, reservationsData, membership, from_month, to_month, From, To);
            }

            $("#showHistoryData").append(html);
        
    
    $("#more-details").addClass("hidden");
    $("#showHistory").removeClass("hidden");
}

function content(data, reservationsData, membership, from_month, to_month, From, To) {
    return `
    <div class="history-data-cols-titl">${data.OrderID}</div>

    <div class="row">
    <div class="col-6"><h2><i class="icon fas fa-money-check"></i>${reservationsData.title}</h2></div>
    <div class="col-6"><h3>${data.type}</h3></div>
    </div>

    <div class="row">
    <div class="col-6"><h2><i class="icon fas fa-money-check"></i>${reservationsData.member_ship}</h2></div>
    <div class="col-6"><h3>${membership}</h3></div>
    </div>

    <div class="row">
    <div class="col-6"><h2><i class="icon far fa-clock"></i> ${reservationsData.from_lang}</h2></div>
    <div class="col-6"><h3>${From.getDate() + "-" + from_month + "-" + From.getFullYear()}</h3></div>
    </div>

    <div class="row">
    <div class="col-6"><h2><i class="icon far fa-clock"></i>${reservationsData.To_lang}</h2></div>
    <div class="col-6"><h3>${To.getDate() + "-" + to_month + "-" + To.getFullYear()}</h3></div>
    </div>

    <div class="row">
    <div class="col-6"><h2><i class="icon far fa-clock"></i> ${reservationsData.duration}</h2></div>
    <div class="col-6"><h3>${data.Duration} ${reservationsData.Nights_lang}</h3></div>
    </div>

    <div class="row">
    <div class="col-6"><h2><i class="icon fas fa-layer-group"></i> ${reservationsData.project_lang}</h2></div>
    <div class="col-6"><h3>${data.Project}</h3></div>
    </div>

    <div class="row">
    <div class="col-6"><h2><i class="icon fas fa-map-marker-alt"></i> ${reservationsData.zone_lang}</h2></div>
    <div class="col-6"><h3>${data.Zone}</h3></div>
    </div>

    <div class="row">
    <div class="col-6"><h2><i class="icon fas fa-chart-line"></i> ${reservationsData.floor_lang}</h2></div>
    <div class="col-6"><h3>${data.Floor}</h3></div></div></div>
    </div>`;
}

export function canceledHistory(data, from_month, to_month, membership, From, To, currentDate) {
    let reservationsData = getReservationsData();
    let html;
    html = content(data, reservationsData, membership, from_month, to_month, From, To);
    $("#showHistoryData").append(html);
}