function validate() {
  let plan = document.forms['myform']['plan'].value
  let sel_opt = document.forms['myform']['sel_opt'].value

  if (plan == '') {
    document.getElementById('error1').innerHTML = 'Please select anyone'

    return false
  } else if (plan == 'a' || plan == 'b' || plan == 'c') {
    document.getElementById('error1').innerHTML = ''
  }

  if (sel_opt == 'Select an Option') {
    document.getElementById('error2').innerHTML = 'Please select anyone'
    return false
  } else if (sel_opt == 'a' || sel_opt == 'b' || sel_opt == 'c') {
    document.getElementById('error2').innerHTML = ''
  }
}