import $ from 'jquery'
$('document').ready(function(){
var logIt = function(data) {
  console.log("You've got a bug!" + data)
}

var run = function(results) {
  results.forEach(function(item) {
    if (item.type != "select" && item.type != "textarea") {
    var htmlString = `<div class="input">
                        <i class="fa ${item.icon}" aria-hidden="true"></i>
                        <label for="${item.id}">${item.label}
                          <input id="${item.id}" type="${item.type}">
                        </label>
                      </div>`
    $('#form').append(htmlString)
    }

    if (item.type === "textarea") {
      var textareaString = `<div class="textarea">
                              <i class="fa ${item.icon} aria-hidden="true"></i>
                              <label class="textarea-label" for="${item.id}">${item.label}<textarea id="${item.id}"></textarea>
                            </div>`
      $('#form').append(textareaString)
    }

    if (item.options.length > 0) {
      var optionString = `<div class="select"><select><option value="Select your language...">Select your language...</option>`
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
})