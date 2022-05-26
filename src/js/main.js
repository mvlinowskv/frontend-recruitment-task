let counter = 0

function alerts(alert, btn) {
    let alerts = document.getElementsByClassName('alert')
    let btns = document.getElementsByClassName('btn-alert')
    let count = document.querySelector('#counter')
    let cross = document.querySelector('#cross')
    let btn_reset = document.getElementById('reset')


    // if (counter > 0) {
    //     counter = document.cookie
    // }




    for (let alert of alerts) {
        for (let btn of btns) {
            document.addEventListener('click', function(e) {
                if (e.target.closest('.btn-alert')) {
                    counter++
                    if (alert.getAttribute('data-btn') == btn.getAttribute('data-display-alert')) {
                        alert.classList.remove('alert-not-display')
                        alert.classList.add('alert-display')
                    }

                    if (counter > 5) {
                        btn_reset.classList.remove('visibility-hidden')
                        btn_reset.classList.add('visibility-visible')

                    } else {
                        btn_reset.classList.add('visibility-hidden')
                        btn_reset.classList.remove('visibility-visible')
                    }





                } else if (!e.target.closest('.view-alert') || e.target.closest('#cross')) {
                    alert.classList.add('alert-not-display')
                    alert.classList.remove('alert-display')
                }


                // let str_counter = counter.toString()

                document.cookie = counter
                console.log(document.cookie)
                count.innerHTML = document.cookie

            })


        }


        btn_reset.addEventListener('click', function() {
            counter = 0
            alert.classList.add('alert-not-display')
            alert.classList.remove('alert-display')

        })

    }

    console.log(document.cookie)
    counter = document.cookie



}
alerts('alert', 'btn')