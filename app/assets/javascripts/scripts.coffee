# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

$ ->
  $("#new-external").click ->
    console.log("add a new row to the table")
    $("#new-external-form").removeClass("hidden")
    # form = $("#hidden-new-external-form").clone().prop('id', 'hidden-new-external-form').removeClass('hidden')
    # $("external-header-row").after(form)

$("#create-external").click ->
  console.log("make an ajax put request")


$("#update-external").click ->
  console.log("make an ajax post request")

$("#destroy-external").click ->
  console.log("make an ajax delete request")


$("#new-realm").click ->
  console.log("add a new row to the table")

$("#create-realm").click ->
  console.log("make an ajax put request")

$("#update-realm").click ->
  console.log("make an ajax post request")

$("#destroy-realm").click ->
  console.log("make an ajax delete request")

