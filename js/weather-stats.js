const currencystats = new Vue({
    el:'currencystats',
    data:{
        display: true,
        items: null
    },
    mounted () {
        this.fetchItems()
    },
    
    
    methods:{
        fetchItems() {

            /*
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(stream => stream.json())
                .then(data => this.items = data)
                .catch(error => console.error(error))*/

                var self = this;
                $.ajax({
                url: "https://api.coincap.io/v2/markets?data",
                method: "GET",
                success: function(data){
                    self.items = data.data;
                    console.log(self.items)
                }
                });
            
        },
        isPrime(num) {
            if(num < 2) console.log(false)
    
            if( num % k == 0){
                console.log(false)
            }
            console.log(true)
        },
        fadeIn(){
            $(this).fadeIn('slow');
        },
        truncNum(num){
            num = parseInt(num);
            return num.toFixed(2);
        }

    },
    template:`<div v-on:click="display = !display, fadeIn">
                <div class="d-flex justify-content-between align-items-center" id="user-drop">
                    <p>Crypto</p>
                    <i class="fas fa-chevron-down"></i>
                </div>
                
                <ul v-if="!display">

                    <li>
                        <p>Rank</p>
                        <p>Base Id</p>
                        <p>Symbol</p>
                        <p>Quote Id</p>
                        <p>Price US</p>
                    </li>

                    <li v-for="item in items">
                        <p>{{item.rank}}</p>
                        <p>{{item.baseId}}</p>
                        <p>{{item.quoteSymbol}}</p>
                        <p>{{item.quoteId}}</p>
                        <p>{{'$' + truncNum(item.priceUsd)}}</p>
                    </li>
                </ul>
              </div>`,
    
    
})

/*
const weatherstats = new Vue({
    el:'weatherstats',
    data:{
        message:"hi",
        display: true,
        lat: null,
        lon: null,
        items: null,
        URL: null, 
        dateStart: Date.now() - 604800,
        dateEnd: Date.now(),
        APIKEY: 'ea8837df503db1cc47357bc3289f366e'
    },
    mounted () {
        this.getLocation()

        
    },
    
    
    methods:{
        
        isPrime(num) {
            if(num < 2) console.log(false)
    
            if( num % k == 0){
                console.log(false)
            }
            console.log(true)
        },
        fadeIn(){
            $(this).fadeIn('slow');
        },
        truncNum(num){
            num = parseInt(num);
            return num.toFixed(2);
        },
        getLocation() {
            if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(this.showPosition);
            }
        },
        showPosition(position) {
            var self = this

            this.lat = position.coords.latitude
            this.lon = position.coords.longitude 
            debugger

            this.URL = "http://history.openweathermap.org/data/2.5/history/city?lat="+
            this.lat + "&lon="+
            this.lon + "&type=hour&start="+
            this.dateEnd + "&end="+
            this.dateStart + "&appid="+
            this.APIKEY
            debugger

            this.fetchItems()
        },
        fetchItems() {
            console.log(this.URL)
            var self = this;
            $.ajax({
            url: self.URL,
            method: "GET",
            success: function(data){
                self.items = data.data;
                console.log(self.items)
            }
            });
        },
    },
    template:`<div v-on:click="display = !display, fadeIn">
                <div class="d-flex justify-content-between align-items-center" id="user-drop">
                    <p>Weather</p>
                    <i class="fas fa-chevron-down"></i>
                </div>
                
                <ul v-if="!display">

                    <li>
                        <p>Rank</p>
                        <p>Base Id</p>
                        <p>Symbol</p>
                        <p>Quote Id</p>
                        <p>Price US</p>
                    </li>

                    <li v-for="item in items">
                        <p>{{item.rank}}</p>
                        <p>{{item.baseId}}</p>
                        <p>{{item.quoteSymbol}}</p>
                        <p>{{item.quoteId}}</p>
                        <p>{{'$' + truncNum(item.priceUsd)}}</p>
                    </li>
                </ul>
              </div>`,
    
    
})
*/