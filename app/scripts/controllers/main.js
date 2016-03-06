'use strict';

$(document).ready(function () {

	$("#show-more-button").click(function (e) {
		e.preventDefault();
		$('#show-more-button').hide();
		$('.loading_more').show();
		console.log("testing");

	});

	$("#upload_button").click(function (e) {
		console.log("click");
		$('#upload_container').show();
		$('#modal-close-button').show();
		$('#upload_button').hide();
		$('#search_button').hide();

	});

	$("#search_button").click(function (e) {
		console.log("click");
		$('.search').show();
		$('#upload_button').hide();
		$('#search_button').hide();

	});
	$("#modal-close-button").click(function (e) {
		console.log('$("#modal-close-button").click');
		$('#upload_container').hide();
		$('#modal-close-button').hide();
		$('#upload_button').show();
		$('#search_button').show();
	});

	$(".submit_upload").click(function (e) {
		$('#upload_container').hide();
		$('#modal-close-button').hide();
		$('#upload_button').show();
		$('#search_button').show();

	});
});