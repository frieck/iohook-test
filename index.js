const ioHook = require('iohook');
const usb = require('usb');
const logiled = require('logiled');


ioHook.start(false);

const list = usb.getDeviceList()
list.forEach(device => {
    if(device.deviceDescriptor.idVendor == 1133 && device.deviceDescriptor.idProduct == 50484) {
        console.log(device.deviceDescriptor.idVendor.toString(16), 
        device.deviceDescriptor.idProduct.toString(16));
    }
});

ioHook.registerShortcut([29, 11], () => {
    require('active-window').getActiveWindow(callback);
})


// always initialize the library first...
// logiled.init();

// note: you should wait a few milliseconds after initializing

// store the current lighting for restoring it later...
// logiled.saveCurrentLighting();

// set color of all keys to black (LEDs off)
// logiled.setLighting({
//     redPercentage:   0,
//     greenPercentage: 0,
//     bluePercentage:  0
// });

// ... wait a moment to see the effect

// set color of ESC key to blue
// logiled.setLightingForKeyWithKeyName({
//     keyName: logiled.KeyName.ESC, 
//     redPercentage: 0,
//     greenPercentage: 0,
//     bluePercentage: 100
// });

// ... wait a moment to see the effect

// restore the lighting to the state it was saved earlier...
// logiled.restoreLighting();

// finally free the ressources again...
// logiled.shutdown();

// console.log('Done.');



callback = function(window){
    try {
      console.log("Active Window: " + window.app + ': ' + window.title, window.path);
    }catch(err) {
        console.log(err);
    } 
}

