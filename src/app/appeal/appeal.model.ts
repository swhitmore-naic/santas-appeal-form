export class AppealFormModel {
  firstName: string;
  lastName: string;
  address: AddressModel;
  ageRange: string;
  wishList: string;
  naughtyOrNice: string;
  leftCookies: boolean;

  constructor(appealFormValue: AppealFormModel, addressFormValue: AddressModel) {
    this.firstName = appealFormValue.firstName;
    this.lastName = appealFormValue.lastName;
    this.ageRange = appealFormValue.ageRange;
    this.wishList = appealFormValue.wishList;
    this.naughtyOrNice = appealFormValue.naughtyOrNice;
    this.leftCookies = appealFormValue.leftCookies;
    this.address = new AddressModel(addressFormValue.street1, addressFormValue.street2,
                                    addressFormValue.city, addressFormValue.state,
                                    addressFormValue.zip);
  }
}

class AddressModel {
  street1: string;
  street2?: string;
  city: string;
  state: string;
  zip: number;

  constructor(street1, street2, city, state, zip) {
    this.street1 = street1;
    this.street2 = street2;
    this.city = city;
    this.state = state;
    this.zip = zip;
  }
}
