const data = [
    {
        name: 'John',
        age: 25,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/75.jpg'
    },
    {
        name: 'Dennis',
        age: 40,
        city: 'Gujrat',
        language: 'Go',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/76.jpg'
    },
    {
        name: 'Jack',
        age: 28,
        city: 'Banglore',
        language: 'Javasrcipt',
        framework: 'Spring',
        image: 'https://randomuser.me/api/portraits/men/77.jpg'
    },
    {
        name: 'Selina',
        age: 34,
        city: 'Bihar',
        language: 'C',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/women/75.jpg'
    },
    {
        name: 'David',
        age: 33,
        city: 'Patna',
        language: 'C++',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/78.jpg'
    }
]
function cvIterator(profile){
    let nextIndex=0;
    return{
        next:function(){
            return nextIndex<profile.length?{value:profile[nextIndex++],done:false}:{done:true}
        }
    };
}

const next = document.getElementById('next');
const candidate = cvIterator(data);
nextCV();
next.addEventListener('click',nextCV);


function nextCV(){
    const CurrentCandidate = candidate.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if(CurrentCandidate!=undefined){

        image.innerHTML = `<img src='${CurrentCandidate.image}'>`;
        profile.innerHTML = `<ul class="list-group list-group-flush">
        <li class="list-group-item">Name : ${CurrentCandidate.name}</li>
        <li class="list-group-item">Age : ${CurrentCandidate.age}</li>
        <li class="list-group-item">Lives in ${CurrentCandidate.city}</li>
        <li class="list-group-item">Primarily works on ${CurrentCandidate.language}</li>
        <li class="list-group-item">Uses ${CurrentCandidate.framework}</li>
        </ul>`
    }
    else{
        alert('End of candidate applications');
        window.location.reload();
    }
}