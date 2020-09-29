var ix = 0;

var currentTime = new Date();

var dateToday = new Date();

var disabled = [];






// $("#new_reservation").on("click",function(){

//     setTimeout(rent_interval, 1000);

//     setTimeout(success_interval, 1000);

// });

$("#edit_rental").on("click", function () {
    $("#output3").empty();
    $("#submit-rental").show();

});

$("#find").on("click", function () {

    $("#reservation-div").addClass("hidden");

    var from_month = $("#month").val();

    var year = $("#year").val();

    if (from_month == 1) {

        from_month = '01';

    } else if (from_month == 2) {

        from_month = "02";

    } else if (from_month == 3) {

        from_month = "03";

    } else if (from_month == 4) {

        from_month = "04";

    } else if (from_month == 5) {

        from_month = "05";

    } else if (from_month == 6) {

        from_month = "06";

    } else if (from_month == 7) {

        from_month = "07";

    } else if (from_month == 8) {

        from_month = "08";

    } else if (from_month == 9) {

        from_month = "09";

    }

    var from = '01-' + from_month + "-" + year;
    var newdate = new Date();
    var From = new Date(from);
    var nowMonth = newdate.getMonth() + 1
    if(nowMonth > from_month){
        $("#output4").html("we can’t check for availability in past month");
    }else{
        $("#output4").html("Please wait...");
        CalendarAPI(from);
    }
console.log(from);
});


$("#submit_history").on("click", function () {

    var from = $("#from_history").val();

    var to = $("#to_history").val();

    var id = $("#current_cust_id").val();

    $("#output1").html("Please wait..");

    $.ajax({

        type: 'GET',

        url: 'https://technicalcls.reflection-eg.com/api/Reservation/GetReservations',

        data: {

            Date_from: from,

            Date_to: to,

            CustID: id

        },

        success: function (msg) {

            $("#output1").empty();

            $("#submit_history").hide();

            $("#output1").html(msg.Status);



        }

    });

});

$("#submit-rental").on("click", function () {

    var id = $("#current_cust_id").val();

    var rental = $("#rental").val();
    var lang = $("#lang").val();
    // if(lang == "en"){
    //     lang ="EN";
    // }else{
    //     lang= "AR";
    // }


    $("#submit-rental").hide();



    if ($("#rental").val() == "") {

        $("#output3").html("Please Enter New Balance..");



        setTimeout(function () {

            $("#output3").empty();

            $("#submit-rental").show();

        }, 100000000);

    } else {

        $("#output3").html("Please wait..");

        $.ajax({

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
                var member = $("#membership").val();
                member = member.trim();

                // localStorage.removeItem("rental");

                // var items = {

                //     "newRental": msg.RsltNum,

                //     "membership": member

                // };

                // localStorage.setItem("rental", JSON.stringify(items));

                // $("#current_rental").html(msg.RsltNum);

                $.ajax({
                    type: 'GET',
                    url: 'https://technicalcls.reflection-eg.com/api/Customers/GetData?id=' + id.trim(),
                    success: function (msg1) {
                        var msg2 = msg1.Customers;
                        console.log(msg2[0].Duration);
                        $("h3[data-original=" + id + "]").html(msg2[0].Duration);
                        $("h3[data-reserve=" + id + "]").html(msg2[0].PersonalUsage);
                        $("h3[data-current-rental=" + id + "]").html(msg2[0].RenatlBalance);
                        $("h3[data-remain=" + id + "]").html(msg2[0].RemBalance);
                        $("#output5").html(msg.SaveMessage);
                        var member = $("#membership").val();
                        member = member.trim();

                        localStorage.removeItem("remain");

                        var items = {

                            "remaining": msg2[0].RemBalance,

                            "membership": member

                        };
                        var items1 = {

                            "duration": msg2[0].Duration,

                            "membership": member

                        };
                        var items2 = {

                            "personal": msg2[0].PersonalUsage,

                            "membership": member

                        };
                           var items3 = {

                               "newRental": msg2[0].RenatlBalance,

                               "membership": member

                           };
                           var items4 = {

                               "cancelation": msg2[0].DeductDueCncl,

                               "membership": member

                           };
                        var items5 = {

                            "deduction": msg2[0].DeductionBalance,

                            "membership": member

                        };

                        localStorage.setItem("deduction", JSON.stringify(
                            items5));

                        localStorage.setItem("remain", JSON.stringify(items));
                        localStorage.setItem("original", JSON.stringify(items1));
                        localStorage.setItem("reserve", JSON.stringify(items2));
                        localStorage.setItem("rental", JSON.stringify(items3));
                        localStorage.setItem("cancelation", JSON.stringify(items4));

                        // $("h3[data-remain=" + id + "]").html(success.RsltNum);
                        // $("h6").find("#card-remaining").html(success.RsltNum);
                    }
                });

                setTimeout(function () {

                    $("#rental-close").trigger("click");

                }, 100000000);

            }

        });

    }

});


