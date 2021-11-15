new Vue({
    el:'sidebar',
    data:{
        display: true,
        items: null,
        sidebar: 
            {
                'home':{
                    class : 'fas fa-home'
                },
                'news':{
                    class : 'far fa-newspaper'
                }
            }
        
    },
    mounted () {
        console.log(this.sidebar)
    },
    methods:{
        

    },
    template:`
    <div id="sidebar">
        <div class="options">
            <div class="option" v-for="options in sidebar" :class="options.class">
            </div>
        </div>
        <div class="settings">
            <i class="fas fa-cog" onclick="openSettings()"></i>
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
                  $("#bgImage").hide();
                  break;
                case 'image':
                  $("#ambient").hide();
                  $("#image").attr("checked", "true")
                  $("#bgImage").fadeIn('slow');
                  $("#bgImage").attr("src", atob(localStorage.getItem("bg-image")))

                  $("#bubble").removeAttr("checked");
                  $("#none").removeAttr("checked");
                  break; 

                case 'none':
                  $("#ambient").hide();
                  $("#none").attr("checked", "true")
                  $("#bgImage").hide();
                  $("#bubble").removeAttr("checked");
                  $("#image").removeAttr("checked");
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
            var self = this
            
            url = url.replaceAll("https://", "");

            $.ajax({
                type: "method",
                url: 'https://icon.horse/icon/' + url ,
                data: "data",
                dataType: "dataType",
                success: function (response) {
                    debugger
                    console.log(response)
                }
            });
        }

    },
    template:`
    <div >
        <div class="bookmarks">
            <div class="add-bookmark" @click="this.openPopup">
                Add Bookmark
                <i class="fas fa-plus" aria-hidden="true"></i>
            </div>
            <div class="bookmark" v-for="items in bookmarks">
                
                <a :href="items.url">
                <img :src="fetchFavicon(items.url)">
                    {{items.url}}
                </a>
            </div>
        </div>
    </div>`,
    
    
})