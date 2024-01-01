const section1 = document.querySelector("#section1");
const section2 = document.querySelector("#section2");
const section3 = document.querySelector("#section3");

const value = document.querySelector("#field");

const successTxt = document.querySelector(".success-txt");
const dangerTxt = document.querySelector(".danger-txt");


let number;

const generate_number = () => {

    const num = Math.floor(Math.random() * 6);
    number = num;

};


const generate_number_btn_click = () => {

    section3.style.display = "block";

    section1.style.display = "none";
    section2.style.display = "none";

    successTxt.classList.remove("display-block");
    dangerTxt.classList.remove("display-block");

    setTimeout(() => {
        generate_number();

        section2.style.display = "block";

        section1.style.display = "none";
        section3.style.display = "none";
    }, 3000);

};



const check_number = () => {

    if (value.value == number) {
        successTxt.classList.add("display-block");
        dangerTxt.classList.remove("display-block");
    } else {
        dangerTxt.classList.add("display-block");
        successTxt.classList.remove("display-block");
    }

    setTimeout(() => {
        generate_number_btn_click();
    }, 1500);

}


value.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        check_number()
    }
})