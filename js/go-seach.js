
function getserchdata(kw) {

    $.ajax({
        type: "post",
        url: SERVERCOM + "/api/v1/videos",
        data: { videoTitle: kw },
        dataType: "json",
        success: function (response) {
            // alert("response.data.length:"+response.data.length);
            if (response.data.length > 0) {
                for (var i = 0; i < response.data.length; i++) {
                    $("#lbf-sea-vcard").append(setc(response.data[i]));
                }
            } else {
                da = null;
                alert("没有找到视频");
            }

        }
    });

}

$(document).ready(function () {
    // alert(GetQueryString("keyword"));
    if (GetQueryString("keyword") != "") {
        getserchdata(GetQueryString("keyword"));
    }
    $("#yfm_seabut").click(function (e) {
        if ($("#yfm_seainput").val() == "") {
            alert("请输入搜索词");
        } else {
            getserchdata($("#yfm_seainput").val());
        }


    });
});

// yfm


