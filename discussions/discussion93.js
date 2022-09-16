/*1)Create a TV class with properties like brand, channel and volume.
Specify brand in a constructor parameter. Channel should be 1 by default. Volume should be 50 by default.
Add methods to increase and decrease volume. Volume can't never be below 0 or above 100.
Add a method to set the channel. Let's say the TV has only 50 channels so if you try to set channel 60 the TV will stay at the current channel.
Add a method to reset TV so it goes back to channel 1 and volume 50. (Hint: consider using it from the constructor).
It's useful to write a status, that returns info about the TV status like: "Panasonic at channel 8, volume 75".
*/

class TV{
    constructor(brand, channel = 1, volume = 50){
        this.brand = brand
        this.channel = channel
        this.volume = volume
    }

    addVolume(){
      if(this.volume > 0 && this.volume < 100){
        this.volume++;
        return this.volume;
      }
    }
    decreaseVolume(){
        if(this.volume > 0 && this.volume < 100){
            this.volume--;
            return this.volume
          }
    }
    setChannel(channel){
        if(channel > 0 && channel <= 50){
            this.channel = channel;
            return this.channel
        }
    }
    resetTV(){
        this.channel = 1
        this.volume = 50
    }

    status(){
        console.log(`brand =>${this.brand} , channel->${this.channel} , volume ->${this.volume}`)
    }
}

let tv = new TV("Panasonic", 8, 75);
alert(tv.addVolume())
alert(tv.setChannel(40))
alert(tv.decreaseVolume())
alert(tv.resetTV())
tv.status()