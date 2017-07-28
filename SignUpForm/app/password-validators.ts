import { FormControl,  FormGroup} from '@angular/forms';

export class PasswordValidators {
    static minLength(control: FormControl) {
     
       
                // console.log("checking length"+control.value.length);
                if (control.value.length < 4) {
                    
                    return { minLength: true };
                }
                else
                   return null;
           
      
    }

    /*
    *   The returned value should be accessed in a different way
    */
    static matchingPassword(group : FormGroup) {
        let pwdControl = group.controls.password;
        let confirmPwdControl = group.controls.confirm_password;
        console.log(pwdControl.value+" "+confirmPwdControl.value);
        //let confirmPwdControl = group.controls.confirm_password;


        if (pwdControl.value != confirmPwdControl.value) {
            console.log("Dont macth");
            return {
                notMatching: true
            };
        }
        return null;

    }
}