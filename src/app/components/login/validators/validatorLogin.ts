import { FormControl } from "@angular/forms";

export class ValidatorLogin {
  static userName(control: FormControl){
    if(!control.value) {
      return { error: 'Digite o usuário.' }
    }
    return null;
  }

  static password(control: FormControl){
    if(!control.value) {
      return { error: 'Digite a sua senha.' }
    }
    return null;
  }
}
