/* SCORM */

var scorm = pipwerks.SCORM;
var cont = 1;

$(document).ready(function () {
	init();
});

function init(){

	scorm.version = "1.2";
	var callSucceeded = scorm.init();

	if(callSucceeded){
		if(scorm.get("cmi.core.entry") != "ab-initio"){
			cont = scorm.get("cmi.core.lesson_location");
		}
		if (String(scorm.get("cmi.core.student_name")).length > 0 && String(scorm.get("cmi.core.student_name")).indexOf(',') != 1) {
	        $("#nombre").text(String(scorm.get("cmi.core.student_name")));
	    } else {
	         $("#nombre").text("");
	    }
    }
	main();
}

window.onunload = window.onbeforeunload = function (){
	end();
}

function end(){
	scorm.set("cmi.core.lesson_location", cont);
	if(cont==slides)
		scorm.set("cmi.core.lesson_status", "completed");
	else
		scorm.set("cmi.core.lesson_status", "incomplete");
	scorm.save();
	var callSucceeded = scorm.quit();
}