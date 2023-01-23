let requestURL = "http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}&pretty=true"

fetch(requestURL)
.then((res)=>{ 
    return res.json()})
.then((data)=>{
    console.log(data)
    return populateList(data);
});



let studentData = document.getElementById("studentData");

function populateList(students){


    let stringStudent = ''
    students.map((student)=>{

        stringStudent += 
            `<tr>
                <td> ${student.fname} </td>
                <td> ${student.lname} </td>
                <td> ${student.address} </td>
                <td> ${student.city} </td>
                <td> ${student.tel} </td>

            </tr>`
    })

    studentData.innerHTML = stringStudent;

}