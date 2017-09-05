$(document).ready(function(){
	$('#time_table').hide();
	$('#load_btn').click(function(){
		var masv = $('#input_msv').val();
		var url = 'http://daotao.vnua.edu.vn/Default.aspx?page=thoikhoabieu&sta=1&id='+masv;
		$('#load_vnua').load(url,function(){
				var subjects_total = $('#ctl00_ContentPlaceHolder1_ctl00_pnlHeader > table > tbody > tr:nth-child(2) > td > div.grid-roll2').children().length;
				var student_name =  $('#ctl00_ContentPlaceHolder1_ctl00_lblContentTenSV').text();
				$('#student_name').append('Sinh viên: ' + student_name);
				//var tadas = $('#ctl00_ContentPlaceHolder1_ctl00_pnlHeader > table > tbody > tr:nth-child(2) > td > div.grid-roll2 > table:nth-child(1) > tbody > tr > td:nth-child(14) > div').attr('onmouseover');
				//-----------------------------------------

				for(i=0; i<= subjects_total+2; i++){
				  	var selec_ten_mon_hoc = '';
				  	var ten_mon_hoc = null;
				  	var selec_phong_hoc = '';
				  	var phong_hoc = null;
				  	var selec_tiet_bd = '';
				  	var tiet_bd = null;
				  	var selec_date = '';
				  	var date = null;
				  	var tam = '';
				  	var time_start = '';
				  	var time_off = '';

				  	selec_date = "#ctl00_ContentPlaceHolder1_ctl00_pnlHeader > table > tbody > tr:nth-child(2) > td > div.grid-roll2 > table:nth-child("+i+") > tbody > tr > td:nth-child("+9+")>div";
				  	selec_date_2 = "#ctl00_ContentPlaceHolder1_ctl00_pnlHeader > table > tbody > tr:nth-child(2) > td > div.grid-roll2 > table:nth-child("+i+") > tbody > tr > td:nth-child(9) > table > tbody > tr > td";
				  	date = $(selec_date).text();
				  	
				  	selec_tiet_bd = "#ctl00_ContentPlaceHolder1_ctl00_pnlHeader > table > tbody > tr:nth-child(2) > td > div.grid-roll2 > table:nth-child("+i+") > tbody > tr > td:nth-child("+10+")";
				  	selec_tiet_bd_2 = "#ctl00_ContentPlaceHolder1_ctl00_pnlHeader > table > tbody > tr:nth-child(2) > td > div.grid-roll2 > table:nth-child("+i+") > tbody > tr > td:nth-child(10) > table > tbody > tr > td";
				  	tiet_bd = $(selec_tiet_bd).text();
				  	tiet_bd_2 = $(selec_tiet_bd_2).text();
				  	
				  	selec_phong_hoc = "#ctl00_ContentPlaceHolder1_ctl00_pnlHeader > table > tbody > tr:nth-child(2) > td > div.grid-roll2 > table:nth-child("+i+") > tbody > tr > td:nth-child("+12+")>div";
				  	phong_hoc = $(selec_phong_hoc).text();
					
					selec_ten_mon_hoc = "#ctl00_ContentPlaceHolder1_ctl00_pnlHeader > table > tbody > tr:nth-child(2) > td > div.grid-roll2 > table:nth-child("+i+") > tbody > tr > td:nth-child("+2+")";
					ten_mon_hoc = $(selec_ten_mon_hoc).text();

					if (tiet_bd == 1) {
						tam = '1';
						time_start = "6h30"
						time_off = " 9h10";
					}
					else if (tiet_bd == 2) {
						tam = '1';
					}
					else if (tiet_bd == 4) {
						tam = '2';
						time_start = "9h25"
						time_off = "12h05";

					}

					else if (tiet_bd == 7) {
						tam = '3';
						time_start = "12h30"
						time_off = "15h10";
					}
					else if (tiet_bd == 8) {
						tam = '3';
					}

					else {
						tam = '4';
						time_start = "15h25 "
						time_off = "18h05";
					}

					

					$('#'+date+tam).css("background-color", "yellow");
					$('#'+date+tam).html('<b>'+ten_mon_hoc+'</b>' + '<br/>' + 'Phòng: ' + phong_hoc + '<br/>' 
							+ 'Vào: ' + time_start + '<br/>' + 'Ra: ' + time_off
					);
					
					date_2 = $(selec_date_2).text(); 
					if (date_2 != undefined) {
					if (tiet_bd_2 == 1) {
						tam_2 = '1';
						time_start = "6h30"
						time_off = " 9h10";
					}
					else if (tiet_bd_2 == 2) {
						tam_2 = '1';
					}

					else if (tiet_bd_2 == 4) {
						tam_2 = '2';
						time_start = "9h25"
						time_off = "12h05";

					}

					else if (tiet_bd_2 == 7) {
						tam_2 = '3';
						time_start = "12h30"
						time_off = "15h10";
					}
					else if (tiet_bd_2 == 8) {
						tam_2 = '3';
					}

					else if (tiet_bd_2 == 10) {
						tam_2 = '4';
						time_start = "15h25 "
						time_off = "18h05";
					} 

					else {
						tam_2 = '4';
					}
						$('#'+date_2+tam_2).css("background-color", "yellow");
						$('#'+date_2+tam_2).html('<b>'+ten_mon_hoc+'</b>' + '<br/>' + 'Phòng: ' + phong_hoc + '<br/>' 
							+ 'Vào: ' + time_start + '<br/>' + 'Ra: ' + time_off
						);
					}
					$('#time_table').show();
				 } 
		});
	});
});
