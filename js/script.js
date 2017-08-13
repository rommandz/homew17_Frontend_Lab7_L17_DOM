/*jshint esversion: 6 */
(function() {
    var students = [{
            name: 'Liudmyla',
            lastName: 'Bashta',
            img: 'https://www.plagiarismtoday.com/wp-content/uploads/2016/07/nyancat-385-sized.jpg',
            coverImg: 'http://i2.kym-cdn.com/photos/images/facebook/000/243/865/8f3.jpg',
            email: 'liudmyla.bashta@gmail.com',
            skills: ['Javascript', 'HTML', 'CSS']
        },
        {
            name: 'Roman',
            lastName: 'Chapkailo',
            img: 'https://s-media-cache-ak0.pinimg.com/736x/76/47/9d/76479dd91dc55c2768ddccfc30a4fbf5--pikachu-halloween-costume-diy-halloween-costumes.jpg',
            coverImg: 'http://fbcovershub.com/media/cover-250-beautiful-seaside-fb-cover-1388015476.jpg',
            email: 'romafromukraine@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Khrystyna',
            lastName: 'Dalivska',
            img: 'https://ichef-1.bbci.co.uk/news/660/cpsprodpb/169F6/production/_91026629_gettyimages-519508400.jpg',
            coverImg: 'https://sky.easypano.com/EPSUpload2/Pano/2017/04-12/12/636275969355928205/560_315.jpg',
            email: 'khrystynadalivska@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Ivan',
            lastName: 'Gnatyshyn',
            img: 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg',
            coverImg: 'https://static.pexels.com/photos/9135/sky-clouds-blue-horizon.jpg',
            email: 'gnatyshyn.ivan@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Andrii',
            lastName: "Hun'ka",
            img: 'https://cdn.pixabay.com/photo/2017/01/06/19/15/soap-bubble-1958650_960_720.jpg',
            coverImg: 'http://i.dailymail.co.uk/i/pix/2017/01/16/20/332EE38400000578-4125738-image-a-132_1484600112489.jpg',
            email: 'andriyggg@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Maksym',
            lastName: 'Izmailov',
            img: 'https://cdn.pixabay.com/photo/2016/04/17/10/38/doberman-1334497_960_720.jpg',
            coverImg: 'https://cdn.pixabay.com/photo/2016/03/06/05/03/sunrise-1239728_960_720.jpg',
            email: 'maksym.izmailov.lv@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Taras',
            lastName: 'Kharkhalis',
            img: 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg',
            coverImg: 'https://static.pexels.com/photos/9135/sky-clouds-blue-horizon.jpg',
            email: 'taraskharkhalis97@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Khrystia',
            lastName: 'Kondratovych',
            img: 'https://www.webdesign.org/img_articles/21726/17.jpg',
            coverImg: 'https://cdn.pixabay.com/photo/2016/10/13/10/37/dandelion-1737324_960_720.jpg',
            email: 'khrustyk@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Iuliia',
            lastName: 'Kurylo',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSljkhtuNjmEz2YeriPLPdntnTKNAwXFOAQSx1u6yAkPhYYw8-Pnw',
            coverImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT-qepvLICH8tsGuZqbZwpO7rk5afp274Lu4bgjai8Uo30gDKifA',
            email: 'iulia.kurylo@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Roman',
            lastName: 'Mandziuk',
            img: 'http://qnimate.com/wp-content/uploads/2014/03/images2.jpg',
            coverImg: 'http://html.com/wp-content/uploads/very-large-flamingo.jpg',
            email: 'rmandzyuk94@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Oleh',
            lastName: 'Marko',
            img: 'https://www.petdrugsonline.co.uk/images/page-headers/cats-master-header',
            coverImg: 'http://wiki-carpathians.com/wp-content/uploads/2015/02/climate-carpathians.jpg',
            email: 'olehmarko@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Anatoliy',
            lastName: 'Mazur',
            img: 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg',
            coverImg: 'https://static.pexels.com/photos/9135/sky-clouds-blue-horizon.jpg',
            email: 'mail4tolik@gmail.com',
            skills: ['JavaScript', 'CSS', 'HTML']
        },
        {
            name: 'Vitaliy',
            lastName: 'Palyushok',
            img: 'https://www.mammoth.com.au/res/images/mammothcloud/person-img.png',
            coverImg: 'http://facebookcovers.piz18.com/wp-content/uploads/2012/04/geek-fb-cover.jpg',
            email: 'xskeletons@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Stepan',
            lastName: 'Prokopiak',
            img: 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg',
            coverImg: 'https://static.pexels.com/photos/9135/sky-clouds-blue-horizon.jpg',
            email: 'sprokopyak96@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Stepan',
            lastName: 'Sendun',
            img: 'http://i.piccy.info/i9/a25aa836358fb23a05d6e9207c976dd9/1500482900/30480/1163444/537377255ws00241_57th_annua.jpg',
            coverImg: 'http://i.piccy.info/i9/b311de1aaff52532b361a178e8e35de4/1500482959/135850/1163444/0008540461_10.jpg',
            email: 'steve.neeson21@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Andrii',
            lastName: 'Soroka',
            img: '',
            coverImg: '',
            email: '',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Illya',
            lastName: 'Syniuk',
            img: 'https://www.facebook.com/photo.php?fbid=578754465640942&set=a.317602991756092.1073741826.100005191805447&type=3&theater',
            coverImg: 'https://www.facebook.com/photo.php?fbid=578802345636154&set=a.326403767542681.1073741828.100005191805447&type=3&theater',
            email: 'illyasynuik@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Andrew',
            lastName: 'Tantsiura',
            img: 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg',
            coverImg: 'https://static.pexels.com/photos/9135/sky-clouds-blue-horizon.jpg',
            email: 'andrii.tans@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Liliya',
            lastName: 'Tserkovna',
            img: 'https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-1/c0.17.160.160/p160x160/14725559_311214412585028_1352062715786494390_n.jpg?oh=b2cbcb3de774187b75d5253a276bc2f7&oe=59F5D47B',
            coverImg: 'https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/14368772_295189700854166_8626244722206545788_n.jpg?oh=02cf7516f9337bc439a42595ff893821&oe=5A051EC4',
            email: 'lilichkaTserkovna@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Anton',
            lastName: 'Zhygalov',
            img: 'http://static.tvtropes.org/pmwiki/pub/images/Hello_Kitty_Pink_2981.jpg',
            coverImg: 'https://thumb1.shutterstock.com/display_pic_with_logo/156640/208511908/stock-photo-arad-romania-september-hello-kitty-pattern-printed-on-cardboard-box-studio-shot-208511908.jpg',
            email: 'antonzhygalov@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        }
    ];

    let table = document.createElement("table");
    let thead = document.createElement("thead");
    let tbody = document.createElement("tbody");

    table.classList.add("table", "table-hover");
    table.appendChild(thead);
    table.appendChild(tbody);

    let mapHeadings = ["Student", "email", "Profile picture", "Skills", "Controls"];

    //add table whith students

    (function renderHeader() {
        let tr = document.createElement("tr");
        for (let i = 0; i < mapHeadings.length; i++) {
            let txt = document.createTextNode(mapHeadings[i]);
            let th = document.createElement("th");
            if (mapHeadings[i] === "Student" || mapHeadings[i] === "email" || mapHeadings[i] === "Skills") {
                let icon = document.createElement("span");
                icon.classList.add("glyphicon", "glyphicon-sort");
                th.appendChild(icon);
            }
            th.appendChild(txt);
            tr.appendChild(th);
            thead.appendChild(tr);
        }
        thead.addEventListener("click", sort);
    })();


    function renderStudents() {
        for (let i = 0; i < students.length; i++) {
            let tr = document.createElement("tr");

            let tdStudent = document.createElement("td");
            let txtStudent = document.createTextNode(students[i].name + " " + students[i].lastName);
            tdStudent.appendChild(txtStudent);

            let tdEmail = document.createElement("td");
            let txtEmail = document.createTextNode(students[i].email);
            tdEmail.appendChild(txtEmail);

            let tdPicture = document.createElement("td");
            let img = document.createElement("img");
            img.setAttribute("src", students[i].img);
            img.setAttribute("width", "30%");
            tdPicture.appendChild(img);

            let tdSkills = document.createElement("td");
            let txtSkills = document.createTextNode(students[i].skills);
            tdSkills.appendChild(txtSkills);

            let tdControls = document.createElement("td");
            let edit = document.createElement("button");
            edit.classList.add("glyphicon", "glyphicon-edit");
            let remove = document.createElement("button");
            remove.classList.add("glyphicon", "glyphicon-trash");
            tdControls.appendChild(remove);
            tdControls.appendChild(edit);

            tr.appendChild(tdStudent);
            tr.appendChild(tdEmail);
            tr.appendChild(tdPicture);
            tr.appendChild(tdSkills);
            tr.appendChild(tdControls);
            tbody.appendChild(tr);
        }
        tbody.addEventListener("click", alertName);
        tbody.addEventListener("click", removeStudent);
        tbody.addEventListener("click", editStudent);
    }

    let container = document.getElementById("container");
    container.appendChild(table);

    //end of adding table

    renderStudents();

    function clearStudents() {
        tbody.innerHTML = "";
    }

    //add form

    let form = document.createElement("form");

    (function() {
        for (let i = 0; i < mapHeadings.length; i++) {
            if (mapHeadings[i] === "Student") {
                let labelName = document.createElement("label");
                let inputName = document.createElement("input");
                let labelLastName = document.createElement("label");
                let inputLastName = document.createElement("input");
                let txtName = document.createTextNode("Name: ");
                let txtLastName = document.createTextNode("LastName: ");

                inputName.setAttribute("type", "text");
                inputLastName.setAttribute("type", "text");

                labelName.appendChild(txtName);
                labelName.appendChild(inputName);

                labelLastName.appendChild(txtLastName);
                labelLastName.appendChild(inputLastName);

                form.appendChild(labelName);
                form.appendChild(labelLastName);
            } else if (mapHeadings[i] === "Controls") {
                let saveBtn = document.createElement("input");
                let cancelBtn = document.createElement("input");

                saveBtn.setAttribute("type", "button");
                saveBtn.setAttribute("value", "Save");
                saveBtn.classList.add("btn", "btn-success");

                cancelBtn.setAttribute("type", "button");
                cancelBtn.setAttribute("value", "Cancel");
                cancelBtn.classList.add("btn", "btn-danger");

                form.appendChild(saveBtn);
                form.appendChild(cancelBtn);

            } else {
                let label = document.createElement("label");
                let input = document.createElement("input");
                let txt = document.createTextNode(`${mapHeadings[i]}: `);

                input.setAttribute("type", "text");

                label.appendChild(txt);
                label.appendChild(input);
                form.appendChild(label);
            }
        }
        form.addEventListener("click", saveStudent);
        form.addEventListener("click", resetForm);
    })();

    container.insertBefore(form, table);

    //end of adding form

    //listeners for table body

    function alertName(event) {
        let place = event.target;
        if (place.tagName === "IMG") {
            place = place.parentNode;
        }
        if (place.tagName === "TD") { //this prevents "alert" if buttons was clicked
            alert(place.parentNode.firstChild.innerHTML);
        }
    }

    function findIndexInArrByName(array, firstName, lastName) {
        for (let i = 0; i < array.length; i++) {
            if (array[i].name === firstName && array[i].lastName === lastName) {
                return i;
            }
        }
    }

    function removeStudent(event) {
        let place = event.target;
        if (place.classList.contains("glyphicon-trash")) {
            let remowedRow = place.parentNode.parentNode;
            let arrOfNameStudent = remowedRow.childNodes[0].innerHTML.split(" ");
            let indexOfStudent = findIndexInArrByName(students, arrOfNameStudent[0], arrOfNameStudent[1]);
            students.splice(indexOfStudent, 1);
            clearStudents();
            renderStudents();
            form.reset();
            document.getElementsByClassName("btn-success")[0].setAttribute("value", "Save");
        }
    }

    const isEdit = {
        value: false,
        indexToEdit: "none"
    }; // save info, if user press 'edit' icon

    function editStudent(event) {
        let mapToEdit = [];
        let place = event.target;
        if (place.classList.contains("glyphicon-edit")) {
            let rowToEdit = place.parentNode.parentNode;
            let cellsToEdit = rowToEdit.childNodes;

            for (let i = 0; i < cellsToEdit.length - 1; i++) {
                if (i === 0) {
                    mapToEdit.push(cellsToEdit[i].innerHTML.split(" ")[0]);
                    mapToEdit.push(cellsToEdit[i].innerHTML.split(" ")[1]);
                } else if (i === 2) {
                    mapToEdit.push(cellsToEdit[i].firstChild.getAttribute("src"));
                } else {
                    mapToEdit.push(cellsToEdit[i].innerHTML);
                }
            }

            let formFields = document.getElementsByTagName('form')[0].childNodes;

            for (let i = 0; i < formFields.length; i++) {
                if (formFields[i].hasChildNodes()) {
                    formFields[i].lastChild.value = mapToEdit[i];
                }
            }

            document.getElementsByClassName("btn-success")[0].setAttribute("value", "Edit");
            isEdit.value = true;
            isEdit.indexToEdit = findIndexInArrByName(students, mapToEdit[0], mapToEdit[1]);
        }
    }

    //end of listeners to table body

    //start listeners for form

    function resetForm(event) {
        let place = event.target;
        if (place.classList.contains("btn-danger")) {
            event.stopPropagation();
            place.parentNode.reset();
            document.getElementsByClassName("btn-success")[0].setAttribute("value", "Save");
        }
    }

    function saveStudent(event) {
        let place = event.target;
        if (place.classList.contains("btn-success")) {
            event.stopPropagation();

            let arrInfoFromForm = [];
            let studentInfo = {};
            let formChilds = form.childNodes;

            for (var i = 0; i < formChilds.length; i++) {
                if (formChilds[i].hasChildNodes()) {
                    arrInfoFromForm.push(formChilds[i].lastChild.value);
                    console.log(formChilds[i].lastChild.value);
                }
            }

            if (validForm(arrInfoFromForm)) { //check for valid data
                studentInfo = {
                    name: arrInfoFromForm[0],
                    lastName: arrInfoFromForm[1],
                    img: arrInfoFromForm[3],
                    email: arrInfoFromForm[2],
                    skills: arrInfoFromForm[4].split(",")
                };
                //check if we edit student, or create a new
                if (isEdit.value) {
                    students[isEdit.indexToEdit] = studentInfo;
                    document.getElementsByClassName("btn-success")[0].setAttribute("value", "Save");
                    isEdit.value = false;
                    isEdit.indexToEdit = "none"; //clear edit "state"
                } else {
                    students.unshift(studentInfo);
                }

                form.reset();
                clearStudents();
                renderStudents();
            }
        }
    }

    function validForm(arrOfInputs) {
        let isValid = true;
        for (let i = 0; i < arrOfInputs.length - 1; i++) { //in task description skills isn't mandatory field
            if (arrOfInputs[i].length === 0) {

                isValid = false;
                alert("Fields shouldn't be empty");
                break;
            }
            if (arrOfInputs[0].match(/[0-9]/) || arrOfInputs[1].match(/[0-9]/)) {
                isValid = false;
                alert("Name can't contain digits");
                break;
            }
            if (i === 2) {
                let signEmail = arrOfInputs[i].indexOf("@");
                let signDot = arrOfInputs[i].lastIndexOf("."); //some mails can contain two dot signs
                if (signEmail < 1 || signDot < signEmail + 2 || signDot + 2 >= arrOfInputs[i].length) {
                    isValid = false;
                    alert("Please enter valid email");
                    break;
                }
            }
        }
        return isValid;
    }

    //end listeners for form

    //sorting for table header


    (function iconsId() {
        let icons = document.getElementsByTagName("span");
        for (let i = 0; i < icons.length; i++) {
            icons[0].setAttribute("id", "Student");
            icons[1].setAttribute("id", "email");
            icons[2].setAttribute("id", "skills");
        }
    })(); // add ID for sort icons for make easier sorting

    const clickCount = {
        Student: 0,
        skills: 0,
        email: 0
    }; //save counts from each "sorting"

    function changeSortIcons(object, currentColumn, iconClassChange) {
        let currentCount = object[currentColumn];
        let sortingIcons = document.getElementsByTagName("span");

        for (let property in object) {
            if (object.hasOwnProperty(property)) {
                if (property !== currentColumn) {
                    object[property] = 0;
                }
            }
        }

        for (let i = 0; i < sortingIcons.length; i++) {
            sortingIcons[i].className = "glyphicon glyphicon-sort";
        }
        document.getElementById(currentColumn).className = iconClassChange;
    }

    function sort(event) {
        let place = event.target;
        let keyForSort = "";

        if (place.tagName === "SPAN") {
            keyForSort = place.nextSibling.textContent;
        } else {
            keyForSort = place.textContent;
        }

        if (keyForSort === "Profile picture" || keyForSort === "Controls") {
            return false;
        } else if (keyForSort === "Skills") {
            keyForSort = "skills";
        }

        if (clickCount[keyForSort] % 2 === 0) {
            if (keyForSort === "Student") {
                students = students.sort(function(a, b) {
                    if (a.name + a.lastName < b.name + b.lastName)  {return -1;}
                    if (a.name + a.lastName > b.name + b.lastName) {return 1;}
                    return 0;
                });
            } else {
            students = students.sort(function(a, b) {
                if (a[keyForSort] < b[keyForSort]) {return -1;}
                if (a[keyForSort] > b[keyForSort]) {return 1;}
                return 0;
            });
            }
            clearStudents();
            renderStudents();
            clickCount[keyForSort]++;
            changeSortIcons(clickCount, keyForSort, "glyphicon glyphicon-sort-by-alphabet");
        } else {
            students = students.reverse();
            clearStudents();
            renderStudents();
            clickCount[keyForSort]++;
            changeSortIcons(clickCount, keyForSort, "glyphicon glyphicon-sort-by-alphabet-alt");
        }
    }

    //end of sorting table head

})();
