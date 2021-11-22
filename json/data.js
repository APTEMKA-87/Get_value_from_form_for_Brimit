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
    document.location.replace(document.location.pathname + '?' + queryString);
})

window.addEventListener('load', function (event) {

    const queryString = event.path[0].location.search.substr(1);

    if (queryString) {
        document.getElementById('FName').value = queryString?.split('&')[0].split('=')[1]
        document.getElementById('LName').value = queryString.split('&')[1].split('=')[1]
        document.getElementById('Email').value = queryString.split('&')[2].split('=')[1]
        document.getElementById('Phone').value = queryString.split('&')[3].split('=')[1]

        const sex = queryString.split('&')[4].split('=')[1];
        console.log(sex)
        document.querySelector(`input[id="Male"]`).checked = sex === 'Male';
        document.querySelector(`input[id="Female"]`).checked = sex === 'Female';

        const skills = queryString.split('&')[5].split('=')[1]
        console.log(skills)
        document.querySelector(`input[id="HTML"]`).checked = skills.includes('HTML');
        document.querySelector(`input[id="CSS"]`).checked = skills.includes('CSS');
        document.querySelector(`input[id="JavaScript"]`).checked = skills.includes('JavaScript');
        document.querySelector(`input[id="AJAX"]`).checked = skills.includes('AJAX');

        const department = queryString.split('&')[6].split('=')[1]
        console.log(department)
        document.querySelector(`option[value="FrontEnd"]`).selected = department.includes('FrontEnd');
        document.querySelector(`option[value="Sitecore"]`).selected = department.includes('Sitecore');
        document.querySelector(`option[value="SalesForce"]`).selected = department.includes('SalesForce');
        document.querySelector(`option[value="Sharepoint"]`).selected = department.includes('Sharepoint');
    }

})






