canEdit("false")
loadSavedLayout()

function loadSavedLayout(inEdit){
    if (localStorage.getItem("layout") != null){
        $("main").html(localStorage.getItem("layout"))
        $("main").fadeIn(1000);
        

        if (inEdit == "edit"){
            canEdit("true")
        } else {
            canEdit("false")
        }
    } else {
         $("main").fadeIn(1000);

         if (inEdit == "edit"){
            canEdit("true")
        } else {
            canEdit("false")
        }
    }
}

$(function () {
    $(".fa-pen").click(function (e) { 
        if ($("#name-and-clock").length){
            canEdit("true")
            
            $( "main" ).load(window.location.href + " .load" )
            setTimeout(function() {loadSavedLayout("edit")}, 100);
            setTimeout(function() {startEdit()}, 100);
             
            
        } else {
            Swal.fire({
                title: 'Do you want to save the changes?',
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: 'Save',
                denyButtonText: `Don't save`,
              }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                  Swal.fire('Saved!', '', 'success')
                  savePageLayout()
                  $(".fa-save").fadeOut();
                  $(".fa-ban").fadeOut();
                  location.reload()
                } else if (result.isDenied) {
                  Swal.fire('Changes are not saved', '', 'info')
                  location.reload()
                  $(".fa-save").fadeOut();
                  $(".fa-ban").fadeOut();
                }
              })
        }
        
    });

    $(".fa-save").click(function (e) { 
        Swal.fire({
            title: 'Do you want to save the changes?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Save',
            denyButtonText: `Don't save`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              Swal.fire('Saved!', '', 'success')
              $(".fa-save").fadeOut();
              $(".fa-ban").fadeOut();
              savePageLayout()
              $( "main" ).load(window.location.href + " .load" )
                canEdit("false")
                setTimeout(function() {loadSavedLayout()}, 100);
            } else if (result.isDenied) {
              Swal.fire('Changes are not saved', '', 'info')
              $(".fa-save").fadeOut();
              $(".fa-ban").fadeOut();
              $( "main" ).load(window.location.href + " .load" )
                canEdit("false")
                setTimeout(function() {loadSavedLayout()}, 100);
            }
          })
        
    });

    $(".fa-ban").click(function (e) { 
        $(".fa-save").fadeOut();
        $(".fa-ban").fadeOut();
        $( "main" ).load(window.location.href + " .load" )
        canEdit("false")
        setTimeout(function() {loadSavedLayout()}, 100);
    });
});
var components = ['Name-and-Clock', 'weather', 'google-search', 'bookmarks', 'news', 'todo-list', 'Bank-Holiday', 'Dev-Quote', 'Analogue-Clock']


function savePageLayout() {

    $('main div[class^="col-"]').removeClass("edit");
    $('main div[class^="col-"] > *').removeClass("child");

    $.each(components, function (indexInArray, valueOfElement) { 
        $(valueOfElement).text("");
    });

    var page = $("main").html()
    localStorage.setItem("layout", page)    
}

