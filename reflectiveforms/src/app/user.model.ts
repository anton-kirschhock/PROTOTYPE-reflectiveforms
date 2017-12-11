import { FormElement, NestedFormElement } from "./services/formelement.decorator";
import { Validators } from "@angular/forms";

export class Address {
    @FormElement(false, [Validators.required]) street: string;
    @FormElement(false, [Validators.required]) number: string;
    @FormElement(false, [Validators.required]) postalCode: string;
    @FormElement(false, [Validators.required]) city: string;
}

export class User {
    @FormElement(false, [Validators.required]) firstName: string;
    @FormElement(false, [Validators.required]) lastName: string;
    @NestedFormElement() address: Address
}