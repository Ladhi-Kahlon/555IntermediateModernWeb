const hobbiesArray2 = [
    { name: 'volleyball', lengthInYearsAtHobby: 25 },
    { name: 'cooking', lengthInYearsAtHobby: 15 },
    { name: 'swimming', lengthInYearsAtHobby: 11 }
];


function printHobbyInfo2(hobby) {
    console.log(` ${hobby.name} has been an interest for ${hobby.lengthInYearsAtHobby} years`)
}

for (let hobby of hobbiesArray2) {
    printHobbyInfo2(hobby);
}

var hobbiesInfoDiv2 = document.getElementById("hobbiesInfo2");
hobbiesInfoDiv2.innerHTML = getHobbiesAsTableHTML2();
// var myElemDiv = document.createElement('div');
// myElemDiv.innerHTML = getHobbiesAsTableHTML2();
// hobbiesInfoDiv.insertAdjacentElement('afterend', myElemDiv);

function getHobbiesAsTableHTML2() {
    let hobbyInfo = `
        <table class="tableStyle">
            <tr><th>Sport</th><th>Years in sport</th></tr>
    `;
    hobbiesArray2.forEach(hobby => {
        hobbyInfo+= `<tr>
                        <td>${hobby.name}</td>
                        <td>${hobby.lengthInYearsAtHobby}</td>
                        </tr>`;
        });
        hobbyInfo+=`</table>`;
    
      return  hobbyInfo;
}


