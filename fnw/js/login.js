/**
 * Created by Lygitan on 2017/2/8.
 */
$(function () {
    // 切换登录显示
    $(".qrcode").on("click",function () {
        $(this).css("display","none");
        $(".switch-tip").css("display","none");
        $(".pc").css("display","block");
        $("#qr-login").removeClass("hide");
        $("#pc-login").addClass("hide");
    });
    $(".pc").on("click",function () {
        $(this).css("display","none");
        $(".switch-tip").css("display","block");
        $(".qrcode").css("display","block");
        $("#pc-login").removeClass("hide");
        $("#qr-login").addClass("hide");
    });

    // 是否自动登录
    $(".auto-rmb").on("click",function () {
        $(".msg-error").css("display","none");
        $(this).prop("checked") ? $(".msg-warn").show() : $(".msg-warn").hide();
    });

    //账号密码登录
    $(".account-login").on("click",function () {
        $(".account-login,#login-mobile").css("display","none");
        $(".switch-tip,.forget,.login-switch,#login-form,.login-gate").css("display","block");
    });

    $("input").on("focus",function () {
        $(this).css("border-color","#999");
    });
    $("input").on("blur",function () {
        $(this).css("border-color","");
    });

    //手机验证码登录
    $(".mobile-login").on("click",function () {
        $(".account-login,#login-mobile").css("display","block");
        $(".switch-tip,.forget,.login-switch,#login-form,.login-gate").css("display","none");
    });

    // 登录验证
    $(".login-submit").on("click",function () {
        // var usernameVal = $("input[name='username']").val();
        // var passwordVal = $("input[name='password']").val();
        // var telReg = /(^1[3|4|5|7|8][0-9]{9}$)/;
        // var emailReg = /^[a-z0-9]([a-z0-9\\.]*[-_]{0,4}?[a-z0-9-_\\.]+)*@([a-z0-9]*[-_]?[a-z0-9]+)+([\.][\w_-]+){1,5}$/i;
        // var passwordReg = /^[a-z0-9]{6,16}$/i;
        // $(".msg-warn").css("display","none");
        // if (usernameVal == "" && passwordVal == "") {
        //     $(".msg-error").css("display","block");
        // } else if (!telReg.test(usernameVal) && !emailReg.test(usernameVal) || !passwordReg.test(passwordVal)) {
        //     $(".msg-error").css("display","block");
        // } else {
        //     $(".msg-error").css("display","none");
        // }

        $.getJSON("json/loginJson.json",function (data) {
            var usernameVal = $("input[name='username']").val();
            var passwordVal = $("input[name='password']").val();
            var user = data.user;
            var userLen = user.length;
            for(var i = 0; i < userLen; i++) {
                var name = user[i].username;
                var tel = user[i].telephone;
                var email = user[i].Email;
                var pwd = user[i].password;
                if (usernameVal ==  name || usernameVal == tel || usernameVal ==  email) {
                    if (passwordVal == pwd) {
                        $(".msg-error").css("display","none");console.log("true");
                        setTimeout(function () {
                            window.location.href = "member.html";
                        },1000);
                        return;
                    } else {
                        $(".msg-error").css("display","block");console.log("false");
                        return;
                    }
                } else {
                    $(".msg-error").css("display","block");console.log(i);
                }
            }
        });

        // $(".cpcchange").on("click",function () {
        //     var codeImgUrl = 'https://passport.feiniu.com/dovcode/getVcodeL?v='+(new Date).getTime();
        //     $(this).parent().siblings(".vcode").removeAttrs("src").attr("src",codeImgUrl);
        // });
        
    });
});