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
                'spotify':{
                    class: 'fab fa-spotify',
                    link: 'https://open.spotify.com/'
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
        //this.eachTheme()
    },
    methods:{
        //eachTheme(){
        //     var self = this
        //     $("#theme .item").each(function (index, element) {
                
                
        //         $(this).click(function (e) { 
        //             $("#theme .item").removeClass("active");
        //             $(this).toggleClass("active");

        //             $("#theme .item input:radio").removeAttr("checked");
        //             $("input:radio", this).attr("checked", "true")
        //             self.setTheme()

        //         });

        //         if($("input:radio", this).attr("checked", "true")){
        //             $("#theme .item").removeClass("active");
        //             $("#theme .item input:radio").removeAttr("checked");
        //             $("input:radio", this).attr("checked", "true");
        //             $(this).toggleClass("active");
        //         }
        //     });
        // },

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
                  $("#defaultCanvas0").fadeIn('slow');
                  
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
                  $("#bgImage").attr("src", atob(localStorage.getItem("bg-image")))

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
                <label>Preffered News Category:</label>
                <p>{{localStorage.getItem("News-Category")}}</p>
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
                <span><i class="fas fa-water"></i></span>
                <p>Waves</p>
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

new Vue({
    el:'todo',
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
        },
        isImportant(item){
            if (item){
                return '<i class="fas fa-exclamation"></i>'
            } else {
                return ''
            }
        },
        compareDates(){
            debugger
            var today = new Date();
            console.log(today)
        },
        fullscreen(){
            $("#todos").toggleClass("active");
        }

    },
    template:`
    <div id="todos">
        
        <div class="todos">
            
            <div class="todo" v-for="items in todos">
                <i @click="deleteItem(items.name)" class="far fa-trash-alt" data-toggle="tooltip" data-placement="right" title="Delete Item"></i>
                <a>
                <span>
                    <p class="name">{{items.name}}</p>
                    <p>{{items.dueDate}}</p>
                </span>
                    <p v-html="isImportant(items.important)" class="important"></p>
                </a>
            </div>
            <i @click="fullscreen" class="fas fa-expand-alt"></i>
            <div class="add-item" @click="openPopup">
                Add Item
                <i class="fas fa-plus"></i>
            </div>
        </div>
        
    </div>`,
    
    
})

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
            return Math.trunc(num) + "°C";
        }
    },
    template:`
    <div id="weather">
        <p class="title">{{data.name}}</p>
        <p class="description">{{data.weather[0].description}}</p>
        <span class="temp">
            {{truncNum(data.main.temp)}}
            <img :src="returnImg(data.weather[0].icon)">
        </span>
        <span class="hi-low">
            <p>Lows of {{truncNum(data.main.temp_min)}}</p>
            <p>Highs of {{truncNum(data.main.temp_max)}}</p>
        </span>
        <p class="humidity">Humidity: {{data.main.humidity}}%</p>
    </div>`,
    
})


new Vue({
    el:'news',
    data:{
        display: true,
        items: null,
        settings: {
            "async": true,
            "crossDomain": true,
            "url": "https://webit-news-search.p.rapidapi.com/trending?language=en",
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "webit-news-search.p.rapidapi.com",
                "x-rapidapi-key": "b11910c071msh3ea041eaa90af26p14f827jsn36ddcc0c9d92"
            }
        }
        
    },
    mounted () {
        console.clear();
        this.getItems();

        var counter = 0;
		$("#news .grid-item").each(function (index, element) {
            counter += 1;
            debugger

            if (counter > 1)[
                alert("hi")
            ]
        });
    },
    methods:{
        getItems(){
            var self = this
            $.ajax(this.settings).done(function (response) {
                console.log(response);
                self.items = response.data.results;
            });
        },
    },
    template:`
    <div id="news">
            <div class="grid-item" v-for="item in items">
                <a :href="item.url" target="_blank">
                    <div class="card">
                        <img :src="item.image" alt="">
                        <div class="bottom">
                            <p class="title">
                                {{item.title}}
                            </p>
                            <div class="source">
                                {{item.source_name}}
                            </div>
                        </div>
                    </div>
                </a>
            </div>
    </div>`,
    
    
})