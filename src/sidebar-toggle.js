
function toggleMySidebar() {

    const myToggleIcon = document.querySelector('.fa.fa-snowflake-o');
    const myAppBody = document.querySelector('.app-body');
    const myBlock1 = document.querySelector('.block1');
    const myBlock2 = document.querySelector('.block2');
    const myBlock3 = document.querySelector('.block3');

    myToggleIcon.addEventListener('click', function() {
        const mySideBar = document.querySelector('.side-bar');
        if (mySideBar.classList == "side-bar disabled") {
            mySideBar.classList.remove('disabled');
            myToggleIcon.classList.remove('disabled');
            myAppBody.classList.remove('disabled');
            myBlock1.classList.remove('disabled');
            myBlock2.classList.remove('disabled');
            myBlock3.classList.remove('disabled');
        }
        else {
            mySideBar.classList.add('disabled');
            myToggleIcon.classList.add('disabled');
            myAppBody.classList.add('disabled');
            myBlock1.classList.add('disabled');
            myBlock2.classList.add('disabled');
            myBlock3.classList.add('disabled');
        }
    })
}

export { toggleMySidebar };
