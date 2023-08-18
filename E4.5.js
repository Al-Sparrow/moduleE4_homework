class Devices {
    constructor(name) {
        this.name = name;
    }
}


class ElectroDevice extends Devices {
    constructor(name, power, electric, poweron) {
        super(name);
        this.power = power;
        this.electric = electric;
        this.poweron = poweron;
        this.showPower = function () {
            console.log(power)
        }
    }
    DeviceWork() {
        if (this.poweron===true){this.connected=false;
            console.log("The device is switched off");}else{console.log("Already turned off");}
    }
    deviceSwitching() {
        if (this.poweron===false){this.poweron=true;
            console.log("The device is switched on");}else{console.log("Already enabled");}
    }
}


class AccumCharger extends ElectroDevice {
    constructor(name, power, electric, poweron, voltage, amperage ) {
        super(name, power, electric, poweron);
        this.voltage = voltage;
        this.amperage = amperage;
        this.showPower = function () {
            console.log(power)
        }
    }
}