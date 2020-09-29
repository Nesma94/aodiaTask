function subscribe() {

    event.preventDefault();
    var reg = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
    var email = $('#email_con').val();
    var lang = $('#lang_con').val();
    if (email.trim() === '') {

        if (lang == "en") {
            $('#output3').html('Please Enter Your Email.');
        } else {
            $('#output3').html('من فضلك ادخل بريدك الالكتروني.');
        }
        $('#email_con').focus();
        return false;
    } else if (email.trim() != '' && !reg.test(email)) {
        $('#output3').html('Invalid Email Address.');
        $('#email_con').focus();
        return false;
    } else {
        $.ajax({
            type: 'POST',
            url: 'https://socialnuts-projects.com/2019/porto/subscribe',
            data: {
                email: $('#email_con').val(),
            },

            success: function (msg) {
                // console.log(msg);
                if (msg == 'success') {
                    $('input[type=text], input[type=email]').val('');
                    window.location.href =
                        'https://socialnuts-projects.com/2019/porto/thankYou';
                } else {
                    $('#output3').html('<span style="color:#144885;">Error!!</span>');
                }
            }
        });
    }
}

function contactUs() {
    event.preventDefault();
    var reg = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
    var name = $('#your_name').val();
    var email = $('#your_email').val();
    var message = $('#your_message').val();
    var phone = $('#your_phone').val();
    var job = $('#your_job').val();
    var age = $('#your_age').val();
    var lang = $('#lang').val();
    if (name.trim() === '') {
        if (lang == "en") {
            $('#output2').html('Please Enter Your Name.');
        } else {
            $('#output2').html('من فضلك ادخل اسمك.');
        }

        $('#your_name').focus();
        return false;
    } else if (email.trim() === '') {
        if (lang == "en") {
            $('#output2').html('Please Enter Your Email.');
        } else {
            $('#output2').html('من فضلك ادخل بريدك الالكتروني.');
        }

        $('#your_email').focus();
        return false;
    } else if (email.trim() != '' && !reg.test(email)) {
        if (lang == "en") {
            $('#output2').html('Invalid Email Address.');
        } else {
            $('#output2').html(' من فضلك ادخل بريدك الالكتروني صحيح.');
        }

        $('#your_email').focus();
        return false;
    } else if (phone.trim() === '') {
        if (lang == "en") {
            $('#output2').html('Please Enter Your Phone.');
        } else {
            $('#output2').html(' من فضلك ادخل رقم تليفونك.');
        }
        $('#your_phone').focus();
        return false;
    } else if (isNaN(phone)) {
        if (lang == "en") {
            $('#output2').html('Please Enter Valid Phone Number.');
        } else {
            $('#output2').html(' من فضلك ادخل رقم تليفون صحيح.');
        }

        $('#your_phone').focus();
    } else if (message.trim() === '') {
        if (lang == "en") {
            $('#output2').html('Please Enter Your message.');
        } else {
            $('#output2').html(' من فضلك ادخل رسالتك.');
        }
        $('#your_message').focus();
        return false;
    } else if (!isNaN(job)) {
        if (lang == "en") {
            $('#output2').html('Please Enter Avalid Job.');
        } else {
            $('#output2').html('من فضلك ادخل وظيفتك صحيحة.');
        }

        $('#your_job').focus();
        return false;
    } else if (job.trim() === '') {
        if (lang == "en") {
            $('#output2').html('Please Enter Your Job.');
        } else {
            $('#output2').html(' من فضلك ادخل وظيفتك.');
        }

        $('#your_job').focus();
        return false;
    } else if (age.trim() === '') {
        if (lang == "en") {
            $('#output2').html('Please Enter Your Age.');
        } else {
            $('#output2').html(' من فضلك ادخل سنك.');
        }
        $('#your_age').focus();
        return false;
    } else if (isNaN(age)) {
        if (lang == "en") {
            $('#output2').html('Please Enter Vaild Age Number.');
        } else {
            $('#output2').html(' من فضلك ادخل سنك صحيح.');
        }
        $('#your_age').focus();
    } else {
        $.ajax({
            type: 'POST',
            url: 'https://socialnuts-projects.com/2019/porto/inquiry',
            data: {
                name: $('#your_name').val(),
                email: $('#your_email').val(),
                message: $('#your_message').val(),
                phone: $('#your_phone').val(),
                job: $('#your_job').val(),
                age: $('#your_age').val(),
            },

            success: function (msg) {
                // console.log(msg);
                if (msg == 'success') {
                    $('input[type=text], input[type=email]').val('');
                    $('input[type=text], input[type=text]').val('');
                    $('#your_message').val('');
                    window.location.href =
                        'https://socialnuts-projects.com/2019/porto/thankYou';
                } else {
                    $('#output2').html('<span style="color:#144885;">Error!!</span>');
                }
            }
        });
    }
}