function startEdit(){
        
        $(".fa-save").fadeIn();
        $(".fa-ban").fadeIn();

        $('main div[class^="col-"]').toggleClass("edit");
        $('main div[class^="col-"] > *').toggleClass("child");

        (function() {
            dragula([document.querySelector('.row')], {
              moves: function(el, container, handle) {
                return !handle.classList.contains('child');
              }
            });
          
            dragula([].slice.apply(document.querySelectorAll('.edit')), {
              direction: 'horizontal'
            });
        })();


          
        $.each(components, function (indexInArray, valueOfElement) { 
             $(valueOfElement).text(valueOfElement.replaceAll("-", " "))
             $('<i/>',{
                class: 'fas fa-arrows-alt'
            }).appendTo(valueOfElement);
            $('<input/>',{
                type: 'checkbox',
                text: 'Hidden',
                class: 'hide-opt'
            }).appendTo(valueOfElement);
            $('<p/>',{
                text: 'Hidden',
                class: 'hide-opt-label'
            }).appendTo(valueOfElement);

            //align buttons

            var alignOptions = $('<span/>',{
                class: 'align-options',
            }).appendTo(valueOfElement);

        
            $('<a/>',{
                title: 'Align Left',
                class: 'fas fa-align-left',
                align: 'text-left'
            }).appendTo(alignOptions);

            $('<a/>',{
                title: 'Align Center',
                class: 'fas fa-align-center',
                align: 'text-center'
            }).appendTo(alignOptions);

            $('<a/>',{
                title: 'Align Right',
                class: 'fas fa-align-right',
                align: 'text-right'
            }).appendTo(alignOptions);

            $(valueOfElement + " .align-options a").each(function (index, element) {
                var classToAdd = $(this).attr('align');
                $(this).click(function (e) { 
                    debugger
                    e.preventDefault();
                    $(valueOfElement).removeClass("text-right text-left text-center");
                    $(valueOfElement).addClass(classToAdd);
                });
                
            });





            if ($(valueOfElement).hasClass("hidden")){
                $(valueOfElement + " .hide-opt").prop( "checked", true );
            }

            $(valueOfElement + " .hide-opt").change(function() {
                if(this.checked) {
                    $(valueOfElement).addClass("hidden");
                } else {
                    $(valueOfElement).removeClass("hidden");
                }
            });
        });
}
new Vue({
    el:'sidebar',
    data:{
        display: false,
        items: null,
        sidebar: 
            {
                'home':{
                    class : 'fas fa-home',
                    link: '/'
                },
                'news':{
                    class : 'far fa-newspaper',
                    link: 'https://www.google.co.uk/'
                },
                'edit':{
                    class: 'fas fa-pen',
                }
            }
        
    },
    mounted () {
        console.log(this.sidebar)
    },
    methods:{
        profilePic(){
            return 'https://eu.ui-avatars.com/api/?rounded=true&name=' + localStorage.getItem("name")
        }

    },
    template:`
    <div id="sidebar">
        <div class="options">
            <a class="option" v-for="options in sidebar" :src="options.link">
                <i :class="options.class"></i>
            </a>
        </div>
        <div class="settings">
            
            <i class="fas fa-cog" onclick="openSettings()"></i>
            <i class="fas fa-ban"></i>
            <i class="fas fa-pen"></i>
            <i class="far fa-save"></i>
            <img :src="profilePic()" class="profile">
        </div>
    </div>`,
    
    
})

