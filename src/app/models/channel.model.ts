interface Device {
  status: string;
  misc: string;
}

interface Devices {
  hulu: Device;
  sling: Device;
  youtube: Device;
  directtv: Device;
  vue: Device;
  fubo?: Device;
}

export class Channel {
  constructor(
    public name: string,
    public image: string,
    public devices: Devices,
    public _id?: string ) {}
}