function login() {
    event.preventDefault();
    var reg = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
    var pass = $('#pass').val();
    var email = $('#email').val();
    var lang = $("#lang").val();

    if (pass.trim() === '') {
        if (lang == "en") {
            $('#output2').html('Please Enter Your Password.');
        } else {
            $('#output2').html('من فضلك ادخل كلمة السر.');
        }

        $('#pass').focus();
        return false;
    } else if (email.trim() === '') {
        if (lang == "en") {
            $('#output2').html('Please Enter Your Email.');
        } else {
            $('#output2').html('من فضلك ادخل بريدك الالكتروني.');
        }

        $('#email').focus();
        return false;
    } else if (email.trim() != '' && !reg.test(email)) {
        if (lang == "en") {
            $('#output2').html('Invalid Email Address.');
        } else {
            $('#output2').html(' من فضلك ادخل بريدك الالكتروني صحيح.');
        }

        $('#email').focus();
        return false;

    } else {
        $(".login-btn").css("cursor", "not-allowed");
        $(".login-btn").removeAttr("href");
        $.ajax({
            type: 'GET',
            url: 'https://technicalcls.reflection-eg.com/api/AdminLogin/GetCustomerLog',
            data: {
                Email: $('#email').val(),
                Password: $('#pass').val(),
            },

            success: function (msg) {
                // console.log(msg);
                if (msg.Status == 'Logged In') {

                    $.ajax({
                        type: 'POST',
                        url: 'https://socialnuts-projects.com/2019/porto/customerMembershipData',
                        data: {
                            // email: $('#email').val(),
                            // password: $('#pass').val(),
                            customer: msg.Customers
                        },
                        success: function (data) {
                            console.log(data);
                            if (data == 'success') {
                                window.location.href =
                                    'https://socialnuts-projects.com/2019/porto/customerMembership';
                            }
                        }
                    });
                } else {
                    //      
                    $(".login-btn").attr("href", "javscript:void(0)");
                     $('#pass').on("keydown",function(){
                        $(".login-btn").css("cursor", "default");
                     });
                     $('#email').on("keydown",function(){
                        $(".login-btn").css("cursor", "default");
                     });
                    $('#output2').html(`<span style="color:#144885;">${msg.Status}</span>`);
                }
            }
        });
    }
}

function register() {
    event.preventDefault();
    var reg = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
    var pass = $('#password').val();
    var email = $('#email').val();
    var bp = $('#bp').val();
    var confirm = $('#confirm').val();
    var contract = $('#contract').val();
    var member = $('#member').val();
    var lang = $("#lang").val();

    if (pass.trim() === '') {
        if (lang == "en") {
            $('#output2').html('Please Enter Your Password.');
        } else {
            $('#output2').html('من فضلك ادخل كلمة السر.');
        }

        $('#pass').focus();
        return false;
    } else if (email.trim() === '') {
        if (lang == "en") {
            $('#output2').html('Please Enter Your Email.');
        } else {
            $('#output2').html('من فضلك ادخل بريدك الالكتروني.');
        }

        $('#email').focus();
        return false;
    } else if (email.trim() != '' && !reg.test(email)) {
        if (lang == "en") {
            $('#output2').html('Invalid Email Address.');
        } else {
            $('#output2').html(' من فضلك ادخل بريدك الالكتروني صحيح.');
        }

        $('#email').focus();
        return false;

    } else if (bp.trim() === '') {
        if (lang == "en") {
            $('#output2').html('Please Enter Your bp.');
        } else {
            $('#output2').html(' من فضلك ادخل BP.');
        }
        $('#bp').focus();
        return false;
    } else if (contract.trim() === '') {
        if (lang == "en") {
            $('#output2').html('Please Enter Your Contract Number.');
        } else {
            $('#output2').html(' من فضلك ادخل رقم العقد.');
        }

        $('#contract').focus();
        return false;
    } else if (member.trim() === '') {
        if (lang == "en") {
            $('#output2').html('Please Enter Your Membership number.');
        } else {
            $('#output2').html(' من فضلك ادخل رقم العضوية.');
        }
        $('#member').focus();
        return false;
    } else if (confirm != pass) {
        if (lang == "en") {
            $('#output2').html('Two password doesnot match.');
        } else {
            $('#output2').html(' الكلمتين السرتين ليسو متشابهتين.');
        }
        $('#your_age').focus();
        return false;
    } else {
         $("#register").css("cursor", "not-allowed");
        //  $(".login-btn").removeAttr("href");
        if(lang =="en"){
            var $lang = "EN";
        }else{
            $lang ="AR";
        }
        $.ajax({
            type: 'POST',
            url: 'https://technicalcls.reflection-eg.com/api/AdminLogin/CustomerRegister?Email=' + email + '&BP=' + bp + '&Password=' + pass + '&Member=' + member + '&Contrct=' + contract + '&Lang='+$lang,
            success: function (msg) {
                console.log(msg);
                if (msg.Status == 'Registration Completed') {
                    $("#register").hide();
                    $('input').val('');
                    if (lang == "en") {
                        $('#output2').html('Register success.');
                    } else {
                        $('#output2').html(' تم التسجل بنجاح.');
                    }
                    if(lang == "en"){
                         $("#output2").append('<a href="https://socialnuts-projects.com/2019/porto/signin" class="register-btn">Login Here..</a >');
                    }else{
                         $("#output2").append('<a href="https://socialnuts-projects.com/2019/porto/signin" class="register-btn">سجل دخولك من هنا..</a >');
                    }
                   
                    // window.location.href =
                    //     'https://socialnuts-projects.com/2019/porto/signin';

                } else {
                    //                    alert(msg);
                    $('#output2').html(msg.Status);
                }
            }
        });
    }
}

