const soundsArray = [
    { buttonName: "Q", item: "Heater 1", link: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" },
    { buttonName: "W", item: "Heater 2", link: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" },
    { buttonName: "E", item: "Heater 3", link: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" },
    { buttonName: "A", item: "Heater 4", link: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" },
    { buttonName: "S", item: "Clap", link: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" },
    { buttonName: "D", item: "Open-HH", link: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" },
    { buttonName: "Z", item: "Kick-n-Hat", link: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" },
    { buttonName: "X", item: "Kick", link: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" },
    { buttonName: "C", item: "Closed-HH", link: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" }
]
/**
 * Function to play sounds based on the item-name from the array soundsArray
 * @param {String} mySoundName
 */
function playSound(mySoundName) {
    let myButtonName = soundsArray.find((sound) => sound.item === mySoundName).buttonName;
    let myAudio = document.getElementById(myButtonName);
    let myDisplayText = document.getElementById('display');
    myDisplayText.innerHTML = '<p>' + mySoundName + '</p>'
    myAudio.play();
}