new Vue({
    el:'settingsmenu',
    props:{
        display: Boolean
    },
    data:{
        svgpath: `<svg width="183" height="114" viewBox="0 0 183 114" fill="var(--accent)" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_f_0_1)">
        <circle cx="80.5" cy="58.5" r="20.5" fill="var(--accent)"></circle>
        </g>
        <g filter="url(#filter1_f_0_1)">
        <circle cx="158.5" cy="79.5" r="20.5" fill="var(--accent)"></circle>
        </g>
        <g filter="url(#filter2_f_0_1)">
        <circle cx="14.5" cy="38.5" r="10.5" fill="var(--accent)"></circle>
        </g>
        <g filter="url(#filter3_f_0_1)">
        <circle cx="32" cy="87" r="18" fill="var(--accent)"></circle>
        </g>
        <g filter="url(#filter4_f_0_1)">
        <circle cx="41.5" cy="16.5" r="12.5" fill="var(--accent)"></circle>
        </g>
        <g filter="url(#filter5_f_0_1)">
        <circle cx="122.5" cy="29.5" r="15.5" fill="var(--accent)"></circle>
        </g>
        <g filter="url(#filter6_f_0_1)">
        <circle cx="150.5" cy="45.5" r="7.5" fill="var(--accent)"></circle>
        </g>
        <g filter="url(#filter7_f_0_1)">
        <circle cx="101" cy="94" r="16" fill="var(--accent)"></circle>
        </g>
        <defs>
        <filter id="filter0_f_0_1" x="56" y="34" width="49" height="49" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
        <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_0_1"></feGaussianBlur>
        </filter>
        <filter id="filter1_f_0_1" x="134" y="55" width="49" height="49" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
        <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_0_1"></feGaussianBlur>
        </filter>
        <filter id="filter2_f_0_1" x="0" y="24" width="29" height="29" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
        <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_0_1"></feGaussianBlur>
        </filter>
        <filter id="filter3_f_0_1" x="10" y="65" width="44" height="44" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
        <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_0_1"></feGaussianBlur>
        </filter>
        <filter id="filter4_f_0_1" x="25" y="0" width="33" height="33" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
        <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_0_1"></feGaussianBlur>
        </filter>
        <filter id="filter5_f_0_1" x="103" y="10" width="39" height="39" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
        <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_0_1"></feGaussianBlur>
        </filter>
        <filter id="filter6_f_0_1" x="139" y="34" width="23" height="23" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
        <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_0_1"></feGaussianBlur>
        </filter>
        <filter id="filter7_f_0_1" x="81" y="74" width="40" height="40" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
        <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_0_1"></feGaussianBlur>
        </filter>
        </defs>
        </svg>`,
        themeType: localStorage.getItem("theme")
    },
    mounted () {
        this.checkTheme()
    },
    methods:{

        checkTheme(){
            if (this.themeType === null){
                localStorage.setItem("theme", "bubble");
            }
            switch(this.themeType) {
                case 'bubble':
                $("#ambient").fadeIn('slow');
                $("#bubble").attr("checked", "true")

                $("#none").removeAttr("checked");
                $("#image").removeAttr("checked");
                $("#Waves").removeAttr("checked");
                $("#bgImage").hide();
                $("#defaultCanvas0").hide();
                
                break;
                case 'Waves':
                $("#Waves").attr("checked", "true")
                setTimeout(function(){
                    $("#defaultCanvas0").fadeIn('slow');
                    
                }, 1800);

                $(":root").css("--background", "black")
                $(":root").css("--font", "white")
                $(":root").css("--accent", "#00B819")
                $("#none").removeAttr("checked");
                $("#image").removeAttr("checked");
                $("#bubble").removeAttr("checked");
                $("#bgImage").hide();
                $("#ambient").hide();
                    
                break;
                case 'image':
                $("#ambient").hide();
                $("#image").attr("checked", "true")
                $("#bgImage").fadeIn('slow');
                var image = atob(localStorage.getItem("bg-image"))
                $("#bgImage").attr("src", image)

                $("#bubble").removeAttr("checked");
                $("#none").removeAttr("checked");
                $("#Waves").removeAttr("checked");
                $("#defaultCanvas0").hide();
                break; 

                case 'none':
                
                $("#none").attr("checked", "true")

                $("#bgImage").hide();
                $("#defaultCanvas0").hide();
                $("#ambient").hide();

                $("#bubble").removeAttr("checked");
                $("#image").removeAttr("checked");
                $("#Waves").removeAttr("checked");
                break;
                default:
            }
        },

        setTheme(){
            var theme = $("#theme-group input:checked").val()
            localStorage.setItem("theme",  theme)
            this.themeType = theme
            this.checkTheme()
        },

        uploadImage(event){
            var image = btoa(URL.createObjectURL(event.target.files[0]).replace(/\.[^/.]+$/, ""));
            //this.getBase64Image(image)
            localStorage.setItem("bg-image", image)
            image = atob(image)
            $("#bgImage").attr("src", image)
        },

    },
    template:`
    <div id="settingsmenu">
        <h2>Info</h2>
        <div id="info-settings">
            <div class="setting">
                <label>Name:</label>
                <p>{{localStorage.getItem("name")}}</p>
            </div>   
            <div class="setting">
                <label>Location:</label>
                <p>{{localStorage.getItem("location")}}</p>
            </div>          
        </div>
        <hr>
        <h2>Theme</h2>
        <fieldset id="theme-group">
        <div id="theme">
        
            <div class="item">
                <span v-html="svgpath"></span>
                <p>Bubble</p>
                <input type="radio" name="theme-group" id="bubble" value="bubble" @click="this.setTheme">
            </div>
            <div class="item">
                <span><i class="fas fa-barcode"></i></span>
                <p>Matrix</p>
                <input type="radio" name="theme-group" id="Waves" value="Waves" @click="this.setTheme">
            </div>
            <div class="item">
                <span><i class="far fa-image"></i></span>
                <p>Background Image</p>
                
                <input type="file" name="" id="imageUpload" @change="this.uploadImage">
                <input type="radio" name="theme-group" id="image" value="image" @click="this.setTheme">
                
            </div>
            <div class="item">
                <span><i class="fas fa-times"></i></span>
                <p>None</p>
                <input type="radio" name="theme-group" id="none" value="none" @click="this.setTheme">
            </div>
        
        </div>
        </fieldset>
        <hr>
        <div id="color-settings">
            <div class="setting">
                <label for="BG-Color">Background Color:</label>
                <p>{{localStorage.getItem("Background-Color")}}</p>
                <input type="color" name="" id="BG-Color">
            </div>
            <div class="setting">
                <label for="FT-Color">Font Color:</label>
                <p>{{localStorage.getItem("Font-Color")}}</p>
                <input type="color" name="" id="FT-Color">
            </div>              
            <div class="setting">
                <label for="AT-Color">Accent Color:</label>
                <p>{{localStorage.getItem("Accent-Color")}}</p>
                <input type="color" name="" id="AT-Color">
            </div>              
        </div>
        
        <hr>
        
    </div>`,
})
function openSettings() {
    $("#settingsmenu").toggleClass("active");
}


