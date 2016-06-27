import $ from 'jquery'

var logIt = function(data) {
  console.log("You've got a bug!" + data)
}
var run = function(results) {
  results.forEach(function(item) {
    if (item.type != "select") {
    var htmlString = `<div class="input">
                        <i class="fa ${item.icon}" aria-hidden="true"></i>
                        <label for="${item.id}">${item.label}
                          <input id="${item.id}" type="${item.type}">
                        </label>
                      </div>`
    $('#form').append(htmlString)
    }
    if (item.options.length > 0) {
      var optionString = `<div class="select"><select>`
      item.options.forEach(function(opt) {
        optionString += `<option value="opt.value">${opt.label}</option>`
      })
      optionString += `</select></div>`
    }
    $("#form").append(optionString)
  })

}

var results = $.ajax( {
  url: 'http://json-data.herokuapp.com/forms',
  dataType: 'json',
  success: run,
  error: logIt
})