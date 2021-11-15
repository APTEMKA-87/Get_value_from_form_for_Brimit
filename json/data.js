let form = document.getElementById('form')

form.addEventListener('submit', function (event) {
    event.preventDefault()

    const FName = document.getElementById('FName').value

    const LName = document.getElementById('LName').value;

    const Email = document.getElementById('Email').value;

    const Phone = document.getElementById('Phone').value;

    const Sex = document.querySelector(`input[name="Sex"]:checked`).value;

    const Skills = document.querySelectorAll(`input[name="Skills"]`);

    const Department = document.getElementById('Department');

    const arrSkills = []

    for (let checkbox of Skills) {
        if (checkbox.checked)
            arrSkills.push(checkbox.value)
    }

    function getSelectValues(select) {
        let result = [];
        let options = select && select.options;
        let opt;

        for (let i = 0, iLen = options.length; i < iLen; i++) {
            opt = options[i];

            if (opt.selected) {
                result.push(opt.value || opt.text);
            }
        }
        return result;
    }

    let obj = {
        FName: FName,
        LName: LName,
        Email: Email,
        Phone: Phone,
        Sex: Sex,
        Skills: arrSkills,
        Department: getSelectValues(Department)
    }

    console.log(obj)

    let queryString = Object.keys(obj).map(key => key + '=' + obj[key]).join('&');

    console.log(queryString)

    let queryString_obj = JSON.parse('{"' + queryString.replace(/&/g, '","').replace(/=/g, '":"') + '"}',
        function (key, value) {
            return key === "" ? value : decodeURIComponent(value)
        })

    console.log(queryString_obj)
})