function view() {

    event.preventDefault();
    var index = $('#index').val();
    var reg = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
    // pimage =

    var customers = $("body").find("input[name='array[]']").val();

    $.ajax({
        type: 'POST',
        url: 'https://socialnuts-projects.com/2019/porto/detailsData',
        data: {
            index: index,
            customers: customers,
        },
        success: function (msg) {
            console.log(msg)
            if (msg == 'success') {
                $('input[type=text], input[type=email]').val('');
                window.location.href =
                    'https://socialnuts-projects.com/2019/porto/details';
            } else
                $('#output3').html('<span style="color:#144885;">Error!!</span>');
        }
    });
}


function career() {
    //alert('');
    var i = 0;
    var k = 0;
    var file = $("#file").val();
    var filename = file.split("\\");
    // var phone = file.split("\\");
    var lang = $("#lang").val();
    if (filename[2] != undefined) {
        $('#filename').html("File Name:  " + filename[2]);
        $('#filename').show();
        $("#file_output").html(" ");


    }

    $('#errorMsg').hide();


    if ($.trim($('#file').val()) == '') {
        i++;
        $('#file').focus();
        if (lang == "en") {
            $("#file_output").html("Please choose file");
        } else {
            $("#file_output").html("من فضلك اختر ملف.");
        }

    } else if ($.trim($('#phone').val()) == '') {
        i++;
        $('#phone').focus();
        if (lang == "en") {
            $("#phone_output").html("Please Enter your phone");
        } else {
            $("#phone_output").html("من فضلك اخل رقم تليفونك.");
        }

    } else if ($.trim($('#name').val()) == '') {
        i++;
        if (lang == "en") {
            $('#name_output').html('Please Enter Name.');
        } else {
            $('#name_output').html(' من فضلك ادخل اسمك  .');
        }
        $('#name').focus();
    } else if (isNaN($('#phone').val())) {
        if (lang == "en") {
            $('#phone_output').html('Please Enter Vaild Phone Number.');
        } else {
            $('#phone_output').html(' من فضلك ادخل رقم تليفونك صحيح.');
        }
        $('#phone').focus();
    } else if ($.trim($('#email').val()) == '') {
        i++;
        if (lang == "en") {
            $('#email_output').html('Please Enter E-mail.');
        } else {
            $('#email_output').html(' من فضلك ادخل بريدك الإلكتروني .');
        }
        $('#email').focus();
    } else if ($.trim($('#email').val()) != '') {
        apos = document.getElementById('email').value.indexOf('@');
        dotpos = document.getElementById('email').value.lastIndexOf('.');
        if (apos < 2 || dotpos < 5) {
            k++;
            $('#errorMsg').html(
                '<p style="font-size:14px; text-align:center;float:none;color:red;">Invalid e-mail format.</p>'
            );
            i++;
            $('#email').focus();
        }
    }

    //alert($("#src").val());
    if (i == 0) {
        $('#careerSubmit').removeAttr("href");
        $('#careerSubmit').removeAttr("onclick");
        $('#loaderDiv').hide();
        $("#file_output").html("");
        $("#name_output").html("");

        $("#email_output").html("");

        $("#phone_output").html("");
        $('#loaderDiv').show();

        document.getElementById('coolform').submit();
    } else {



        // if (k == 0) {
        //     $('#errorMsg').html(
        //         '<p style="font-size:14px; text-align:center;float:none;color:red;">All fields are required</p>'
        //     );
        // }
        // $('#errorMsg').show();
    }
}

function showMore(id) {
    event.preventDefault();
    var offset = 12;
    $.ajax({
        type: 'POST',
        url: 'https://socialnuts-projects.com/2019/porto/home/showMore',
        data: {
            id: id,
            offset: offset
        },
        success: function ($msg) {
            console.log($msg);
            // $("body").find("div.active").find(".list-unstyled").isotope('destroy');
            if ($msg == 'sorry') {
                $("body").find("div.active").find(".list-unstyled").empty();
                $("body").find("div.active").find(".list-unstyled").html("Sorry No More images Found !!").css("text-align", "center").css("font-weight", "bold");
            } else {
                $("body").find("div.active").find(" div.btn-photo-all").empty();
                //    $("#all-news").empty();
                var $grid = $("body").find("div.active").find(".list-unstyled");
                $grid.append($msg);
                // $grid.isotope('appended', $msg).isotope('reloadItems').isotope({
                //     sortBy: 'original-order'
                // });;

            }
        }
    });

}