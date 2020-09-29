$(document).ready(function () {
    $("#submit").hide();
    $("#reservation-div").addClass("hidden");
    var currentTime = new Date();
    var dateToday = new Date();
    var disabled = [];
    var ix = 0;

    function CalendarAPI(start) {

        ix++;
        if (ix == 1) {
            var from = '<?=date("d-m-Y")?>';
        } else {
            from = start;
        }
        console.log(from)
        var nights = $("#nights").val();
        var CustID = $("#cust_id").val();
        var custtype = $("#custtype").val();
        var master = $("#master").val();
        var zone = $("#zone").val();
        var project = $("#project").val();
        var floor = $("#floor").val();
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
                //  $("#to-reservation")
                //                            .datepicker("destroy");
                //                        $("#from-reservation-2")
                //                            .datepicker("destroy");
                $("#output4").empty();
                $("#reservation-div").removeClass("hidden");
                $("#submit").show();
                $("#black").css("display", "none");
                $("#output4").html(msg.Status);
                setTimeout(function () {
                    document.getElementById("output4").innerHTML =
                        '';
                }, 3000);
                var value = msg.Calender
                var array = [];
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
                console.log(from);
                $("#to-reservation").datepicker({
                    dateFormat: 'dd-mm-yy',
                    minDate: from,
                    defaultDate: from,
                    changeMonth: true,
                    beforeShowDay: function (date) {
                        var string = jQuery.datepicker
                            .formatDate(
                                'dd-mm-yy', date);
                        return [disabled.indexOf(string) == -1]
                    },
                    onChangeMonthYear: function (year, month) {
                        // $("#from-reservation-2").addClass('hide-calendar');
                        //                                $("#to-reservation").on("blur", function (e) {
                        //                                    $(this).off("focus").datepicker("hide");
                        //                                });
                        $("#reservation-div").addClass("hidden");
                        $("#submit").hide();
                        $("#black").css("display", "block");
                        if (month == 1) {
                            month = '01';
                        } else if (month == 2) {
                            month = "02";
                        } else if (month == 3) {
                            month = "03";
                        } else if (month == 4) {
                            month = "04";
                        } else if (month == 5) {
                            month = "05";
                        } else if (month == 6) {
                            month = "06";
                        } else if (month == 7) {
                            month = "07";
                        } else if (month == 8) {
                            month = "08";
                        } else if (month == 9) {
                            month = "09";
                        }

                        var from = '01-' + month + '-' + year;
                        $(this).datepicker("setDate", from);
                        console.log(from);
                        setTimeout(CalendarAPI(from), 3000);
                    },
                });
                $("#from-reservation-2").datepicker({
                    dateFormat: 'dd-mm-yy',
                    minDate: dateToday,
                    defaultDate: from,
                    changeMonth: true,
                    //changeYear: true,
                    updateViewDate: false,
                    //hideIfNoPrevNext: true,
                    beforeShowDay: function (date) {
                        var string = jQuery.datepicker
                            .formatDate(
                                'dd-mm-yy', date);
                        return [disabled.indexOf(string) == -1]
                    },
                    onChangeMonthYear: function (year, month, inst) {
                        //alert("ggggggg"+inst.selectedYear);
                        //  $("#from-reservation-2").on("blur", function (e) {
                        //   $(this).off("focus").datepicker("hide");
                        // });
                        //  alert('hhh'+this.value);
                        $("#reservation-div").addClass("hidden");

                        $("#submit").hide();

                        $("#black").css("display", "block");
                        if (month == 1) {
                            month = '01';
                        } else if (month == 2) {
                            month = "02";
                        } else if (month == 3) {
                            month = "03";
                        } else if (month == 4) {
                            month = "04";
                        } else if (month == 5) {
                            month = "05";
                        } else if (month == 6) {
                            month = "06";
                        } else if (month == 7) {
                            month = "07";
                        } else if (month == 8) {
                            month = "08";
                        } else if (month == 9) {
                            month = "09";
                        }


                        var from = '01-' + month + '-' + year;

                        $("#to-reservation").datepicker("setDate", from);
                        $(this).datepicker("setDate", from);

                        //alert(from)
                        console.log(from);
                        setTimeout(CalendarAPI(from), 3000);
                    },
                });
                $("#from-reservation-2").on("change", function () {
                    $("#output").empty();
                });
                $("#to-reservation").on("change", function () {
                    $("#output").empty();
                });
                $("#submit").on("click", function () {
                    var fromReservation = $("#from-reservation-2")
                        .val();
                    var toReservation = $("#to-reservation").val();
                    var check = Math.ceil(($("#to-reservation")
                        .datepicker('getDate') - $(
                            "#from-reservation-2")
                            .datepicker('getDate')) / (1000 *
                                60 * 60 * 24));
                    if ($("#from-reservation-2").val() == "") {
                        $("#output").html(
                            "Please choose check in date...");
                    } else if ($("#to-reservation").val() == "") {
                        $("#output").html(
                            "Please choose check out date..");
                    } else if (toReservation < fromReservation) {
                        $("#output").html(
                            "Check out date must be after check in date"
                        );
                    } else if (check != $("#nights").val()) {
                        $("#output").html(
                            "Please select date that euqual to number of nights entered.."
                        );
                    } else {
                        $("#output").empty();
                        $("#output").html("Please wait...");
                        var url = 'https://technicalcls.reflection-eg.com/api/Reservation/AddResrvation?Date_from=' +
                            fromReservation +
                            '&Date_to=' +
                            toReservation + '&Prg=' +
                            project + '&Zone=' + zone +
                            '&Floor=' + floor +
                            '&CustID=' + CustID +
                            '&CustTypeDesc=' + custtype;
                        $.ajax({
                            type: 'POST',
                            url: 'https://technicalcls.reflection-eg.com/api/Reservation/AddResrvation?Date_from=' +
                                fromReservation +
                                '&Date_to=' +
                                toReservation + '&Prg=' +
                                project + '&Zone=' + zone +
                                '&Floor=' + floor +
                                '&CustID=' + CustID +
                                '&CustTypeDesc=' + custtype,
                            success: function (success) {
                                $("#output").empty();
                                console.log(url);
                                var outputHtml;
                                $("#output").html(
                                    success
                                        .SaveMessage);
                                var condition = success.CheckCondition;

                                for (var i = 0; i < condition
                                    .length; i++) {

                                    outputHtml = `<ul style="text-align:center;">
                                        <li>Condtext : ${condition[i].CondText}</li>
                                        <li>Tooltip : ${condition[i].CondToolTip}</li>
                                        </ul>`
                                    $("#output").append(
                                        outputHtml);
                                }


                            }
                        });
                    }
                });
            }
        });
    }


    function DatePicker() {

    }




    $("#nights").on("change", function () {
        $("#submit").hide();
        $("#reservation-div").addClass("hidden");
        $("#output4").empty()
        $("#output").empty()
    });
    $("#find").on("click", function () {
        $("#output4").html("Please wait...");
        CalendarAPI();

    });

    $(".view").on("click", function () {
        var index = $(this).data("index");
        var customers = $("#data").val();
        var data = JSON.parse(customers);
        var html = `<div class="row">
                                         <div class="col-6">
                                             <h2>
                                                 <i class="icon far fa-user"></i> <?=$this->lang->line("name")?>
                                                 <input type="hidden" id="i" value="">
                                             </h2>
                                         </div>
                                         <div class="col-6">
                                             <h3> ${data.EMP_NAME_E}</h3>
                                         </div>
                                     </div>
                                     <div class="row">
                                         <div class="col-6">
                                             <h2>
                                                 <i class="icon fas fa-user-friends"></i> <?=$this->lang->line("partner")?>
                                             </h2>
                                         </div>
                                         <div class="col-6">
                                             <h3>${data.Partner}</h3>
                                         </div>
                                     </div>
                                     <div class="row">
                                         <div class="col-6">
                                             <h2>
                                                 <i class="icon fas fa-layer-group"></i> <?=$this->lang->line("project")?>
                                             </h2>
                                         </div>
                                         <div class="col-6">
                                             <h3>${data.Project}</h3>
                                         </div>
                                     </div>
                                     <div class="row">
                                         <div class="col-6">
                                             <h2>
                                                 <i class="icon fas fa-map-marker-alt"></i> <?=$this->lang->line("zone");?>
                                             </h2>
                                         </div>
                                         <div class="col-6">
                                             <h3>${data.ZONE}</h3>
                                         </div>
                                     </div>
                                     <div class="row">
                                         <div class="col-6">
                                             <h2>
                                                 <i class="icon fas fa-chart-line"></i> <?=$this->lang->line("floor")?>
                                             </h2>
                                         </div>
                                         <div class="col-6">
                                             <h3>${data.Floor}</h3>
                                         </div>
                                     </div>`

        var html1 = `<div class="row">
                                        <div class="col-9">
                                            <h2>
                                                <i class="icon far fa-user"></i><?=$this->lang->line("reserve")?>
                                            </h2>
                                        </div>
                                        <div class="col-3">
                                            <h3 class="mony">${data.ReservBalance}</h3>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-9">
                                            <h2>
                                                <i class="icon fas fa-user-friends"></i><?=$this->lang->line("rental")?>

                                            </h2>
                                        </div>
                                        <div class="col-3">
                                            <h3 class="mony">${data.RenatlBalance}</h3>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-9">
                                            <h2>
                                                <i class="icon fas fa-hashtag"></i> <?=$this->lang->line("usage")?>
                                            </h2>
                                        </div>
                                        <div class="col-3">
                                            <h3 class="mony">500</h3>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-9">
                                            <h2>
                                                <i class="icon far fa-edit"></i><?=$this->lang->line("remain")?>

                                            </h2>
                                        </div>
                                        <div class="col-3">
                                            <h3 class="mony">${data.RemBalance}</h3>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-9">
                                            <h2>
                                                <i class="icon fas fa-money-check"></i><?=$this->lang->line("cancel")?>
                                            </h2>
                                        </div>
                                        <div class="col-3">
                                            <h3 class="mony">500</h3>
                                        </div>
                                    </div>`
        $("#cust-data").empty();
        $("#cust-data").append(html);
        $("#balance-data").empty();
        $("#balance-data").append(html1);
        $(".more-details").removeClass("hidden");
        $(".customer-membership").addClass("hidden");

    });
    $("#more-back").on("click", function () {
        $(".customer-membership").removeClass("hidden");
        $(".more-details").addClass("hidden");
    });
    $("#showHistoryBack").on("click", function () {
        $("#showHistory").addClass("hidden");
        $(".more-details").removeClass("hidden");
    });
    $("#submit_history").on("click", function () {
        var from = $("#from_history").val();
        var to = $("#to_history").val();
        var id = $("#cust_id").val();
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
        var id = $("#cust_id").val();
        var rental = $("#rental").val();
        $("#submit-rental").hide();
        $("#output3").html("Please wait..");
        $.ajax({
            type: 'POST',
            url: 'https://technicalcls.reflection-eg.com/api/Reservation/EditRental?CustID=' +
                id + '&NewBalance=' + rental + '&Lang=EN',
            success: function (msg) {
                $("#output3").empty();
                $("#output3").html(msg.Msg);
                $("#submit-rental").show();

            }
        });
    });
    $("#showReservationHistory").on("click", function () {
        //  $(".more-details").addClass("hidden");
        var id = $("#cust_id").val();
        // $("#output3").html("Please wait..");
        var html;
        $.ajax({
            type: 'GET',
            url: 'https://technicalcls.reflection-eg.com/api/Reservation/GetReservations',
            data: {
                CustID: id
            },
            success: function (msg) {
                var value = msg.Orders;

                var my_date = new Date();
                for (var i = 0; i < value.length; i++) {
                    html = ` <div class="col-lg-4 col-md-6 reservation-history-data-cols">
                        <div class="history-data-cols-div">
                            <div class="history-data-cols-titl">${value[i].OrderID}</div>

                            <div class="row">
                                <div class="col-6">
                                    <h2>
                                        <i class="icon far fa-clock"></i> <?=$this->lang->line('from')?>
                                    </h2>
                                </div>
                                <div class="col-6">
                                    <h3>${my_date.getDate(value[i].From) + "-" + my_date.getMonth(value[i].From) + "-" + my_date.getFullYear(value[i].From)}</h3>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-6">
                                    <h2>
                                        <i class="icon far fa-clock"></i> <?=$this->lang->line('to')?>
                                    </h2>
                                </div>
                                <div class="col-6">
                                    <h3>${my_date.getDate(value[i].From) + "-" + my_date.getMonth(value[i].From) + "-" + my_date.getFullYear(value[i].From)}</h3>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-6">
                                    <h2>
                                        <i class="icon far fa-clock"></i> <?=$this->lang->line("duration")?>
                                    </h2>
                                </div>
                                <div class="col-6">
                                    <h3>${value[i].Duration} days</h3>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-6">
                                    <h2>
                                        <i class="icon fas fa-layer-group"></i> <?=$this->lang->line("project")?>
                                    </h2>
                                </div>
                                <div class="col-6">
                                    <h3>${value[i].Project}</h3>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-6">
                                    <h2>
                                        <i class="icon fas fa-map-marker-alt"></i> <?=$this->lang->line("zone")?>
                                    </h2>
                                </div>
                                <div class="col-6">
                                    <h3>${value[i].Zone}</h3>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-6">
                                    <h2>
                                        <i class="icon fas fa-chart-line"></i> <?=$this->lang->line("floor")?>
                                    </h2>
                                </div>
                                <div class="col-6">
                                    <h3>${value[i].Floor}</h3>
                                </div>
                            </div>
                        </div>

                    </div> `

                    $("#showHistoryData").empty();
                    $("#showHistoryData").append(html);
                }
                $("#more-details").addClass("hidden");
                $("#showHistory").removeClass("hidden");
            }
        });
    });



    $("#submit_reservation").on("click", function () {
        if ($("#from-reservation").val() == "") {
            $("#output").html("Please choose the date...");
        } else if ($("#nights").val() == "") {
            $("#output").html("Please enter number of nights..");
        } else {
            var from = $("#from-reservation").val();
            var nights = $("#nights").val();
            var CustID = $("#cust_id").val();
            var custtype = $("#custtype").val();
            var master = $("#master").val();
            var zone = $("#zone").val();
            var project = $("#project").val();
            var floor = $("#floor").val();
            $("#submit_reservation").hide();
            $("#output").html("Please wait...");
            $("#number_nights").val(nights);
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
                    $("#output").empty();

                    if (msg.Status == '01 Successfully Completed') {

                        $("#output").html(msg.Status);
                        setTimeout(function () {
                            document.getElementById("output").innerHTML =
                                '';
                        }, 3000);
                        // $("#nights-div").empty();
                        // $("#nights-div").append(html2);
                        // $("#from-div").empty();
                        // $("#from-div").append(html3);
                        $("#submit").attr("hidden", false);
                        var value = msg.Calender
                        var array = [];
                        for (var i = 0; i < value.length; i++) {
                            // console.log(value[i]['DayValidCheck'])
                            if (value[i]['DayValidCheck'] !== 1) {
                                // console.log("blocked");
                                var dateString = value[i]['DayValue'];
                                var p = dateString.split(/\D/g);
                                // console.log(p);
                                var date1 = [p[2], p[1], p[0]].join("-");
                                if (!disabled.includes(date1)) {
                                    disabled.push(date1);
                                }
                                // disabled.push(date1);
                            } else {
                                // console.log("available");
                            }
                        }
                        // console.log(array);
                        $("#to-reservation").datepicker({
                            dateFormat: 'dd-mm-yy',
                            minDate: from,
                            defaultDate: from,
                            changeMonth: true,
                            beforeShowDay: function (date) {
                                var string = jQuery.datepicker
                                    .formatDate(
                                        'dd-mm-yy', date);
                                return [disabled.indexOf(string) == -1]
                            }
                        });
                        $("#from-reservation-2").datepicker({
                            dateFormat: 'dd-mm-yy',
                            minDate: dateToday,
                            defaultDate: from,
                            changeMonth: true,
                            changeYear: false,
                            updateViewDate: false,
                            //	hideIfNoPrevNext: true,
                            // maxDate: "+2M +2",
                            beforeShowDay: function (date) {
                                var string = jQuery.datepicker
                                    .formatDate(
                                        'dd-mm-yy', date);
                                return [disabled.indexOf(string) == -1]
                            }
                        });
                        $("#from-reservation-2").on("change", function () {
                            $("#output").empty();
                        });
                        $("#to-reservation").on("change", function () {
                            $("#output").empty();
                        });
                        $("#submit").on("click", function () {
                            var fromReservation = $("#from-reservation-2")
                                .val();
                            var toReservation = $("#to-reservation").val();
                            var check = Math.ceil(($("#to-reservation")
                                .datepicker('getDate') - $(
                                    "#from-reservation-2")
                                    .datepicker('getDate')) / (1000 *
                                        60 * 60 * 24));
                            if ($("#from-reservation-2").val() == "") {
                                $("#output").html(
                                    "Please choose check in date...");
                            } else if ($("#to-reservation").val() == "") {
                                $("#output").html(
                                    "Please choose check out date..");
                            } else if (toReservation < fromReservation) {
                                $("#output").html(
                                    "Check out date must be after check in date"
                                );
                            } else if (check != $("#nights").val()) {
                                $("#output").html(
                                    "Please select date that euqual to number of nights entered.."
                                );
                            } else {
                                $("#output").empty();
                                $("#output").html("Please wait...");
                                $.ajax({
                                    type: 'POST',
                                    url: 'https://technicalcls.reflection-eg.com/api/Reservation/AddResrvation?Date_from=' +
                                        fromReservation +
                                        '&Date_to=' +
                                        toReservation + '&Prg=' +
                                        project + '&Zone=' + zone +
                                        '&Floor=' + floor +
                                        '&CustID=' + CustID +
                                        '&CustTypeDesc=' + custtype,
                                    success: function (success) {
                                        $("#output").empty();
                                        $("#output").html(
                                            success
                                                .SaveMessage);
                                    }
                                });
                            }
                        });
                    }
                }
            });
        }

    });
});