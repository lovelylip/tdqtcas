export interface IDmDonVi {
    id?: string;
    ma?: string;
    ten?: string;
}

export class DmDonVi implements IDmDonVi {
    constructor(public id?: string, public ma?: string, public ten?: string) {}
}
