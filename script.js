document.addEventListener('init', function (event) {
    var page = event.target;
    console.log(page.id)
    if (page.id === 'page1') {
        page.querySelector('#mov1').onclick = function () {
            console.log("movie joker")
            document.querySelector('#myNavigator').pushPage('detailmov1.html')
        }
        page.querySelector('#mov2').onclick = function () {
            console.log("movie avenger")
            document.querySelector('#myNavigator').pushPage('detailmov2.html')
        }
        page.querySelector('#mov3').onclick = function () {
            console.log("movie extraction")
            document.querySelector('#myNavigator').pushPage('detailmov3.html')
        }
        

    } else if (page.id === 'page2') {
        page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
    }
});