(function ($) {

    //Componenets to Construct Pagination
    //i) The pagination duh!!!!
    //ii) The 4 buttons navigation
    //ii) Parameters:
    //    a) Total Records, var a
    //    b) Pagination View Per Page [5,10,15]....  var b
    //    c) Real Pagination number to display -->  a%b==0? a/b : (a/b)+1 
    //    d) Default Current Page Index, Start Page and End Page
    //
    var getPaginationTotal,realPaginationTotal, currStartPage, currEndPage,currentPageIndex=1, totalRecords;

    $.fn.tablePagination = function(settings) {

        var setting = $.extend({
            totalRecord: null,   
           // paginationSetting: null,
            pageEnumeration: null,
            pageUIIndex:null,             
            startPage:1,            
            endPage: 10,                        //Default selection is at page 10.
            data: null
            }, settings);
              
        //Construct the HTML elements of pagination
        init(this, settings.pageEnumeration);

        getPaginationTotal = Math.floor(setting.totalRecord / parseInt($("#paginationSettings").val()));
        realPaginationTotal = (setting.totalRecord % parseInt($('#paginationSettings').val()) == 0) ? getPaginationTotal : ((setting.totalRecord <= parseInt($('#paginationSettings').val()) && setting.totalRecord % parseInt($('#paginationSettings').val()) == 0) ? getPaginationTotal : getPaginationTotal + 1);
        //totalRecords = settings.totalRecord;          

        //Referencs: http://stackoverflow.com/questions/1359018/in-jquery-how-to-attach-events-to-dynamic-html-elements
        constructPagination(settings.startPage, settings.endPage, 1, realPaginationTotal, settings.pageUIIndex, this);

        $(this).on("click", '#firstNext', function () {
           constructPagination((currStartPage + settings.pageUIIndex), (currEndPage + settings.pageUIIndex), 1, realPaginationTotal, settings.pageUIIndex);
        });

        $(this).on("click", '#firstPrev', function () {
            constructPagination((currStartPage - settings.pageUIIndex), (currEndPage - settings.pageUIIndex), 1, realPaginationTotal, settings.pageUIIndex);
        });

        $(this).on("click", "#nextButton", function () {
            currentPageIndex += 1;
            if (currentPageIndex > currEndPage) {
                constructPagination((currStartPage + settings.pageUIIndex), (currEndPage + settings.pageUIIndex), 1, realPaginationTotal, settings.pageUIIndex);
            }
            drawDataTable(settings.data, currentPageIndex,settings.totalRecord);
            navigateButtonSettings();
        });

        $(this).on("click", "#previousButton", function () {
            currentPageIndex -= 1;
            if (currentPageIndex < currStartPage) {
                constructPagination((currStartPage - settings.pageUIIndex), (currEndPage - settings.pageUIIndex), 1, realPaginationTotal, settings.pageUIIndex);
            }
            drawDataTable(settings.data, currentPageIndex, settings.totalRecord);
            navigateButtonSettings();
        });

        $(this).on("click", "#firstButton", function () {
            currentPageIndex = 1;
            constructPagination(currentPageIndex, (currentPageIndex + settings.pageUIIndex) - 1, 1, realPaginationTotal, settings.pageUIIndex);
            drawDataTable(settings.data, currentPageIndex, settings.totalRecord);
            navigateButtonSettings();
        });

        $(this).on("click", "#LastButton", function () {
            currentPageIndex = realPaginationTotal;
            if (currentPageIndex <= realPaginationTotal) {
                constructPagination((realPaginationTotal - (settings.pageUIIndex-1)), realPaginationTotal, 1, realPaginationTotal, settings.pageUIIndex);
            }
            drawDataTable(settings.data, currentPageIndex, settings.totalRecord);
            navigateButtonSettings();
        });

        $(this).on("change", "#paginationSettings", function () {
            //ToDo: Need to refactor these 2 line of codes make it look like dynamic.
            getPaginationTotal = Math.floor(setting.totalRecord / parseInt($(this).val()));
            realPaginationTotal = (setting.totalRecord % parseInt($(this).val()) == 0) ? getPaginationTotal : ((setting.totalRecord <= parseInt($(this).val()) && setting.totalRecord % parseInt($(this).val()) == 0) ? getPaginationTotal : getPaginationTotal + 1);
            constructPagination(settings.startPage, settings.endPage, 1, realPaginationTotal, settings.pageUIIndex, this);
            drawDataTable(settings.data, currentPageIndex, settings.totalRecord);
        });

        drawDataTable(settings.data, currentPageIndex, settings.totalRecord);

        //Register the SQL script and use this reference for skip and take data: http://stackoverflow.com/questions/26801031/skip-and-return-objects-from-list-of-object-using-lodash-underscore
        $("#paginationNumberRange").on("click", "span[id^='page']", function () {
            currentPageIndex = parseInt($(this).text());
            drawDataTable(settings.data, currentPageIndex, settings.totalRecord);
            navigateButtonSettings();
        });
    };

    function constructPagination(startPage, endPage, firstIndex, realPaginationTotal, pageUIIndex) {
        var paginationHTML = "";
        currStartPage = startPage;
        currEndPage = endPage;
        //First Pagination Segment
        if (startPage <= firstIndex && realPaginationTotal > pageUIIndex && startPage != 0) {
            for (var i = startPage; i <= endPage; i++) {
                paginationHTML += "<span id='page" + i + "' class='pagination-css'>" + i.toString() + "</span> ";
            }
            paginationHTML += "<span id='firstNext' style='cursor:pointer;' onclick=" + this.construct+ ">...</span>";// onclick=this.constructPagination(" + (startPage + 10) + "," + (endPage + 10) + "," + firstIndex + "," + realPaginationTotal + ");>...</span>";
        } else if ( endPage < realPaginationTotal && realPaginationTotal > pageUIIndex && startPage != 0) {
            paginationHTML += "<span id='firstPrev' style='cursor:pointer;' onclick=constructPagination(" + (startPage - 10) + "," + (endPage - 10) + "," + firstIndex + "," + realPaginationTotal + ");>...</span>";
            //Construct the pagination number pages. 
            for (var j = startPage; j <= endPage; j++) {
                paginationHTML += "<span id='page" + j + "' class='pagination-css' onclick=showPageAnnouncement(" + j + "," + startPage + "," + endPage + ");>" + j.toString() + "</span> ";
            }
            paginationHTML += "<span id='firstNext' style='cursor:pointer;'>...</span>";// onclick=this.constructPagination(" + (startPage + 10) + "," + (endPage + 10) + "," + firstIndex + "," + realPaginationTotal + ");>...</span>";

        }
        //Last Pagination Segment
        else if (endPage >= realPaginationTotal && realPaginationTotal > pageUIIndex && startPage != 0) {
            paginationHTML += "<span id='firstPrev' style='cursor:pointer;' onclick=" + this.construct + ">...</span>";
            for (var i = startPage; i <= realPaginationTotal; i++) {
                paginationHTML += "<span id='page" + i + "' class='pagination-css'>" + i.toString() + "</span> ";
            }
        }
        //Records Less than Pagination Settings
        else {
            for(var m=startPage; m <= realPaginationTotal ; m++)
            {
                paginationHTML += "<span id='page" + m + "' class='pagination-css' onclick=showPageAnnouncement(" + (m + 1) + "," + endPage + "," + realPaginationTotal + ");>" + m.toString() + "</span> ";
            }
        }

        //ToDo 17/8/2015: When on other pagination range set, try to get the current selected page and highlight back with the css selector when construct back the pagination range where the current selected page is within the pagination range upon construct.
        //Dynamic control of 4 navigation buttons
        navigateButtonSettings();

        return $("#paginationNumberRange").html(paginationHTML);

    }


 /*   function buildPaginationUI(divObject) {

        return divObject.each(function () {
            divObject.find("#paginationNumberRange").html(paginationHTML);

        });
    }
*/

    // References: https://learn.jquery.com/plugins/advanced-plugin-concepts/
    function init(obj, pageEnumeration) {
        return obj.each(function () {
            $(obj).append("<table id='PaginationControl' width='100%'>");
            var divContent = $(obj);
            divContent.find("table").append("<tr></tr");
            divContent.find("tr").append("<td width='15%' align='left'>Page Size: <select id='paginationSettings'>");
            //ToDo: Can Consider to Use Bootstrap CSS to enhance the UI design fro dropdown list. Ref:http://www.w3schools.com/bootstrap/bootstrap_dropdowns.asp
            for(var i=0; i<pageEnumeration.length; i++){
                divContent.find("select").append("<option value" + pageEnumeration[i] + ">" + pageEnumeration[i] + "</option");
            }

            divContent.find("tr").append("<td width='65%' align='center'><button id='firstButton' type='button' class='btn btn-default' style='display:inline'><<</button>");
            divContent.find("tr td:nth-child(2)").append("<button id='previousButton' type='button' class='btn btn-default' style='display:inline'><</button>");
            divContent.find("tr td:nth-child(2)").append("<div id='paginationNumberRange' style='display:inline'>");
            divContent.find("tr td:nth-child(2)").append("<button id='nextButton' type='button' class='btn btn-default' style='display:inline'>></button>");
            divContent.find("tr td:nth-child(2)").append("<button id='LastButton' type='button' class='btn btn-default' style='display:inline'>>></button>");

            divContent.find("tr").append("<td width='20%' align='right'>Views <div id='currRecordStart' style='display:inline'></div> - <div id='currRecordEnd' style='display:inline'></div> of <div id='PaginationTotal' style='display:inline'></div>");
        });
    }

    function drawDataTable(data, currentPageIndex,totalRecords) {
        $("span[id^='page']").removeClass("currentSelected");
        var tempDataHolder = [];
        data.sort(function (a,b) {
            return a.AnnouncementID - b.AnnouncementID;
        });

        $("#page" + currentPageIndex).addClass("currentSelected");
        var perPageRecord = parseInt($("#paginationSettings").val());
        var skip = (currentPageIndex * perPageRecord) - perPageRecord;
        tempDataHolder = data.slice(skip, skip + perPageRecord);

        var tableHTML = "<table align='center' class='paginationTable' width='50%' border='2'>";
        for (var i = 0; i < tempDataHolder.length; i++) {
            tableHTML += "<tr><td>" + tempDataHolder[i].AnnouncementID + "</td><td>" + tempDataHolder[i].AnnouncementDate + "</td><td>" + tempDataHolder[i].AnnouncementContent + "</td></tr>";
        }

        $("#currRecordStart").text((parseInt($("#paginationSettings").val())*currentPageIndex)-parseInt($("#paginationSettings").val())+1);
        $("#currRecordEnd").text((realPaginationTotal == 0) ? 0 : ((currentPageIndex == realPaginationTotal) ? totalRecords : currentPageIndex * parseInt($("#paginationSettings").val())));
        $("#PaginationTotal").text(totalRecords);


        return $("#dataTable").html(tableHTML);
    }

    function navigateButtonSettings() {
        if (currentPageIndex == 1 && currentPageIndex == realPaginationTotal) {
            $("#firstButton").attr("disabled", "disabled");
            $("#previousButton").attr("disabled", "disabled");
            $("#nextButton").attr("disabled", "disabled");
            $("#LastButton").attr("disabled", "disabled");
        }
        else if (currentPageIndex==1) {
            $("#firstButton").attr("disabled", "disabled");
            $("#previousButton").attr("disabled", "disabled");
            $("#nextButton").removeAttr("disabled");
            $("#LastButton").removeAttr("disabled");
        }
        else if (currentPageIndex == realPaginationTotal) {
            $("#nextButton").attr("disabled", "disabled");
            $("#LastButton").attr("disabled", "disabled");
            $("#firstButton").removeAttr("disabled");
            $("#previousButton").removeAttr("disabled");
        }
        else {
            $("#firstButton").removeAttr("disabled");
            $("#previousButton").removeAttr("disabled");
            $("#nextButton").removeAttr("disabled");
            $("#LastButton").removeAttr("disabled");
        }
    }

}(jQuery));