function CalendarAPI(start) {



    ix++;

    if (ix == 1) {

        var from_month = $("#month").val();

        var year = $("#year").val();

        // var from = '<?=date("d-m-Y")?>';

        if (from_month == 1) {

            from_month = '01';

        } else if (from_month == 2) {

            from_month = "02";

        } else if (from_month == 3) {

            from_month = "03";

        } else if (from_month == 4) {

            from_month = "04";

        } else if (from_month == 5) {

            from_month = "05";

        } else if (from_month == 6) {

            from_month = "06";

        } else if (from_month == 7) {

            from_month = "07";

        } else if (from_month == 8) {

            from_month = "08";

        } else if (from_month == 9) {

            from_month = "09";

        }

        var from = '01-' + from_month + "-" + year;

    } else {

        from = start;

    }

    $("#from-reservation-2").datepicker("destroy");

    $("#createNewElement").html('');

    var nights = $("#nights").val();

    var CustID = $("#current_cust_id").val();

    var custtype = $("#custtype").val();

    var master = $("#master").val();

    var zone = $("#zone").val();

    var project = $("#project").val();

    var floor = $("#floor").val();
    var url = "https://technicalcls.reflection-eg.com/api/Reservation/GetCalenderResult?Date_from=" + from + "&nights=" + nights + "&CustID=" + CustID + "&Prg=" + project + "&Zone=" + zone + "&Floor=" + floor + "&CustTypeDesc=" + custtype + "&MasterDataProject=" + master;
    console.log(url);
    $.ajax({

        type: 'GET',

        url: 'https://technicalcls.reflection-eg.com/api/Reservation/GetCalenderResult',

        data: {

            Date_from: from,

            nights: nights,

            CustID: CustID,

            Prg: project,

            Zone: zone,

            Floor: floor,

            CustTypeDesc: custtype,

            MasterDataProject: master,

        },

        success: function (msg) {

            $("#output4").empty();

            $("#reservation-div").removeClass("hidden");

            $("#submit").show();

            $("#black").css("display", "none");

            $("#output4").html(msg.Status);

            setTimeout(function () {

                document.getElementById("output4").innerHTML =

                    '';

            }, 10000);

            var value = msg.Calender

            var array = [];

            var disabled = [];

            for (var i = 0; i < value.length; i++) {

                if (value[i]['DayValidCheck'] !== 1) {

                    var dateString = value[i]['DayValue'];

                    var p = dateString.split(/\D/g);

                    var date1 = [p[2], p[1], p[0]].join("-");

                    if (!disabled.includes(date1)) {

                        disabled.push(date1);

                    }

                }

            }

            $("#createNewElement").html(`<label for="">Check In</label><div name="bday" id="from-reservation-2" data-date-format="dd-mm-yyyy"></div>

`);
            $("#from-reservation-2").datepicker({

                dateFormat: 'dd-mm-yy',

                minDate: from,

                stepMonths: 0,

                numberOfMonths: 2,
                beforeShowDay: function (date) {
                    var currentDate = moment(from);
                    // console.log(from);
                    var stopDate = moment();
                    // console.log(stopDate);
                    while (currentDate < moment(stopDate).subtract(1, 'days')) {
                        // if(currentDate !== stopDate){
                        disabled.push(moment(currentDate).format('DD-MM-YYYY'))
                        currentDate = moment(currentDate).add(1, 'days');
                        // }

                    }
                    var string = jQuery.datepicker

                        .formatDate(

                            'dd-mm-yy', date);

                    return [disabled.indexOf(string) == -1]
                },

                onSelect: function () {
                    $("#output5").empty();
                    $("#output7").empty();
                    var fromReservation = $("#from-reservation-2")

                        .val();
                    var start_date = $('#from-reservation-2').datepicker(

                        'getDate');
                    format = function date2str(x, y) {

                        var z = {

                            M: x.getMonth() + 1,

                            d: x.getDate(),

                            h: x.getHours(),

                            m: x.getMinutes(),

                            s: x.getSeconds()

                        };
                        y = y.replace(/(M+|d+|h+|m+|s+)/g, function (
                            v) {
                            return ((v.length > 1 ? "0" : "") +
                                    eval(

                                        'z.' + v.slice(-1)))

                                .slice(-2)

                        });
                        return y.replace(/(y+)/g, function (v) {

                            return x.getFullYear().toString()

                                .slice(-v

                                    .length)

                        });

                    }

                    var dateString = format(start_date, 'MM-dd-yyyy');

                    //date formate is month-day-year

                    var startDate = new Date(dateString);



                    // seconds * minutes * hours * milliseconds = 3 day 

                    var day = 60 * 60 * 24 * 1000 * nights;



                    var d = new Date(startDate.getTime() + day);

                    var toReservation = format(d, 'dd-MM-yyyy');

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

        
        },

        cache: false,

    });

}
var add = function (e) {
    var nights = $("#nights").val();

    var CustID = $("#current_cust_id").val();

    var custtype = $("#custtype").val();

    var master = $("#master").val();

    var zone = $("#zone").val();

    var project = $("#project").val();

    var floor = $("#floor").val();
    
    if ($("#from-reservation-2").val() == "") {

        $("#output").html(

            "Please choose check in date...");

    } else {

        $("#output5").empty();

        $("#submit").hide();

        $("#output5").html("Please wait...");

        var fromReservation = $("#check_in").html();

        var toReservation = $("#check_out").html();
        var lang = $("#lang").val();
        var url =

            'https://technicalcls.reflection-eg.com/api/Reservation/AddResrvation?Date_from=' +

            fromReservation +

            '&Date_to=' + toReservation.trim() +

            '&Prg=' + project.trim() +

            '&Zone=' + zone.trim() +

            '&Floor=' + floor.trim() +

            '&CustID=' + CustID.trim() +

            '&CustTypeDesc=' + custtype.trim() +

            '&MasterDataProject=' + master.trim() +
            '&Lang=' + lang;
        // console.log(url);

        $.ajax({

            type: 'POST',
            dataType: "json",
            contentType: "application/json",
            cache: false,
            async: false,
            url: 'https://technicalcls.reflection-eg.com/api/Reservation/AddResrvation?Date_from=' +

                fromReservation +

                '&Date_to=' + toReservation.trim() +

                '&Prg=' + project.trim() +

                '&Zone=' + zone.trim() +

                '&Floor=' + floor.trim() +

                '&CustID=' + CustID.trim() +

                '&CustTypeDesc=' + custtype.trim() +

                '&MasterDataProject=' + master.trim() +
                '&Lang=' + lang,

            success: function (success) {
                console.log(url);
                $("#output5").empty();
                $("#output7").empty();
                // $("#check_in").empty();
                // $("#check_out").empty();
                var outputHtml;
                var condition = success.CheckCondition;
                console.log(condition);
                if (condition !== null) {
                    for (var l = 0; l < condition.length; l++) {
                        $("#output7").html(`${condition[l].CondText}`);
                    }
                    $("#output7").one("click", function () {
                        for (var l = 0; l < condition.length; l++) {
                            $("#output7").html(`${condition[l].CondToolTip}`);
                        }
                    });
                } else {
                    $.ajax({
                        type: 'GET',
                        url: 'https://technicalcls.reflection-eg.com/api/Customers/GetData?id=' + CustID.trim(),
                        success: function (msg1) {
                            var msg2 = msg1.Customers;
                            console.log(msg2[0].Duration);
                            $("h3[data-original=" + CustID + "]").html(msg2[0].Duration);
                            $("h3[data-reserve=" + CustID + "]").html(msg2[0].PersonalUsage);
                            $("h3[data-current-rental=" + CustID + "]").html(msg2[0].RenatlBalance);
                            $("h3[data-remain=" + CustID + "]").html(msg2[0].RemBalance);
                            $("#output5").html(success.SaveMessage);
                            var member = $("#membership").val();
                            member = member.trim();

                            localStorage.removeItem("remain");

                            var items = {

                                "remaining": success.RsltNum,

                                "membership": member

                            };
                            var items1 = {

                                "duration": msg2[0].Duration,

                                "membership": member

                            };
                            var items2 = {

                                "personal": msg2[0].PersonalUsage,

                                "membership": member

                            };
                            var items3 = {

                                "newRental": msg2[0].RenatlBalance,

                                "membership": member

                            };  var items4 = {

                                "cancelation": msg2[0].DeductDueCncl,

                                "membership": member

                            };
                            var items5 = {

                                "deduction": msg2[0].DeductionBalance,

                                "membership": member

                            };

                            localStorage.setItem("deduction", JSON.stringify(
                                items5));

                            localStorage.setItem("remain", JSON.stringify(items));
                            localStorage.setItem("original", JSON.stringify(items1));
                            localStorage.setItem("reserve", JSON.stringify(items2));
                            localStorage.setItem("rental", JSON.stringify(items3));
                            localStorage.setItem("cancelation", JSON.stringify(items4));

                            $("h3[data-remain=" + CustID + "]").html(success.RsltNum);
                            $("h6").find("#card-remaining").html(success.RsltNum);


                            setTimeout(function () {

                                $("#new-reservationr-close").trigger("click");

                                $("#confirmation-close").trigger("click");

                            }, 100000000);
                            var html;
                            $("#showHistoryData").empty();
                            $.ajax({
                                type: 'GET',
                                url: 'https://technicalcls.reflection-eg.com/api/Reservation/GetReservations',
                                data: {
                                    CustID: CustID
                                },
                                success: function (msg) {
                                    var title = $("#title").val();
                                    var member_ship = $("#member_ship").val();
                                    var To_lang = $("#To").val();
                                    var cancel_history = $("#cancel_history").val();
                                    var from_lang = $("#from").val();
                                    var Nights_lang = $("#Nights_lang").val();
                                    var zone_lang = $("#zone_lang").val();
                                    var project_lang = $("#project_lang").val();
                                    var floor_lang = $("#floor_lang").val();
                                    var duration = $("#duration").val();
                                    console.log(msg)
                                    $.ajax({
                                        type: 'POST',
                                        url: 'https://socialnuts-projects.com/2019/porto/home/save',
                                        data: {
                                            value: msg.Orders
                                        },
                                        success: function (d) {
                                            console.log(d);

                                            if (d !== "empty") {
                                                var history = JSON.parse(d);
                                                // console.log(value);
                                                var membership = $("#membership").val();
                                                var my_date = new Date();

                                                for (var i = 0; i < history.length; i++) {
                                                    var currentDate = new Date();
                                                    var nowDate = currentDate.getDate() +
                                                        "-" +
                                                        (currentDate.getMonth() + 1) + "-" +
                                                        currentDate.getFullYear();

                                                    var FROM = history[i].From;
                                                    FROM = FROM.split("T");

                                                    var From = new Date(FROM[0]);

                                                    var TO = history[i].To;
                                                    TO = TO.split("T");
                                                    var To = new Date(TO[0]);
                                                    from_month = From.getMonth() + 1;
                                                    to_month = To.getMonth() + 1;
                                                    var fromDate = From.getDate() + "-" +
                                                        from_month + "-" + From
                                                            .getFullYear();
                                                    console.log(currentDate);
                                                    console.log(From);
                                                    if (currentDate > From) {
                                                        if (currentDate.getMonth() == From
                                                            .getMonth() && currentDate
                                                                .getDate() == From.getDate() &&
                                                            currentDate.getFullYear() ==
                                                            From
                                                                .getFullYear()) {
                                                            html = ` <div class="col-lg-6 col-md-6 reservation-history-data-cols">
                        <div class="history-data-cols-div">

          <button class="cancel-reservation" data-id="${history[i].OrderID}" onclick="cancel(${history[i].OrderID});" style="font-family: BebasNeue;
    background: rgb(46, 171, 215);
    color: rgb(255, 255, 255);
    padding: 6px 20px;
    font-size: 18px;
    display: block;
    border: none;">
                        ${cancel_history}
                    </button>
                            <div class="history-data-cols-titl">${history[i].OrderID}</div>
                            <div class="row">
                                <div class="col-6">
                                    <h2>
                                    <i class="icon fas fa-money-check"></i>
                                       ${title}
                                    </h2>
                                </div>
                                <div class="col-6">
                                    <h3>${history[i].type}</h3>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-6">
                                    <h2>
                                    <i class="icon fas fa-money-check"></i>
                                       ${member_ship}
                                    </h2>
                                </div>
                                <div class="col-6">
                                    <h3>${membership}</h3>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-6">
                                    <h2>
                                        <i class="icon far fa-clock"></i> ${from_lang}
                                    </h2>
                                </div>
                                <div class="col-6">
                                    <h3>${From.getDate() + "-" + from_month + "-" + From.getFullYear()}</h3>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-6">
                                    <h2>
                                        <i class="icon far fa-clock"></i> ${To_lang}
                                    </h2>
                                </div>
                                <div class="col-6">
                                    <h3>${To.getDate() + "-" + to_month + "-" + To.getFullYear()}</h3>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-6">
                                    <h2>
                                        <i class="icon far fa-clock"></i> ${duration}
                                    </h2>
                                </div>
                                <div class="col-6">
                                    <h3>${history[i].Duration} ${Nights}</h3>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-6">
                                    <h2>
                                        <i class="icon fas fa-layer-group"></i> ${project_lang}
                                    </h2>
                                </div>
                                <div class="col-6">
                                    <h3>${history[i].Project}</h3>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-6">
                                    <h2>
                                        <i class="icon fas fa-map-marker-alt"></i> ${zone_lang}
                                    </h2>
                                </div>
                                <div class="col-6">
                                    <h3>${history[i].Zone}</h3>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-6">
                                    <h2>
                                        <i class="icon fas fa-chart-line"></i> ${floor_lang}
                                    </h2>
                                </div>
                                <div class="col-6">
                                    <h3>${history[i].Floor}</h3>
                                </div>
                            </div>
                        </div>

                    </div> `

                                                        } else {
                                                            console.log("yes");
                                                            html = ` <div class="col-lg-6 col-md-6 reservation-history-data-cols">
                        <div class="history-data-cols-div">


                            <div class="history-data-cols-titl">${history[i].OrderID}</div>
                            <div class="row">
                                <div class="col-6">
                                    <h2>
                                    <i class="icon fas fa-money-check"></i>
                                    ${title}
                                    </h2>
                                </div>
                                <div class="col-6">
                                    <h3>${history[i].type}</h3>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-6">
                                    <h2>
                                    <i class="icon fas fa-money-check"></i>
                                    ${member_ship}
                                    </h2>
                                </div>
                                <div class="col-6">
                                    <h3>${membership}</h3>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-6">
                                    <h2>
                                        <i class="icon far fa-clock"></i> ${from_lang}
                                    </h2>
                                </div>
                                <div class="col-6">
                                    <h3>${From.getDate() + "-" + from_month + "-" + From.getFullYear()}</h3>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-6">
                                    <h2>
                                        <i class="icon far fa-clock"></i>${To_lang}
                                    </h2>
                                </div>
                                <div class="col-6">
                                    <h3>${To.getDate() + "-" + to_month + "-" + To.getFullYear()}</h3>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-6">
                                    <h2>
                                        <i class="icon far fa-clock"></i> ${duration}
                                    </h2>
                                </div>
                                <div class="col-6">
                                    <h3>${history[i].Duration} ${Nights_lang}</h3>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-6">
                                    <h2>
                                        <i class="icon fas fa-layer-group"></i> ${project_lang}
                                    </h2>
                                </div>
                                <div class="col-6">
                                    <h3>${history[i].Project}</h3>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-6">
                                    <h2>
                                        <i class="icon fas fa-map-marker-alt"></i> ${zone_lang}
                                    </h2>
                                </div>
                                <div class="col-6">
                                    <h3>${history[i].Zone}</h3>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-6">
                                    <h2>
                                        <i class="icon fas fa-chart-line"></i> ${floor_lang}
                                    </h2>
                                </div>
                                <div class="col-6">
                                    <h3>${history[i].Floor}</h3>
                                </div>
                            </div>
                        </div>

                    </div> `
                                                        }


                                                    } else if (currentDate < From ||
                                                        currentDate == From) {
                                                        html = ` <div class="col-lg-6 col-md-6 reservation-history-data-cols">
                        <div class="history-data-cols-div">

          <button class="cancel-reservation" data-id="${history[i].OrderID}" onclick="cancel(${history[i].OrderID});" style="font-family: BebasNeue;
    background: rgb(46, 171, 215);
    color: rgb(255, 255, 255);
    padding: 6px 20px;
    font-size: 18px;
    display: block;
    border: none;">
                        ${cancel_history}
                    </button>
                            <div class="history-data-cols-titl">${history[i].OrderID}</div>
                            <div class="row">
                                <div class="col-6">
                                    <h2>
                                    <i class="icon fas fa-money-check"></i>
                                    ${title}
                                    </h2>
                                </div>
                                <div class="col-6">
                                    <h3>${history[i].type}</h3>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-6">
                                    <h2>
                                    <i class="icon fas fa-money-check"></i>
                                    ${member_ship}
                                    </h2>
                                </div>
                                <div class="col-6">
                                    <h3>${membership}</h3>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-6">
                                    <h2>
                                        <i class="icon far fa-clock"></i> ${from_lang}
                                    </h2>
                                </div>
                                <div class="col-6">
                                    <h3>${From.getDate() + "-" + from_month + "-" + From.getFullYear()}</h3>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-6">
                                    <h2>
                                        <i class="icon far fa-clock"></i> ${To_lang}
                                    </h2>
                                </div>
                                <div class="col-6">
                                    <h3>${To.getDate() + "-" + to_month + "-" + To.getFullYear()}</h3>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-6">
                                    <h2>
                                        <i class="icon far fa-clock"></i> ${duration}
                                    </h2>
                                </div>
                                <div class="col-6">
                                    <h3>${history[i].Duration} ${Nights_lang}</h3>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-6">
                                    <h2>
                                        <i class="icon fas fa-layer-group"></i> ${project_lang}
                                    </h2>
                                </div>
                                <div class="col-6">
                                    <h3>${history[i].Project}</h3>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-6">
                                    <h2>
                                        <i class="icon fas fa-map-marker-alt"></i> ${zone_lang}
                                    </h2>
                                </div>
                                <div class="col-6">
                                    <h3>${history[i].Zone}</h3>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-6">
                                    <h2>
                                        <i class="icon fas fa-chart-line"></i> ${floor_lang}
                                    </h2>
                                </div>
                                <div class="col-6">
                                    <h3>${history[i].Floor}</h3>
                                </div>
                            </div>
                        </div>

                    </div> `

                                                    }

                                                    // $("#showHistoryData").empty();
                                                    $("#showHistoryData").append(html);
                                                }

                                            }
                                            $("#more-details").addClass("hidden");
                                            $("#showHistory").removeClass("hidden");
                                        }
                                    });

                                }
                            });
                        }
                    });

                }


                if (condition == "null") {
                    var member = $("#membership").val();

                    member = member.trim();

                    localStorage.removeItem("remain");

                    var items = {

                        "remaining": success.RsltNum,

                        "membership": member

                    };

                    localStorage.setItem("remain", JSON.stringify(items));

                    $("h3[data-remain=" + CustID + "]").html(success.RsltNum);
                    $("h6").find("span[data-id=" + CustID + "]").html(success.RsltNum);


                    setTimeout(function () {

                        $("#new-reservationr-close").trigger("click");

                        $("#confirmation-close").trigger("click");

                    }, 100000000);

                } else {

                    setTimeout(function () {

                        $("#new-reservationr-close").trigger("click");

                        $("#confirmation-close").trigger("click");

                    }, 100000000);

                }

            },
            cache: false,

        });

    }

}

$("#submit").on("click", add);