function canEdit(answer){
    if (answer == "false"){
    

    
    
    
        if ($("bookmarks").hasClass("hidden") == false){
            new Vue({
                el:'bookmarks',
                data:{
                    display: true,
                    bookmarks: JSON.parse(localStorage.getItem('bookmarks'))
                    
                },
                mounted () {
                    this.ArrayToJson()
                    if (this.bookmarks === null){
                        this.bookmarks = []
                    }
        
                    
                },
                methods:{
                    openPopup(){
                        Swal.fire({
                            title: "Add a Bookmark",
                            text: "Please enter the URL:",
                            input: 'text',
                            showCancelButton: true        
                        }).then((result) => {
                            if (result.value) {
                                var olditems = JSON.parse(localStorage.getItem('bookmarks')) || []
        
                                var newBm = 
                                {
                                'url': result.value
                                };
        
                                olditems.push(newBm)
                                this.bookmarks = olditems
                                this.ArrayToStorage()
                            }
                        });
                    },
                    ArrayToJson(){
                        JSON.parse(this.bookmarks)
                    },
                    ArrayToStorage(){
                        localStorage.setItem("bookmarks", JSON.stringify(this.bookmarks) )
                    },
                    fetchFavicon(url){
                        return 'http://icon.horse/icon/' +  url.replaceAll("https://", "");
                    },
                    shortenUrl(url){
                        return url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split('.')[0]
                    },
                    extendUrl(url){
                        if (url.includes("https://" || "http://") === false){
                            url = "https://" + url
                        }
                        return url
                    },
                    deleteBookmark(BMurl){
        
                        var self = this
        
                        var olditems = JSON.parse(localStorage.getItem('bookmarks')) || []
                        console.log(BMurl)
                        $.each(olditems, function (indexInArray, valueOfElement) { 
                            if (BMurl === valueOfElement.url){
                                olditems.splice(indexInArray, 1)
                                console.log('delete this ' + BMurl)
                                self.bookmarks = olditems
                                self.ArrayToStorage()
                            }
                        });
                    }
        
                },
                template:`
                <div id="bookmarks">
                    
                    <div class="bookmarks">
                        
                        <div class="bookmark" v-for="items in bookmarks">
                            <i @click="deleteBookmark(items.url)" class="far fa-trash-alt" data-toggle="tooltip" data-placement="right" title="Delete Bookmark"></i>
                            <a :href="extendUrl(items.url)" target="_blank">
                                <img :src="fetchFavicon(items.url)">
                                {{shortenUrl(items.url) }}
                            </a>
                        </div>
                        <div class="add-bookmark" @click="this.openPopup">
                            <i class="fas fa-plus" aria-hidden="true"></i>
                            Add Bookmark
                        </div>
                    </div>
                    
                </div>`,
                
                
            })
        }
        
        if ($("todo-list").hasClass("hidden") == false){
            new Vue({
                el:'todo-list',
                data:{
                    display: true,
                    todos: JSON.parse(localStorage.getItem('itemsArray'))
                    
                },
                mounted() {
                    this.ArrayToJson()
                    if (this.todos === null){
                        this.todos = []
                    }
                
                },
                methods:{
                    openPopup(){
                        var self = this
        
                        new swal({
                            title: 'Add Todo',
                            html:
                            `<input type="text" id="swal-input1" class="swal2-input" placeholder="Name">
                                <input type="date" id="swal-input2" name="" id="" class="swal2-input">
                                <span>
                                <label for="swal-input3" >Important</label>
                                <input type="checkbox" id="swal-input3" name="" id="" class="swal2-input">
                                </span>
                                `,
                            preConfirm: function () {
                            return new Promise(function (resolve) {
                                resolve([
                                $('#swal-input1').val(),
                                $('#swal-input2').val()
                                ])
                            })
                            },
                            onOpen: function () {
                            $('#swal-input1').focus()
                            }
                        }).then(function (result) {
        
                            var oldItems = JSON.parse(localStorage.getItem('itemsArray')) || [];
        
                            if(document.querySelector("#swal-input3").checked){
                                var setImportant = true
                            } else {
                                var setImportant = false
                            }
        
                            var newItem = 
                            {
                            'name': result.value[0],
                            'dueDate': result.value[1],
                            'important': setImportant
                            };
        
                            oldItems.push(newItem);
                            self.todos = oldItems
                            localStorage.setItem('itemsArray', JSON.stringify(oldItems));
                        })
                    },
                    ArrayToJson(){
                        JSON.parse(this.todos)
                    },
                    ArrayToStorage(){
                        localStorage.setItem("itemsArray", JSON.stringify(this.todos) )
                    },
                    deleteItem(item){
        
                        var self = this
        
                        var olditems = JSON.parse(localStorage.getItem('itemsArray')) || []
                        console.log(item)
                        $.each(olditems, function (indexInArray, valueOfElement) { 
                            if (item === valueOfElement.name){
                                olditems.splice(indexInArray, 1)
                                console.log('delete this ' + item)
                                self.todos = olditems
                                self.ArrayToStorage()
                            }
                        });
        
                        Swal.fire({
                            toast: true,
                            text: 'Todo Deleted',
                            position: 'bottom-end',
                        })
                    },
                    isImportant(item){
                        if (item){
                            return '<i class="fas fa-exclamation"></i>'
                        } else {
                            return ''
                        }
                    },
                    compareDates(date){
                        if (moment(moment().format('L')).isAfter(date)){
                            return true
                        }
                        
                    },
                    fullscreen(){
                        $("#todos").toggleClass("active");
                    }
                },
                template:`
                <div id="todos">
                    <p class="todo-title">To-Do List</p>
                    <div class="todos">
                        
                        <div class="todo" v-for="items in todos">
                            <i @click="deleteItem(items.name)" class="far fa-trash-alt" data-toggle="tooltip" data-placement="right" title="Delete Item"></i>
                            <a>
                            <span>
                                <p class="name">{{items.name}}</p>
                                <p>{{items.dueDate}}</p>
                            </span>
                                <p v-html="isImportant(items.important)" class="important" title="Important"></p>
                                <i v-if="compareDates(items.dueDate)" class="overdue fas fa-exclamation-triangle" title="Overdue"></i>
                            </a>
                        </div>
                        <i @click="fullscreen" class="fas fa-expand-alt"></i>
                        <div class="add-item" >
                            <span @click="openPopup">
                                Add Item
                                <i class="fas fa-plus"></i>
                            <span>
                        </div>
                    </div>
                    
                </div>`,
                
                
            })
        }

        if ($("weather").hasClass("hidden") == false){
            new Vue({
                el: 'weather',
                data:{
                    display: true,
                    longitude: null,
                    latitude: null,
                    data: null
        
                },
                mounted () {
                    this.getLocation()
                },
                methods:{
                    getLocation() {
                        if (navigator.geolocation) {
                        navigator.geolocation.getCurrentPosition(this.showPosition);
                        }
                    },
                    showPosition(position) {
                        this.latitude = position.coords.latitude
                        this.longitude = position.coords.longitude
                    
                        var self = this
                        console.log("https://api.openweathermap.org/data/2.5/weather?APPID=ea8837df503db1cc47357bc3289f366e&lat="+ this.latitude +"&lon="+ this.longitude +"&units=metric")
                        $.ajax({
                            url: "https://api.openweathermap.org/data/2.5/weather?APPID=ea8837df503db1cc47357bc3289f366e&lat="+ this.latitude +"&lon="+ this.longitude +"&units=metric",
                            context: document.body
                        }).done(function(content) {
        
                            self.data = content
                            localStorage.setItem("location", content.name)
                    
                        });
                    },
                    returnImg(img){
                        return "http://openweathermap.org/img/wn/" + img + ".png"
                    },
                    truncNum(num){
                        return Math.trunc(num) + "??C";
                    }
                },
                template:`
                <div id="weather">
                    <p class="title">{{data.name}}</p>

                    <span class="temp">
                        {{truncNum(data.main.temp)}}
                        <img :src="returnImg(data.weather[0].icon)">
                    </span>
                    <p class="description">{{data.weather[0].description}}</p>
                    
                    <span class="hi-low">
                        <p>Lows of {{truncNum(data.main.temp_min)}}</p>
                        <p>Highs of {{truncNum(data.main.temp_max)}}</p>
                        <p class="humidity">Humidity: {{data.main.humidity}}%</p>
                    </span>
                    
                </div>`,
                
            })
        }

        if ($("news").hasClass("hidden") == false){
            new Vue({
                el:'news',
                data:{
                    display: true,
                    items: null,
                    NewsFirst: null,
                    NewsLast : null,
        
                    url: 'https://gnews.io/api/v4/top-headlines?token=c739938a812e83d058bf79d67283f77c&lang=en',

                    
                },
                mounted () {
                    console.clear();
                    this.getItems();
        

                },
                methods:{
                    getItems(){
                        var self = this
                        $.ajax(this.url).done(function (response) {
                            console.log(response);
                            var items = response.articles;
        
                            var firstTwo = [];
                            var lastItems = [];
        
                            $.each(items, function (indexInArray, valueOfElement) { 
        
                                if (indexInArray >= 2){
                                    lastItems.push(this);
                                } else {
                                    firstTwo.push(this);
                                }
                            });
        
                            self.NewsFirst = firstTwo
                            self.lastItems = lastItems
                        });
                    },
                    showMore(){
                        $(".extend").slideToggle();
                    },
                    validateImg(img){
                        if (img == null || img == undefined || img == ""){
                            return '/img/not-found.jpg'
                        } else {
                            return img
                        }
                    }
                },
                template:`<div>
                <p class="todo-title">News</p>
                <div id="news">
                        <div class="grid-item" v-for="item in NewsFirst">
                            <a :href="item.url" target="_blank">
                                <div class="card">
                                    <img :src="validateImg(item.image)" alt="">
                                    <div class="bottom">
                                        <p class="title">
                                            {{item.title}}
                                        </p>
                                        <div class="source">
                                            {{item.source.name}}
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        
                        <div class="grid-item extend" v-for="item in lastItems">
                            <a :href="item.url" target="_blank">
                                <div class="card">
                                    <img :src="validateImg(item.image)" alt="">
                                    <div class="bottom">
                                        <p class="title">
                                            {{item.title}}
                                        </p>
                                        <div class="source">
                                            {{item.source.name}}
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
        
                        <a class="btn show-more" @click="showMore">Show More</a>
                </div>
                <div>`,
                
                
            })
        }

        if ($("google-search").hasClass("hidden") == false){
            new Vue({
                el:'google-search',
                data:{
                    query: null,
                    url: 'https://www.google.com/search?q='
                },
                mounted(){
                    $("#google-search").keydown(function (e) { 
                        if  (e.keyCode === 13){
                            $(".fa-search").click()
                        }
                    })
                },
                methods:{
                    search(){
                        window.location.href = this.url + this.query;
                    }
                },
                template: `
                <div id="google-area">
                    <div class="bar">
                    <input type="text" name="" id="google-search" placeholder="Google Search" v-bind="query">
                    <i class="fas fa-search" @click="search"></i>
                    </div>  
                </div>
                `

                
            })
        }

        if ($("Name-and-Clock").hasClass("hidden") == false){
            new Vue({
                el:'Name-and-Clock',
                data:{
                    time_of_day: "",
                    d: "",
                    n: "",
                    h: "",
                    m: "",
                    name: "" 
                },
                mounted(){
                    this.setTime()
                    setInterval(this.setTime, 5000)
                    
                    this.name = localStorage.getItem("name")
                    if (this.name === null || this.name == "[Enter Name]")
                    {
                        this.name = "[Enter Name]"
                    }

                    $("#name").blur(function (e) { 
                        localStorage.setItem("name", $("#name").val())
                    });
                },
                methods:{
                    setTime(){
                        this.d = new Date();
                        this.n = this.d.getTime();
                        this.h = this.d.getHours();
                        this.m = this.d.getMinutes();

                        if (this.h >= 0) {
                            this.time_of_day = "morning"
                        }
                    
                        if (this.h > 12) {
                            this.time_of_day = "afternoon"
                        }
                    
                        if (this.h > 17) {
                            this.time_of_day = "evening"
                        }
                    
                        if (this.h > 12) {
                            this.h = this.h - 12;
                        }
                    },
                    setName(){
                        localStorage.setItem("name", this.name.value)
                    }
                },
                template: `
                <div id="name-and-clock">
                    <input type="text" id="name" v-model="name">
                    <p id="introduction">it's currently <span>{{this.m}}</span> minutes past <span>{{this.h}}</span> in the <span>{{this.time_of_day}}</span></p>
                </div>
                `

                
            })
        }

        if ($("Bank-Holiday").hasClass("hidden") == false){
            new Vue({
                el:'Bank-Holiday',
                data:{
                    data: null,
                    nextDay: null
                    
                },
                mounted(){
                    this.getDays()

                },
                methods:{
                    getDays(){
                        var self = this

                        $.ajax({
                            url: "https://www.gov.uk/bank-holidays.json",
                            data: "data",
                            success: function (response) {
                                console.log(response)
                                self.data = response["england-and-wales"].events
                                self.getFirstDay(self.data)
                            }
                        });

                        
                    },
                    getFirstDay(days){
                        var self = this
                        $.each(days, function (indexInArray, valueOfElement) { 
                            //debugger
                            if (moment(moment().format('L')).isAfter(valueOfElement.date) == false){
                                self.nextDay = valueOfElement
                                return false
                            }
                        });
                    }

                },
                template: `
                <div id="Bank-Holiday">
                    <p class="name">
                    The Next Bank Holiday Is {{nextDay.title}}
                    </p>
                    <p class="date">
                    {{moment(nextDay.date, 'YYYY.MM.DD').format('DD/MM/YYYY')}}
                    </p>
                </div>
                `

                
            })
        }

        if ($("Dev-Quote").hasClass("hidden") == false){
            new Vue({
                el:'Dev-Quote',
                data:{
                    quote: null,
                    
                },
                mounted(){
                    this.getQuote()

                },
                methods:{
                    getQuote(){
                        var self = this

                        $.ajax({
                            url: "https://programming-quotes-api.herokuapp.com/quotes/random",
                            data: "data",
                            success: function (response) {
                                self.quote = (response)
                            }
                        });

                        
                    },


                },
                template: `
                <div id="Dev-Quote">
                    <p class="quote">
                    "{{quote.en}}"
                    </p>
                    <p class="author">
                    - {{quote.author}}
                    </p>
                </div>
                `

                
            })
        }

        if ($("Analogue-Clock").hasClass("hidden") == false){
            new Vue({
                el:'Analogue-Clock',
                mounted(){
                    const secondHand = document.querySelector('.second-hand');
                    const minsHand = document.querySelector('.min-hand');
                    const hourHand = document.querySelector('.hour-hand');
                    
                    function setDate() {
                      const now = new Date();
                    
                      const seconds = now.getSeconds();
                      const secondsDegrees = ((seconds / 60) * 360) + 90;
                      secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
                    
                      const mins = now.getMinutes();
                      const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
                      minsHand.style.transform = `rotate(${minsDegrees}deg)`;
                    
                      const hour = now.getHours();
                      const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
                      hourHand.style.transform = `rotate(${hourDegrees}deg)`;
                    }
                    
                    setInterval(setDate, 1000);
                    
                    setDate();
                },

                template: `
                <div id="clock">
                <div class="outer-clock-face">
                <div class="marking marking-one"></div>
                <div class="marking marking-two"></div>
                <div class="marking marking-three"></div>
                <div class="marking marking-four"></div>
                <div class="inner-clock-face">
                  <div class="hand hour-hand"></div>
                  <div class="hand min-hand"></div>
                  <div class="hand second-hand"></div>
                </div>
              </div>
                </div>
                `
            })
        }
    } 

}
